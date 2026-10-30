# Aurora Hills hero imagery — October 30, 2026

## Decision and assets

Generated with the built-in OpenAI image-generation tool, inspired by the existing actual-site gallery photographs (avenue/flowering median and panoramic terraced layout). This is an artist's impression, not a photograph or a promise of completed infrastructure. Both screen layouts visibly disclose this. Actual gallery photography remains unchanged.

- Desktop: `public/images/aurora-hills-sunrise-hero.webp` (290,386 bytes).
- Mobile: `public/images/aurora-hills-sunrise-hero-mobile.webp` (296,056 bytes).
- WebP encoding: quality 85. Original generated PNGs retained in the local Codex generated-images folder.
- Desktop uses the wide landscape behind the headline/form with a directional ivory scrim. Mobile uses a 160px scenic strip before the form, cropped at 76% vertically. This adds approximately 180px before the mobile form versus the earlier text-only hero. Earlier audit vertical-position measurements are historical.
- Labels: artist's impression; desktop also directs visitors to actual photos below.

## Desktop generation prompt

Use case: ads-marketing. Create a premium photorealistic architectural landscape hero image for The Aurora Hills, a residential villa-PLOT development in Kelgeri, Dharwad, Karnataka, India. Landscape 16:9, ideally 2560x1440 or higher. This is an artist's impression, not a documentary site photo. Inspired by the real site's gently terraced low Deccan hills, warm reddish laterite soil, fresh black asphalt internal avenues, pale concrete paver sidewalks, simple slim streetlights, and small landscaped medians with yellow marigolds and native shrubs. Show a graceful internal road starting at the lower center and winding through a small number of rectangular empty villa plots on the right, open green countryside and softly layered LOW hills in the distance. Plot edges subtly marked with small pale survey stones, realistic restrained landscaping, some exposed earthy soil, natural irregular grass. NO built villas, no buildings, no gates, no clubhouse, no lake, no mountains, no fantasy resort or implausible engineering. Elevated human-scale viewpoint, editorial architectural photography with 35mm lens, natural textures and convincing depth; bright warm early morning sunshine, pale luminous sky with soft clouds, rich but restrained green and warm cream palette. The left 42 percent should be serene lightly sunlit sky and softly detailed pale grass/landscape so dark website text reads over it; strongest scenic detail and winding road in lower center/right. Sky occupies upper 40 percent. Beautiful natural contrast, crisp believable road detail, no milky fog, no washed-out white veil, no HDR neon greens. Entire canvas is the landscape image only, absolutely NO text, logo, typography, watermarks, UI, borders or collage. Sophisticated and welcoming, a premium South Indian hillside plotted community.

## Mobile generation prompt

Used the generated desktop image as the reference.

Create a matching MOBILE hero variant of this exact Aurora Hills landscape visual, vertical 9:16 portrait composition, high resolution. Retain the same warm early-morning photographic atmosphere, low Deccan hills of Dharwad, natural green and reddish earth plots, winding black asphalt avenue, pale paver sidewalks, restrained marigolds and young native trees. Recompose for a smartphone website rather than squeezing the wide image: upper 48% is serene pale warm ivory-blue sky with a few delicate clouds, horizon around mid-frame, low hills across middle; a graceful road curves from lower right toward middle with open marked villa plots and native trees. Key scenic detail should remain visible near the right edge and lower half. Artist's impression, realistic plotted residential land ONLY, no built villas, no mountains, no lake, no resort amenities, no entrance monument. No text, no logos, no UI, no border. Crisp natural photographic texture, tasteful color, no white fog or haze filter.

## Verification

Visually checked at 1440x1000 and 390x844. Mobile image loads with no horizontal page overflow. Desktop attribution moved to bottom-left to avoid the floating WhatsApp button. No lead-flow logic changed and no real enquiry submitted.

Production build and standalone TypeScript check passed before publication.
