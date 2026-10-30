/** /tmp SQLite is useful as a cache, but cannot be the sole durable lead destination. */
export function hasDurableDatabase(): boolean {
  const serverless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.LAMBDA_TASK_ROOT || process.env.NETLIFY);
  return !serverless;
}

export async function sendLeadWebhook(payload: unknown): Promise<boolean> {
  if (!process.env.LEADS_WEBHOOK_URL) return false;
  try {
    const response = await fetch(process.env.LEADS_WEBHOOK_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload), signal: AbortSignal.timeout(8000),
    });
    return response.ok;
  } catch { return false; }
}
