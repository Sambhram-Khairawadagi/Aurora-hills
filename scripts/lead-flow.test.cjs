// Isolated route tests: no database, SMTP, webhook, or advertising requests leave this process.
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
function load(file, mocks, globals = {}) {
  const source = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.React } }).outputText;
  const exports = {};
  vm.runInNewContext(source, { exports, require: id => { if (!(id in mocks)) throw Error(`Unexpected dependency: ${id}`); return mocks[id]; }, console: { log() {}, warn() {}, error() {} }, process: { env: {} }, ...globals }, { filename: file });
  return exports;
}
async function checkRoute(route, options = {}) {
  const captured = [];
  let webhookFinished = false;
  let confirmationSent = false;
  const create = async ({ data }) => { if (options.dbFails) throw Error('DB unavailable'); captured.push(data); return { id: 'test-record', ...data }; };
  const api = load(`app/api/${route}/route.ts`, {
    'next/server': { NextResponse: { json: (body, init) => ({ body, status: init?.status || 200 }) } },
    '@/lib/db': { db: { lead: { create }, siteVisit: { create }, analyticsEvent: { create: async () => ({}) } } },
    '@/lib/email': { sendAdminNotification: async () => Boolean(options.email), sendUserConfirmation: async () => { confirmationSent = true; } },
    '@/lib/lead-delivery': { hasDurableDatabase: () => Boolean(options.durable), sendLeadWebhook: async () => { await Promise.resolve(); webhookFinished = true; return Boolean(options.webhook); } },
  });
  const response = await api.POST({ json: async () => ({ name: 'Audit Test', phone: '9999999999', email: 'audit@example.invalid', preferred_date: '2026-12-01', gclid: 'test-click', utm_campaign: 'test-campaign', ...options.body }), headers: { get: () => '' } });
  return { ...response, captured, webhookFinished, confirmationSent };
}
(async () => {
  let checks = 0;
  for (const route of ['leads', 'site-visits']) {
    let result = await checkRoute(route, { dbFails: true });
    assert.equal(result.status, 503); assert.equal(result.body.success, false); assert.equal(result.confirmationSent, false); checks++;
    result = await checkRoute(route); // Ephemeral serverless DB alone is insufficient.
    assert.equal(result.status, 503); checks++;
    result = await checkRoute(route, { durable: true });
    assert.equal(result.body.success, true); assert.equal(JSON.parse(result.captured[0].notes).gclid, 'test-click'); checks++;
    result = await checkRoute(route, { dbFails: true, email: true });
    assert.equal(result.status, 200); checks++;
    result = await checkRoute(route, { dbFails: true, webhook: true });
    assert.equal(result.status, 200); assert.equal(result.webhookFinished, true); checks++;
    for (const body of [{ phone: '1234567890' }, { phone: 9999999999 }, { name: ' ' }, { email: {} }]) {
      result = await checkRoute(route, { body, email: true }); assert.equal(result.status, 400); checks++;
    }
  }
  const events = [];
  const tracking = load('lib/gtag.ts', {}, { window: { gtag: (...args) => events.push(args) } });
  tracking.trackPhoneClick(); tracking.trackWhatsAppClick();
  assert.equal(events.filter(e => e[1] === 'conversion').length, 0); checks++;
  tracking.trackLeadSubmit('Test', '30x40');
  assert.equal(events.filter(e => e[1] === 'conversion').length, 1); checks++;
  const delivery = load('lib/lead-delivery.ts', {}, {
    process: { env: { VERCEL: '1', LEADS_WEBHOOK_URL: 'https://example.invalid/test' } },
    AbortSignal, fetch: async () => ({ ok: false }),
  });
  assert.equal(delivery.hasDurableDatabase(), false); checks++;
  assert.equal(await delivery.sendLeadWebhook({ test: true }), false); checks++;
  const successfulDelivery = load('lib/lead-delivery.ts', {}, {
    process: { env: { LEADS_WEBHOOK_URL: 'https://example.invalid/test' } },
    AbortSignal, fetch: async () => ({ ok: true }),
  });
  assert.equal(await successfulDelivery.sendLeadWebhook({ test: true }), true); checks++;
  // Exercise the brochure submit handler with rejected and accepted responses.
  for (const success of [false, true]) {
    const seeds = ['Audit Test', '9999999999', '', '', false, false];
    let cursor = 0;
    const updates = [];
    const conversions = [];
    const react = {
      createElement: (type, props, ...children) => ({ type, props: props || {}, children }),
      useState: initial => { const index = cursor++; return [seeds[index] ?? initial, value => updates.push({ index, value })]; },
      useEffect() {},
    };
    const component = load('components/BrochureModal.tsx', {
      react: { ...react, default: react },
      'lucide-react': new Proxy({}, { get: (_, key) => key }),
      '@/components/Modal': { Modal: 'dialog' },
      'canvas-confetti': { default() {} },
      '@/lib/utm': { getStoredUtm: () => ({ gclid: 'test-click' }) },
      '@/lib/gtag': { trackLeadSubmit: (...args) => conversions.push(args) },
    }, { fetch: async () => ({ ok: success, json: async () => ({ success, error: 'Delivery unavailable' }) }) });
    const tree = component.BrochureModal({ isOpen: true, onClose() {} });
    function findForm(node) { if (!node || typeof node !== 'object') return; if (node.type === 'form') return node; return node.children?.flat(Infinity).map(findForm).find(Boolean); }
    await findForm(tree).props.onSubmit({ preventDefault() {} });
    assert.equal(updates.some(u => u.index === 5 && u.value === true), success);
    assert.equal(conversions.length, success ? 1 : 0); checks++;
  }
  console.log(`Passed ${checks} isolated lead delivery, validation, attribution and conversion checks.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
