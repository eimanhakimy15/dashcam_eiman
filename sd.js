// "Does it work without an SD card?" answers, one per product, with the sources we found.
// verdict: the short answer.  lede: one sentence under it.  points: facts with labels and sources.
(function () {
  var C = 'Manufacturer claim';
  var L = 'Seller claim';
  var O = 'Our take';
  var A = 'https://www.70mai.com/global/a210/';
  var T = 'https://www.70mai.com/global/t400/';
  var TM = 'https://70mai.my/products/t400-dashcam';
  var PDF = 'https://70mai.my/cdn/shop/files/70mai_Dash_Cam_T400_Series_usermanual-web_20251015.pdf';
  var M500 = 'https://www.70mai.com/m500/';
  var U = 'https://safecam.my/collections/feature-on-homepage/products/safecam-ultra-3';
  var UV = 'https://www.youtube.com/watch?v=64SMNcFWZsc';
  var X = 'https://safecam.my/collections/feature-on-homepage/products/safecam-x900';
  var XT = 'https://safecam.my/pages/tutorial-safecam-x900';
  var XG = 'https://safecam.my/pages/x300';
  var XL = 'https://www.lazada.com.my/products/safecam-x300-wifi-3-channel-dashcam-1080p-front-720p-inner-720p-rear-dashcam-wifi-control-24-h-i4307637169.html';
  var ZR = 'https://roadcam.my/products/roadcam-z50';
  var ZL = 'https://roadcam.my/pages/roadcam-z50-tempah-sekarang-cod-2';
  var ZT = 'https://roadcam.my/pages/tutorial-roadcam-z50pro';
  var Z80S = 'https://www.safca.com.my/showproducts/productid/6720554/cid/673763/';
  var NONE = 'No source says it works without one';

  var by = {
    a210: {
      verdict: NONE,
      lede: 'We found no A210 manual or FAQ that says what happens without a card. This is what we did find:',
      points: [
        { text: 'The spec table lists external storage up to 256GB, U1 or faster. No built-in storage is listed.', label: C, sourceUrl: A },
        { text: '70mai recommends its own microSD card for compatibility and stable performance.', label: C, sourceUrl: A },
        { text: 'The manual for the 70mai T400 says "A memory card (sold separately) must be installed in the dash cam before use." We found no A210 manual to check the same line.', label: O, sourceUrl: PDF },
        { text: 'For comparison, the 70mai M500 lists built-in eMMC storage and a "no memory card" feature. The A210 does not.', label: C, sourceUrl: M500 }
      ],
      inference: 'Assume the A210 needs a card to record, as 70mai\'s other models do. Whether it switches on, warns you or shows live view without a card is not stated anywhere we could read. 70mai support (help@70mai.com, printed in the T400 manual) can confirm.',
      sources: [A, PDF, M500]
    },
    t400: {
      verdict: 'The manual says a card is required',
      lede: 'The official T400 manual says a card must be installed before use. It does not say what the camera does if you switch it on without one.',
      points: [
        { text: '"A memory card (sold separately) must be installed in the dash cam before use." The manual lists no internal storage.', label: C, sourceUrl: PDF },
        { text: 'Card spec: 32GB to 512GB, rated U3 (UHS-3) or higher. Format the card in the dash cam the first time you insert it, which deletes everything on it. Do not insert or remove the card while the dash cam is on.', label: C, sourceUrl: PDF },
        { text: 'The 70mai Malaysia store lists a free 64GB card with the T400, with 128GB and 256GB as options.', label: C, sourceUrl: TM },
        { text: 'Whether it switches on, warns you, or shows live view in the app without a card is not stated in the manual or on the product pages.', label: O, sourceUrl: T }
      ],
      inference: 'Treat the T400 as needing a card to record. For anything beyond that, ask 70mai support.',
      sources: [PDF, T, TM]
    },
    'ultra-3': {
      verdict: NONE,
      lede: 'Safecam\'s product page and setup guide do not say what happens without a card. Its official setup video starts with the card:',
      points: [
        { text: 'The official "Ultra-3 SD Card Installation" video (48 seconds, published by Safecam\'s reseller SAFCA, Malay subtitles) starts by inserting the card into the slot, then formatting it, then going back to the home screen and recording as usual.', label: C, sourceUrl: UV },
        { text: 'The "Device + 64GB card" pack includes a 64GB card, and there is an "I already have a memory card" option.', label: C, sourceUrl: U },
        { text: 'When the card is full, the oldest footage is overwritten automatically.', label: C, sourceUrl: U },
        { text: 'Card class, speed and maximum size are not stated.', label: O, sourceUrl: U }
      ],
      inference: 'Treat the Ultra-3 as needing a card to record: the official setup starts with inserting and formatting one. Whether it switches on or shows live view without a card is not stated.',
      sources: [U, UV]
    },
    x900: {
      verdict: NONE,
      lede: 'Safecam\'s X900 setup guide covers inserting and formatting a card but does not say what happens without one.',
      points: [
        { text: 'The setup guide says to format the card in the dash cam menu when you first insert it.', label: C, sourceUrl: XT },
        { text: 'It says first-time setup errors are mostly about the memory card or the car charger, and to press OK on the dash cam to clear them.', label: C, sourceUrl: XT },
        { text: 'The Entry pack has no card. The Value and Complete packs include a 64GB Micro SD card.', label: C, sourceUrl: X },
        { text: 'Card class, speed and maximum size are not stated.', label: O, sourceUrl: X }
      ],
      inference: 'The Entry pack is sold without a card and the setup guide covers formatting one, so assume it needs a card to record. Whether it works without one is not stated.',
      sources: [X, XT]
    },
    x300: {
      verdict: NONE,
      lede: 'Safecam\'s X300 setup guide covers inserting and formatting a card but does not say what happens without one.',
      points: [
        { text: 'The setup guide says to insert the card until it clicks, then format it from the settings menu. Formatting deletes every video on the card.', label: C, sourceUrl: XG },
        { text: 'It says first-time setup errors are mostly about the memory card or the car charger.', label: C, sourceUrl: XG },
        { text: 'The Lazada listing does not say whether a card is included, and sources disagree on the largest card it supports.', label: O, sourceUrl: XL }
      ],
      inference: 'The setup starts with inserting and formatting a card and no built-in storage is listed, so assume it needs a card to record. Whether it works without one is not stated.',
      sources: [XG, XL]
    },
    z50: {
      verdict: NONE,
      lede: 'Roadcam\'s pages and tutorial do not say what happens without a card. They do say recordings live on the card:',
      points: [
        { text: 'The Malay landing page says locked videos are kept safely on the memory card.', label: L, sourceUrl: ZL },
        { text: 'The bundled 32GB card is described as Class 10, U3, A1. roadcam.my lists it free; the SAFCA store bundle has a 64GB card.', label: L, sourceUrl: ZL },
        { text: 'The tutorial page (titled Z50PRO, so it may cover a variant) says to format the card in the dash cam menu after inserting it.', label: L, sourceUrl: ZT },
        { text: 'The DDPAI Z50 manual mentions a built-in eMMC, but we cannot confirm the Roadcam Z50 is the same product, so we do not rely on it.', label: O, sourceUrl: 'https://www.ddpai.com/ph/manuals/z50/' }
      ],
      inference: 'Assume the Z50 needs a card to record, since it is sold with one and the pages talk about footage stored on it. Whether it works without one is not stated. SAFCA support can confirm (WhatsApp 017-3476620).',
      sources: [ZR, ZL, ZT]
    },
    z80: {
      verdict: NONE,
      lede: 'We found no Z80 guide, manual or FAQ. roadcam.my has no Z80 page, and the reseller page only describes the bundle.',
      points: [
        { text: 'The store bundle includes a 64GB memory card.', label: L, sourceUrl: Z80S },
        { text: 'Card class, maximum size, formatting advice and no-card behaviour are not stated.', label: O, sourceUrl: Z80S }
      ],
      inference: 'It is sold with a card and no built-in storage is listed, so assume it needs a card to record. Whether it works without one is not stated. SAFCA support can confirm (WhatsApp 017-3476620).',
      sources: [Z80S]
    }
  };

  window.PRODUCTS.forEach(function (p) {
    var s = by[p.slug];
    if (!s) return;
    p.sdCard = { verdict: s.verdict, lede: s.lede, points: s.points, inference: s.inference };
    p.sdSources = s.sources;
  });

  var u = window.PRODUCTS.filter(function (p) { return p.slug === 'ultra-3'; })[0];
  if (u) {
    u.videos = [
      { id: '64SMNcFWZsc', title: 'Ultra-3 SD Card Installation', channel: 'SAFCA, Safecam\'s reseller' },
      { id: 'BovvTnEAX1I', title: 'Ultra-3 Installation', channel: 'SAFCA, Safecam\'s reseller' },
      { id: 'qpBD79z55S4', title: 'Ultra-3 App Connection', channel: 'SAFCA, Safecam\'s reseller' },
      { id: 'RJv6v6cH1no', title: 'Ultra-3 Screen Saver', channel: 'SAFCA, Safecam\'s reseller' },
      { id: 'MH9eozzsuLQ', title: 'Ultra-3 Infrared Night Vision Function', channel: 'SAFCA, Safecam\'s reseller' }
    ];
  }
})();
