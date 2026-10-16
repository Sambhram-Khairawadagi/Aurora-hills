async function testLive() {
  const res = await fetch('https://www.theaurorahills.com/?nocache=' + Date.now());
  const html = await res.text();
  
  console.log('--- LIVE HTML CHECK ---');
  console.log('Status: 200 OK');
  console.log('Includes AW-16689411973 in Head:', html.includes('AW-16689411973'));
  console.log('Includes HeroLeadCard HTML:', html.includes('Get HDUDA Layout Map &amp; Pricing') || html.includes('Get HDUDA Layout Map & Pricing'));
  console.log('Includes 10-digit WhatsApp input:', html.includes('WhatsApp Mobile Number'));
  console.log('Includes Dasara & Deepawali Booking Gift Live:', html.includes('Dasara &amp; Deepawali Booking Gift Live') || html.includes('Dasara & Deepawali Booking Gift Live'));
  
  // Extract all script chunk paths
  const scriptRegex = /src="(\/_next\/static\/chunks\/[^"]+\.js)"/g;
  let match;
  const scriptUrls = [];
  while ((match = scriptRegex.exec(html)) !== null) {
    scriptUrls.push(match[1]);
  }
  
  console.log('Total JS chunks found:', scriptUrls.length);
  
  let foundConversionSnippet = false;
  let foundTagId = false;
  let foundSnippetChunk = '';
  
  for (const url of scriptUrls) {
    try {
      const jsRes = await fetch('https://www.theaurorahills.com' + url);
      const js = await jsRes.text();
      if (js.includes('I9fRCMn3upwdEIXvkJY-')) {
        foundConversionSnippet = true;
        foundSnippetChunk = url;
      }
      if (js.includes('AW-16689411973')) {
        foundTagId = true;
      }
    } catch (e) {
      // ignore
    }
  }
  
  console.log('Found Google Ads Tag ID (AW-16689411973) in chunks:', foundTagId);
  console.log('Found Aurora Hills Lead Snippet (I9fRCMn3upwdEIXvkJY-) in chunks:', foundConversionSnippet);
  if (foundSnippetChunk) {
    console.log('Chunk containing conversion snippet:', foundSnippetChunk);
  }
}

testLive().catch(console.error);
