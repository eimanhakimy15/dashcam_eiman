// Product data. Edit this file to change specs, images, Shopee links, reviews or videos, or to add a product.
// Every spec has a sourceUrl. Missing data is null and is shown as "Not stated".
// reviews.items: { tone: "good" | "bad", text, quote, site, url, date }.   videos: { id, title, channel } (YouTube id).
(function () {
  var MY = 'https://70mai.my/cdn/shop/files/';
  var SC = 'https://cdn.store-assets.com/s/1436101/';
  var A = 'https://www.70mai.com/my/a210';
  var U = 'https://safecam.my/collections/feature-on-homepage/products/safecam-ultra-3';
  var X = 'https://safecam.my/collections/feature-on-homepage/products/safecam-x900';
  var XT = 'https://safecam.my/pages/tutorial-safecam-x900';
  var M500 = 'https://www.70mai.com/m500/';
  var C = 'Manufacturer claim';
  var O = 'Our take';
  var shop = function (k) { return 'https://shopee.com.my/search?keyword=' + encodeURIComponent(k); };
  var noReviews = 'We could not find genuine user reviews we can verify for this product in public sources we can read (product page, forums, blogs). Shopee reviews cannot be read by our tools, so read them directly on Shopee.';
  var safecamLinks = [
    { label: 'Safecam on TikTok', url: 'https://www.tiktok.com/@safecam.malaysia' },
    { label: 'Safecam on Instagram', url: 'https://www.instagram.com/safecam.malaysia/' }
  ];

  window.PRODUCTS = [
    {
      slug: 'a210',
      name: 'A210',
      brand: '70mai',
      full: '70mai Dash Cam A210',
      tagline: 'Compact 1080P dual-channel with Wi-Fi 6, GPS and a supercapacitor.',
      priceShort: 'See Shopee for price',
      theme: 'light',
      hero: MY + 'A210_whitebackground.webp?v=1786693947',
      statements: ['1080P front and rear.', '132° wide view.', 'Wi-Fi 6 and GPS built in.'],
      price: { text: 'Not stated on the manufacturer page', asOf: '2026-11-24', sourceUrl: A },
      shopee: { url: 'https://shopee.com.my/-2026-NEW-70mai-A210-Dashcam-1080P-Full-HD-HDR-Dual-Channel-Built-in-GPS-Supercapacitor-Super-Night-Vision-i.292905608.7747468422', label: 'Buy on Shopee', note: 'Link taken from the official 70mai Malaysia page.' },
      specs: [
        { key: 'Resolution', value: 'Front and rear 1080P; front 30FPS (HDR) or 60FPS', sourceUrl: A },
        { key: 'Field of view', value: 'Front 132°, rear 130°, aperture f/1.6', sourceUrl: A },
        { key: 'Sensor', value: null, sourceUrl: A },
        { key: 'Display', value: '1.9 inch', sourceUrl: A },
        { key: 'GPS', value: 'Built in', sourceUrl: A },
        { key: 'Wi-Fi', value: 'Wi-Fi 6, downloads up to 5MB/s', sourceUrl: A },
        { key: 'Parking mode', value: '24-hour parking surveillance; Hardwire Kit required, sold separately', sourceUrl: A },
        { key: 'Storage', value: 'Up to 256GB, U1 or faster', sourceUrl: A },
        { key: 'Power', value: 'Supercapacitor (claimed up to 500,000 charge cycles)', sourceUrl: A },
        { key: 'Warranty', value: null, sourceUrl: A }
      ],
      highlights: [
        { kind: 'res', big: '1080P', small: 'Front and rear', note: 'Front 30FPS with HDR, or 60FPS', sourceUrl: A },
        { kind: 'fov', big: '132°', small: 'Front field of view', note: 'Rear 130°, aperture f/1.6', sourceUrl: A, deg: 132 },
        { kind: 'wifi', big: 'Wi-Fi 6', small: 'Up to 5MB/s downloads', note: 'Control and download clips from the app', sourceUrl: A },
        { kind: 'gps', big: 'GPS', small: 'Built in', note: '', sourceUrl: A },
        { kind: 'screen', big: '1.9"', small: 'Built-in screen', note: '', sourceUrl: A },
        { kind: 'card', big: '256GB', small: 'microSD, U1 or faster', note: 'A card is not described as included', sourceUrl: A },
        { kind: 'park', big: '24h', small: 'Parking surveillance', note: 'Needs a Hardwire Kit, sold separately', sourceUrl: A },
        { kind: 'warranty', big: 'No data', small: 'Warranty not stated', note: '', sourceUrl: A, missing: true }
      ],
      features: [
        { image: MY + 'a210_kv.webp?v=1784272509', title: 'Front to rear, day to night', text: 'Dual-channel 1080P with HDR, Super Night Vision, GPS, supercapacitor and Wi-Fi. The RC21 rear camera is sold separately.', label: C, sourceUrl: A },
        { image: MY + 'a210_super_night_vision.webp?v=1784272509', title: 'Super Night Vision, f/1.6', text: 'An f/1.6 lens to gather more light. The brightness figure in the image is 70mai\'s own comparison, not an independent test.', label: C, sourceUrl: A },
        { image: MY + 'a210_wide_fov.webp?v=1784272510', title: '132° wide view', text: 'Front 132° and rear 130°. The manufacturer says it can cover up to three lanes.', label: C, sourceUrl: A },
        { image: MY + 'a210_built_in_gps.webp?v=1784272510', title: 'Built-in GPS', text: 'GPS records location and route as evidence.', label: C, sourceUrl: A },
        { image: MY + 'a210_extreme_weather.webp?v=1784272509', title: 'Supercapacitor, not a battery', text: 'The manufacturer claims up to 500,000 charge cycles.', label: C, sourceUrl: A },
        { image: MY + 'a210_buffered_emergency_recording.webp?v=1784272510', title: 'Emergency recording', text: 'Up to 190 seconds before and 30 seconds after a collision, stored separately.', label: C, sourceUrl: A },
        { image: MY + 'a210_gsensor_collision.webp?v=1784272510', title: 'G-sensor and parking mode', text: 'Collision detection and parking standby. 24-hour parking mode needs a Hardwire Kit, sold separately.', label: C, sourceUrl: A }
      ],
      pros: [
        { text: 'Built-in GPS and a 1.9 inch screen.', label: C, sourceUrl: A },
        { text: 'Wi-Fi 6 should move clips faster than ordinary 2.4GHz Wi-Fi.', label: O, sourceUrl: A },
        { text: 'Supports cards up to 256GB.', label: C, sourceUrl: A }
      ],
      cons: [
        { text: 'The rear camera (RC21) is sold separately, so it is not part of the basic dash cam.', label: C, sourceUrl: A },
        { text: 'At 60FPS HDR is not supported; with HDR on, the frame rate drops to 30FPS.', label: C, sourceUrl: A },
        { text: '24-hour parking mode needs a Hardwire Kit, sold separately.', label: C, sourceUrl: A },
        { text: 'Only 1080P, not 2K or 4K.', label: O, sourceUrl: A }
      ],
      sdCard: {
        points: [
          { text: 'The spec table lists external storage up to 256GB, U1 or faster. No built-in storage is listed.', label: C, sourceUrl: A },
          { text: '70mai recommends its own microSD card for compatibility and stable performance.', label: C, sourceUrl: A },
          { text: 'For comparison, the 70mai M500 lists built-in eMMC storage and a "no memory card" feature. The A210 does not.', label: C, sourceUrl: M500 }
        ],
        inference: 'No built-in storage is listed, so assume the A210 needs a card to record. Whether it powers on or shows live view without a card is not stated.'
      },
      sdSources: [A, M500],
      reviews: { note: noReviews, items: [] },
      videos: [],
      videoLinks: [{ label: '70mai on YouTube', url: 'https://www.youtube.com/channel/UCf5gR9LK9MIGsx80o8KMDfA' }],
      gallery: [MY + 'A210_Front_Cam_UP03.webp?v=1784862442', MY + 'a210_kv.webp?v=1784272509', MY + 'a210_whats_included.webp?v=1784272509'],
      imageSource: 'https://70mai.my/products/70mai-a210-dashcam'
    },
    {
      slug: 'ultra-3',
      name: 'Ultra-3',
      brand: 'Safecam',
      full: 'Safecam Ultra-3',
      tagline: 'Three channels: 4K front, 2K cabin, 2K rear, with 5GHz Wi-Fi.',
      priceShort: 'From RM349',
      theme: 'light',
      hero: SC + 'i/101866940.png',
      statements: ['4K front. 2K cabin. 2K rear.', 'One unit behind the mirror.', '170° wide angle, Sony IMX335.'],
      price: { text: 'From RM349 (RM399 with a 64GB card); Complete Pack price not stated', asOf: '2026-11-24', sourceUrl: U },
      shopee: { url: shop('Safecam Ultra-3'), label: 'Search on Shopee', note: 'The Safecam site has no Shopee link, so this is a search.' },
      specs: [
        { key: 'Resolution', value: 'Front 4K (2160P), cabin 2K fisheye, rear 2K (1440P)', sourceUrl: U },
        { key: 'Field of view', value: 'Front 170°, aperture f/1.8; cabin and rear not stated', sourceUrl: U },
        { key: 'Sensor', value: 'Sony IMX335 (front)', sourceUrl: U },
        { key: 'Display', value: null, sourceUrl: U },
        { key: 'GPS', value: 'Built in; location and speed saved with each clip', sourceUrl: U },
        { key: 'Wi-Fi', value: '5GHz; a one-minute 4K clip downloads in about 16 seconds', sourceUrl: U },
        { key: 'Parking mode', value: 'Parking monitor; needs the 24H Hardwire Kit (in the Complete Pack)', sourceUrl: U },
        { key: 'Storage', value: '64GB card in the Device + 64GB package; maximum size not stated', sourceUrl: U },
        { key: 'Warranty', value: '2 years', sourceUrl: U }
      ],
      highlights: [
        { kind: 'res', big: '4K', small: 'Front 4K (2160P)', note: 'Cabin 2K fisheye, rear 2K (1440P)', sourceUrl: U },
        { kind: 'fov', big: '170°', small: 'Front field of view', note: 'Sony IMX335, aperture f/1.8', sourceUrl: U, deg: 170 },
        { kind: 'wifi', big: '5GHz', small: '5GHz Wi-Fi', note: 'A one-minute 4K clip in about 16 seconds', sourceUrl: U },
        { kind: 'gps', big: 'GPS', small: 'Built in', note: 'Location and speed saved with each clip', sourceUrl: U },
        { kind: 'screen', big: 'No data', small: 'Display not stated', note: '', sourceUrl: U, missing: true },
        { kind: 'card', big: '64GB', small: 'Card in the Device + 64GB package', note: 'Class and maximum size not stated', sourceUrl: U },
        { kind: 'park', big: '24h', small: 'Parking monitor', note: 'Needs the 24H Hardwire Kit (Complete Pack)', sourceUrl: U },
        { kind: 'warranty', big: '2 years', small: 'Warranty', note: 'Local support in Penang', sourceUrl: U }
      ],
      features: [
        { image: SC + 'i/101864017.png', title: 'One unit, less clutter', text: 'Front, cabin and rear record together from one unit behind the mirror. The comparison with an old dash cam is the manufacturer\'s image.', label: C, sourceUrl: U },
        { image: SC + 'i/101863998.png', title: 'Sony IMX335 for 4K front', text: 'Sony IMX335 sensor, 170° wide-angle lens and f/1.8 aperture.', label: C, sourceUrl: U },
        { image: SC + 'i/101864000.png', title: '2K fisheye cabin camera', text: 'Records the driver and the front and rear passengers.', label: C, sourceUrl: U }
      ],
      pros: [
        { text: 'Three channels (4K front, 2K cabin, 2K rear) in one unit behind the mirror.', label: C, sourceUrl: U },
        { text: 'Built-in GPS and a 2-year warranty.', label: C, sourceUrl: U },
        { text: '5GHz Wi-Fi should transfer 4K files faster than 2.4GHz.', label: O, sourceUrl: U }
      ],
      cons: [
        { text: '24-hour parking mode needs the Hardwire Kit, which only comes in the Complete Pack.', label: C, sourceUrl: U },
        { text: 'The product page does not state a screen size, so it is unclear whether there is a screen.', label: O, sourceUrl: U },
        { text: 'Installation is done at a shop for a fee; free shipping is for Peninsular Malaysia only.', label: C, sourceUrl: U }
      ],
      sdCard: {
        points: [
          { text: 'The "Device + 64GB card" package includes a 64GB card, and there is an "I already have a memory card" option.', label: C, sourceUrl: U },
          { text: 'Card class, speed and maximum size are not stated.', label: O, sourceUrl: U },
          { text: 'When the card is full, the oldest footage is overwritten automatically.', label: C, sourceUrl: U }
        ],
        inference: 'It is sold with a card and no built-in storage is mentioned, so assume it needs a card to record. Whether it works without a card is not stated.'
      },
      sdSources: [U],
      reviews: { note: noReviews, items: [] },
      videos: [],
      videoLinks: safecamLinks,
      gallery: [SC + 'i/101866959.png', SC + 'i/101866986.png', SC + 'i/101866940.png'],
      imageSource: U
    },
    {
      slug: 'x900',
      name: 'X900',
      brand: 'Safecam',
      full: 'Safecam X900',
      tagline: '4K front, 1080P cabin and rear, at an easy price.',
      priceShort: 'From RM279',
      theme: 'dark',
      hero: SC + 'f/16997674.png',
      statements: ['4K front. 1080P cabin and rear.', 'Three channels from RM279.', 'Cabin camera built into the main unit.'],
      price: { text: 'RM279 to RM329 depending on the pack (Entry, Value, Complete)', asOf: '2026-11-24', sourceUrl: X },
      shopee: { url: shop('Safecam X900'), label: 'Search on Shopee', note: 'The Safecam site has no Shopee link, so this is a search.' },
      specs: [
        { key: 'Resolution', value: 'Front 4K, cabin 1080P, rear 1080P', sourceUrl: X },
        { key: 'Field of view', value: null, sourceUrl: X },
        { key: 'Sensor', value: null, sourceUrl: X },
        { key: 'Display', value: null, sourceUrl: X },
        { key: 'GPS', value: null, sourceUrl: X },
        { key: 'Wi-Fi', value: '2.4GHz', sourceUrl: X },
        { key: 'Parking mode', value: 'Parking monitor; needs the 24H Hardwire Kit (in the Complete pack)', sourceUrl: X },
        { key: 'Storage', value: '64GB card in the Value and Complete packs; maximum size not stated', sourceUrl: X },
        { key: 'Warranty', value: '1 year (1-to-1 exchange)', sourceUrl: X }
      ],
      highlights: [
        { kind: 'res', big: '4K', small: 'Front 4K UHD', note: 'Cabin and rear 1080P', sourceUrl: X },
        { kind: 'fov', big: 'No data', small: 'Field of view not stated', note: 'Sensor is not stated either', sourceUrl: X, missing: true },
        { kind: 'wifi', big: '2.4GHz', small: '2.4GHz Wi-Fi', note: 'Preview and download through the app', sourceUrl: X },
        { kind: 'gps', big: 'No data', small: 'GPS not stated', note: '', sourceUrl: X, missing: true },
        { kind: 'screen', big: 'No data', small: 'Display not stated', note: '', sourceUrl: X, missing: true },
        { kind: 'card', big: '64GB', small: 'In the Value and Complete packs', note: 'The Entry pack has no card', sourceUrl: X },
        { kind: 'park', big: '24h', small: 'Parking monitor', note: 'Needs the 24H Hardwire Kit (Complete pack)', sourceUrl: X },
        { kind: 'warranty', big: '1 year', small: 'Warranty', note: '1-to-1 exchange', sourceUrl: X }
      ],
      features: [
        { image: SC + 'i/102764474.png', title: 'Three-channel setup', text: 'Front 4K UHD, cabin 1080P and rear 1080P.', label: C, sourceUrl: X },
        { image: SC + 'i/102764477.png', title: '4K UHD front', text: 'The manufacturer says true 4K recording with sharper detail and better light handling.', label: C, sourceUrl: X },
        { image: SC + 'f/16996464.png', title: 'Built-in cabin camera, parking and Wi-Fi', text: 'The cabin camera is built into the main unit. 24-hour parking needs a Hardwire Kit (Complete pack). 2.4GHz Wi-Fi for app control.', label: C, sourceUrl: X }
      ],
      pros: [
        { text: 'Three channels with a 4K front for RM279 to RM329.', label: C, sourceUrl: X },
        { text: 'The cabin camera is built into the main unit, with no extra cable on the windscreen.', label: C, sourceUrl: X },
        { text: 'The Complete pack already includes a 64GB card and the Hardwire Kit for parking mode.', label: C, sourceUrl: X }
      ],
      cons: [
        { text: 'Field of view, sensor, display and GPS are not stated on the product page.', label: O, sourceUrl: X },
        { text: '2.4GHz Wi-Fi only, so transferring 4K clips may be slower than on the Ultra-3.', label: O, sourceUrl: X },
        { text: 'The warranty is 1 year, and the product page shows no customer reviews yet.', label: O, sourceUrl: X }
      ],
      sdCard: {
        points: [
          { text: 'The Entry pack has no card. The Value and Complete packs include a 64GB Micro SD card.', label: C, sourceUrl: X },
          { text: 'The setup guide asks you to format the card on the dash cam when you first use it, and says first-time setup errors are usually about the memory card or the car charger (press OK).', label: C, sourceUrl: XT },
          { text: 'Card class, speed and maximum size are not stated.', label: O, sourceUrl: X }
        ],
        inference: 'The Entry pack is sold without a card and the setup guide covers formatting one, so assume it needs a card to record. Whether it works without a card is not stated.'
      },
      sdSources: [X, XT],
      reviews: { note: noReviews, items: [] },
      videos: [],
      videoLinks: safecamLinks,
      gallery: [SC + 'i/102766188.png', SC + 'f/16997676.png', SC + 'f/16997682.png'],
      imageSource: X
    }
  ];
})();
