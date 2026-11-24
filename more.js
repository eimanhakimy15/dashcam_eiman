// More products: 70mai T400, Safecam X300, Roadcam Z50 and Roadcam Z80.
// Where a manufacturer page does not exist we use the seller's own product page and say so.
(function () {
  var N = 'https://cdn-www.70mai.com/';
  var TD = N + 'locales/en/t400/';
  var MY = 'https://70mai.my/cdn/shop/files/';
  var NP = 'https://cdn1.npcdn.net/userfiles/28667/file/';
  var LZ = function (id) { return 'https://img.lazcdn.com/g/p/' + id + '.jpg_720x720q80.jpg_.webp'; };
  var T = 'https://www.70mai.com/global/t400/';
  var TM = 'https://70mai.my/products/t400-dashcam';
  var ZR = 'https://roadcam.my/products/roadcam-z50';
  var Z50S = 'https://www.safca.com.my/showproducts/productid/6720431/cid/673763/';
  var Z80S = 'https://www.safca.com.my/showproducts/productid/6720554/cid/673763/';
  var XL = 'https://www.lazada.com.my/products/safecam-x300-wifi-3-channel-dashcam-1080p-front-720p-inner-720p-rear-dashcam-wifi-control-24-h-i4307637169.html';
  var XC = 'https://www.safca.com.my/safecam-dashcam-malaysia-compare-14-channel-models';
  var C = 'Manufacturer claim';
  var L = 'Seller claim';
  var O = 'Our take';
  var shop = function (k) { return 'https://shopee.com.my/search?keyword=' + encodeURIComponent(k); };
  var noReviews = 'We could not find genuine user reviews we can verify for this product in public sources we can read. Shopee and Lazada reviews are not always readable by our tools, so read them directly on the shop page.';

  var list = [
    /* ---------------- 70mai T400 ---------------- */
    {
      slug: 't400', name: 'T400', brand: '70mai', full: '70mai Dash Cam T400',
      tagline: 'Three channels with a 2.5K front camera, infrared cabin view and a 1.9 inch screen.',
      priceShort: 'From RM549', theme: 'light', heroScale: 1.2, heroClip: '13% 0 13% 0',
      hero: MY + 't400_no_sd_card.jpg',
      price: { text: 'RM549 (was RM649) at 70mai Malaysia, with a free 64GB card; 128GB and 256GB options', asOf: '2026-11-24', sourceUrl: TM },
      shopee: { url: 'https://shopee.com.my/-2026-NEW-70mai-T400-3-Channel-Dashcam-2.5K-Built-in-GPS-Infrared-Night-Vision-Supercapacitor-E-hailing-Grab-i.292905608.50806671632', label: 'Buy on Shopee', note: 'Link taken from the official 70mai Malaysia page.' },
      specs: [
        { key: 'Resolution', value: 'Front 2560×1440, rear (RC21) 1920×1080, interior 1920×1080', sourceUrl: T },
        { key: 'Frame rate', value: 'Front 1440P HDR 30FPS, rear 1080P 25FPS, interior 1080P 15FPS', sourceUrl: T },
        { key: 'Field of view', value: 'Front 125°, rear 130°, interior 147°; aperture F1.55', sourceUrl: T },
        { key: 'Sensor', value: null, sourceUrl: T },
        { key: 'Display', value: '1.9 inch', sourceUrl: T },
        { key: 'GPS', value: '5-system: GPS, GLONASS, BeiDou, Galileo, QZSS', sourceUrl: T },
        { key: 'Wi-Fi', value: 'Yes, with app control; standard not stated', sourceUrl: T },
        { key: 'Parking mode', value: '24H parking surveillance with time-lapse recording and collision detection, three channels', sourceUrl: T },
        { key: 'Storage', value: 'Up to 512GB microSD; 70mai Malaysia includes a free 64GB card', sourceUrl: T },
        { key: 'Power', value: 'Supercapacitor', sourceUrl: T },
        { key: 'Voice control', value: 'Yes, English and Mandarin', sourceUrl: T },
        { key: 'Size', value: '5.12 × 1.57 × 0.95 inch', sourceUrl: T },
        { key: 'Warranty', value: null, sourceUrl: TM }
      ],
      sections: [
        {
          id: 'channels', title: 'Effortless 3-Channel Protection', source: T,
          text: 'Front, interior and rear record at the same time, at 125°, 147° and 130°. A built-in screen gives you a live view, and the body stays compact so it does not block your view.',
          tabs: [
            { label: 'Three channels', type: 'image', src: TD + 'img_p3_1@2x.png', alt: 'T400 front, interior and rear footage' },
            { label: 'Field of view', type: 'image', src: TD + 'img_p2_1@2x.png', alt: 'T400 field of view', text: 'Front 125°, interior 147° and rear 130°.' }
          ],
          notes: ['Sample footage is from 70mai and was shot while driving.']
        },
        {
          id: 'clarity', title: 'Vivid Clarity in Every Scenario', source: T,
          text: 'The front camera records 1440P at 30FPS with HDR, so road details stay readable in bright sun, at night and in tunnels.',
          tabs: [
            { label: 'Daytime', type: 'video', src: N + 'video/t400/day.mp4' },
            { label: 'Nighttime', type: 'video', src: N + 'video/t400/night.mp4' },
            { label: 'Tunnel', type: 'video', src: N + 'video/t400/channel.mp4' }
          ],
          notes: ['Videos: 70mai. Clarity is the manufacturer\'s claim, not an independent test.']
        },
        {
          id: 'cabin', title: 'Infrared cabin view', source: T,
          text: 'Automatic infrared switching keeps cabin footage clear in any light. 70mai pitches it at families and at taxi and ride-share drivers.',
          tabs: [
            { label: 'IR on', type: 'image', src: TD + 'img_p5_2@2x.png', alt: 'T400 cabin with infrared on' },
            { label: 'IR off', type: 'image', src: TD + 'img_p5_1@2x.png', alt: 'T400 cabin at night without infrared' }
          ],
          notes: []
        },
        {
          id: 'emergency', title: 'Buffered Emergency Recording', source: T,
          text: 'The T400 saves up to 3 minutes 10 seconds before a collision and 30 seconds after it, and keeps those clips in an Emergency video folder in the 70mai app. The buffer length depends on when the collision happens in the loop and on the loop length you pick (1, 2 or 3 minutes; 1 minute by default).',
          tabs: [{ label: 'Emergency recording', type: 'video', src: N + 'video/t800/buffered-emergency-recording.mp4' }],
          notes: ['Video: 70mai, shown on its T400 page.']
        },
        {
          id: 'parking', title: '24H Parking Surveillance', source: T,
          text: 'While the car is parked, time-lapse recording gives continuous three-angle coverage and saves storage. If an impact is detected, the G-sensor also saves a 30-second emergency clip.',
          tabs: [{ label: '24H parking', type: 'image', src: TD + 'img_p7_3@2x.png', alt: 'T400 24-hour parking surveillance' }],
          steps: [
            { t: 'Power', x: 'The 70mai Malaysia store sells a Hardwire Kit (UP03) as an option for 24-hour recording, which suggests parking mode needs one.', label: O },
            { t: 'Watch', x: 'Time-lapse recording covers all three angles while using less storage.', label: C },
            { t: 'Detect', x: 'The G-sensor senses an impact while the car is parked.', label: C },
            { t: 'Save', x: 'It saves a 30-second emergency clip.', label: C }
          ],
          notes: ['The global product page does not state how the dash cam is powered while parked.']
        },
        {
          id: 'smart', title: 'Seamless Recording, Effortless Control', source: T,
          text: 'The details that matter every day.',
          tabs: [
            { label: 'GPS', type: 'image', src: TD + 'img_p7_1@2x.png', alt: 'T400 GPS', text: 'Five systems (GPS, GLONASS, BeiDou, Galileo and QZSS) give speed and location data you can check in the 70mai app.' },
            { label: 'Supercapacitor', type: 'image', src: TD + 'img_p7_2@2x.png', alt: 'T400 supercapacitor', text: 'A supercapacitor keeps recording steady through heat waves and cold snaps.' },
            { label: 'Voice control', type: 'image', src: TD + 'img_p7_4@2x.png', alt: 'T400 voice control', text: 'Voice commands in English and Mandarin: take photos or videos, turn audio on or off.' },
            { label: 'Loop recording', type: 'image', src: TD + 'img_p7_5@2x.png', alt: 'T400 loop recording', text: 'Loop recording overwrites old footage while locking critical incident moments.' },
            { label: '512GB storage', type: 'image', src: TD + 'img_p7_6@2x.png', alt: 'T400 512GB storage', text: 'Supports cards up to 512GB. 70mai says that is about 13 days of two hours of driving a day on all three channels.' }
          ],
          notes: []
        }
      ],
      pros: [
        { text: 'Three channels with a 2.5K (1440P) HDR front camera and an infrared cabin camera.', label: C, sourceUrl: T },
        { text: 'Five-system GPS, a 1.9 inch screen, voice control and a supercapacitor.', label: C, sourceUrl: T },
        { text: 'Supports cards up to 512GB, and the Malaysian store includes a free 64GB card.', label: C, sourceUrl: TM }
      ],
      cons: [
        { text: 'The interior camera records at only 15FPS and the rear at 25FPS, lower than the front.', label: O, sourceUrl: T },
        { text: 'The front is 2.5K, not 4K.', label: O, sourceUrl: T },
        { text: 'The global page does not say what parking mode needs for power. The Malaysian store sells a Hardwire Kit as an option.', label: O, sourceUrl: TM },
        { text: 'Sensor and warranty length are not stated on the pages we read.', label: O, sourceUrl: T }
      ],
      sdCard: {
        points: [
          { text: 'It supports microSD cards up to 512GB. 70mai says that gives about 13 days at two hours of driving a day with all three channels.', label: C, sourceUrl: T },
          { text: 'The 70mai Malaysia store lists a free 64GB memory card with the T400, with 128GB and 256GB as options.', label: C, sourceUrl: TM },
          { text: 'Neither page says whether the T400 records or switches on without a card.', label: O, sourceUrl: T }
        ],
        inference: 'It is sold with a card and no built-in storage is listed, so assume it needs a card to record. Whether it works without one is not stated.'
      },
      sdSources: [T, TM],
      reviews: { note: noReviews, items: [] },
      videos: [],
      videoLinks: [{ label: '70mai on YouTube', url: 'https://www.youtube.com/channel/UCf5gR9LK9MIGsx80o8KMDfA' }],
      gallery: [TD + 'img_p8@2x.png', MY + 't400_PackagingContents.jpg', MY + 't400_Three-ChannelProtection.png', MY + 't400_SmartParkingMonitorfor24H.png'],
      imageSource: TM
    },

    /* ---------------- Safecam X300 ---------------- */
    {
      slug: 'x300', name: 'X300', brand: 'Safecam', full: 'Safecam X300',
      tagline: 'An entry-level three-channel dash cam with a 3 inch screen and Wi-Fi.',
      priceShort: 'From RM260', theme: 'light', heroMode: 'photo', heroScale: 1,
      hero: LZ('2ba01738887c050960478f4dcfec8365'),
      price: { text: 'RM260.50 (was RM521, 50% off) on Lazada', asOf: '2026-11-24', sourceUrl: XL },
      shopee: { url: XL, label: 'Buy on Lazada', note: 'Safecam does not list the X300 on safecam.my. This is the Lazada listing that carries the Safecam name.' },
      specs: [
        { key: 'Resolution', value: 'Front 1080P, cabin 720P, rear 720P', sourceUrl: XC },
        { key: 'Field of view', value: null, sourceUrl: XL },
        { key: 'Sensor', value: null, sourceUrl: XL },
        { key: 'Display', value: '3 inch (written on the seller\'s product photo)', sourceUrl: XL },
        { key: 'GPS', value: null, sourceUrl: XL },
        { key: 'Wi-Fi', value: 'Yes; watch, download and control recordings in the app', sourceUrl: XL },
        { key: 'Parking mode', value: 'Parking recording with the Type-C 24-hour Hardwire Kit, sold separately', sourceUrl: XL },
        { key: 'Storage', value: 'Memory card size not confirmed; sources disagree', sourceUrl: XL },
        { key: 'Warranty', value: '1 year', sourceUrl: XL }
      ],
      sections: [
        {
          id: 'overview', title: 'Three cameras, one budget.', source: XL,
          text: 'The X300 records the front road, the cabin and the rear at once. The screen and cabin camera are in the main unit, and the rear camera comes on a 6 metre cable.',
          tabs: [
            { label: 'Front', type: 'image', src: LZ('2ba01738887c050960478f4dcfec8365'), alt: 'X300 front view' },
            { label: 'Screen and cabin', type: 'image', src: LZ('18078b67e9287deaa5c2fc968d491616'), alt: 'X300 3 inch screen and inner camera' },
            { label: 'Rear camera', type: 'image', src: LZ('fd2ce7f0da3f82efcc7af72ec17bb7c1'), alt: 'X300 rear camera' }
          ],
          notes: ['Photos are from the seller\'s Lazada listing.']
        },
        {
          id: 'footage', title: 'Sample footage.', source: XL,
          text: 'Seller-supplied frames from the three channels, in daylight and at night. Check them against your own needs: the rear and cabin cameras are 720P.',
          tabs: [
            { label: 'Day', type: 'image', src: LZ('491ffa6d0af2069444c85aca6bd6130b'), alt: 'X300 daytime footage' },
            { label: 'Night', type: 'image', src: LZ('6b00cb6f97d1031efc611bc8402d7316'), alt: 'X300 night footage' },
            { label: 'Cabin', type: 'image', src: LZ('954cc4f6d6271a33caf9def9e17803ee'), alt: 'X300 cabin footage' }
          ],
          notes: ['Frames are the seller\'s own marketing images.']
        },
        {
          id: 'parking', title: 'Parking recording', source: XL,
          text: 'The listing says the dash cam can keep recording while parked, and that you need the Type-C 24-hour Hardwire Kit, sold separately. It does not say how recording is triggered.',
          tabs: [], notes: ['Source: the Lazada listing.']
        }
      ],
      pros: [
        { text: 'Three channels with Wi-Fi at about half the price of a 4K three-channel dash cam.', label: L, sourceUrl: XL },
        { text: 'A 3 inch screen and a 6 metre rear camera cable.', label: L, sourceUrl: XL },
        { text: 'A one-year warranty.', label: L, sourceUrl: XL }
      ],
      cons: [
        { text: 'Cabin and rear cameras are only 720P, and the front is 1080P.', label: C, sourceUrl: XC },
        { text: 'Safecam no longer lists the X300 on its own site, so there is no official product page. Sources disagree on details such as the front resolution and the largest card.', label: O, sourceUrl: XC },
        { text: 'Parking recording needs a Hardwire Kit sold separately. Field of view, sensor and GPS are not stated.', label: L, sourceUrl: XL }
      ],
      sdCard: {
        points: [
          { text: 'The Lazada listing does not say whether the X300 comes with a card.', label: O, sourceUrl: XL },
          { text: 'Sources disagree on the largest card it supports, so check with the seller.', label: O, sourceUrl: XL },
          { text: 'Nothing we read says whether it records without a card.', label: O, sourceUrl: XL }
        ],
        inference: 'It has no built-in storage listed, so assume it needs a card to record. Whether it works without one is not stated.'
      },
      sdSources: [XL],
      reviews: { note: 'The Lazada listing shows no reviews yet. ' + noReviews, items: [] },
      videos: [],
      videoLinks: [{ label: 'Safecam on TikTok', url: 'https://www.tiktok.com/@safecam.malaysia' }],
      gallery: [LZ('5b4a0982df673691c3000643ce29e856'), LZ('2ba01738887c050960478f4dcfec8365'), LZ('18078b67e9287deaa5c2fc968d491616'), LZ('fd2ce7f0da3f82efcc7af72ec17bb7c1')],
      imageSource: XL
    },

    /* ---------------- Roadcam Z50 ---------------- */
    {
      slug: 'z50', name: 'Z50', brand: 'Roadcam', full: 'Roadcam Z50 AR',
      tagline: 'A 4K front and 1080P rear dash cam with AR driving assist, at about RM250.',
      priceShort: 'From RM249', theme: 'light', heroScale: 0.62,
      hero: NP + 'Roadcam_Z50_Website.png',
      price: { text: 'RM249 (was RM499) on roadcam.my with a free 32GB card; RM269 for the store bundle with a 64GB card and installation', asOf: '2026-11-24', sourceUrl: ZR },
      shopee: { url: ZR, label: 'Buy on roadcam.my', note: 'The official Roadcam store. Its reviews are imported from Shopee.' },
      specs: [
        { key: 'Resolution', value: 'Front 4K UHD, rear 1080P Full HD', sourceUrl: Z50S },
        { key: 'Field of view', value: null, sourceUrl: Z50S },
        { key: 'Sensor', value: null, sourceUrl: Z50S },
        { key: 'Display', value: null, sourceUrl: Z50S },
        { key: 'GPS', value: null, sourceUrl: Z50S },
        { key: 'Wi-Fi', value: 'Built in', sourceUrl: Z50S },
        { key: 'AR driving assist', value: 'Yes', sourceUrl: Z50S },
        { key: 'G-sensor', value: 'Built in', sourceUrl: Z50S },
        { key: 'Parking mode', value: '24-hour parking mode and parking monitor listed; power needs not stated', sourceUrl: Z50S },
        { key: 'Storage', value: 'Free 32GB card on roadcam.my; 64GB card in the store bundle; maximum size not stated', sourceUrl: ZR },
        { key: 'Warranty', value: '1 year (shown on the product poster)', sourceUrl: ZR }
      ],
      sections: [
        {
          id: 'overview', title: 'Front 4K. Rear 1080P. AR on the road.', source: Z50S,
          text: 'The Z50 pairs a 4K UHD front camera with a 1080P rear camera. AR Driving Assist is its headline feature: owners describe it estimating the distance to the car ahead and reading number plates, and some say it is not accurate. It also has built-in Wi-Fi and a G-sensor.',
          tabs: [
            { label: 'Z50', type: 'image', src: NP + 'Z50_BRIGHT_1.png', alt: 'Roadcam Z50 close-up' },
            { label: 'Poster', type: 'image', src: 'https://roadcam.my/cdn/shop/files/JUNE25_ROADCAMPREVIEWSHOPEE_Z50_Compressed.png', alt: 'Roadcam Z50 product poster' },
            { label: 'Rear camera', type: 'image', src: NP + 'Rear_Camera_9_01(3).png', alt: 'Roadcam Z50 rear camera' }
          ],
          notes: ['Images come from Roadcam and its reseller.']
        },
        {
          id: 'parking', title: '24-hour parking mode', source: Z50S,
          text: 'The listing names a 24-hour parking mode and a parking monitor, but does not say how it is powered or triggered. One owner says connecting the rear camera and 24-hour recording has to be done at a shop.',
          tabs: [], notes: ['Sources: the reseller\'s product page and one owner comment on roadcam.my.']
        }
      ],
      pros: [
        { text: '4K UHD front and 1080P rear for about RM250, with Wi-Fi and a G-sensor.', label: L, sourceUrl: Z50S },
        { text: 'Owners praise a clear front camera and a compact size.', label: O, sourceUrl: ZR },
        { text: 'Rated 5.0 from 680 reviews, 97% of them five-star, on the roadcam.my page.', label: L, sourceUrl: ZR }
      ],
      cons: [
        { text: 'Several owners say the AR function is not accurate, and one says it did not detect plates, distance or speed.', label: O, sourceUrl: ZR },
        { text: 'One owner doubts the image is really 4K, and another says the rear camera is dark behind dark tint at night.', label: O, sourceUrl: ZR },
        { text: 'Field of view, sensor, screen and GPS are not stated. The listing does not say how parking mode is powered.', label: O, sourceUrl: Z50S }
      ],
      sdCard: {
        points: [
          { text: 'roadcam.my lists the Z50 with a free 32GB memory card.', label: L, sourceUrl: ZR },
          { text: 'The reseller\'s store bundle includes a 64GB card and professional installation.', label: L, sourceUrl: Z50S },
          { text: 'The maximum card size, and whether it records without a card, are not stated.', label: O, sourceUrl: ZR }
        ],
        inference: 'It is sold with a card and no built-in storage is listed, so assume it needs a card to record. Whether it works without one is not stated.'
      },
      sdSources: [ZR, Z50S],
      reviews: {
        note: 'These come from the roadcam.my product page, which imports Shopee reviews (5.0 stars from 680 reviews, 97% five-star). Most are in Malay; we summarise them. Dates are not shown.',
        items: [
          { tone: 'good', text: 'An owner says the picture and recorded sound are clear, the build quality is good and the compact size is a plus.', site: 'roadcam.my (Shopee review)', url: ZR },
          { tone: 'good', text: 'An owner finds the front camera very clear and says the rear is clear and bright too.', site: 'roadcam.my (Shopee review)', url: ZR },
          { tone: 'good', text: 'An owner says the AR distance and plate reading is useful, and the front is bright.', site: 'roadcam.my (Shopee review)', url: ZR },
          { tone: 'bad', text: 'The most-helpful negative review says the picture is very clear but the AR function is not accurate and misreads plates day and night.', site: 'roadcam.my (Shopee review)', url: ZR },
          { tone: 'bad', text: 'An owner says the dash cam does not detect number plates, following distance or speed.', site: 'roadcam.my (Shopee review)', url: ZR },
          { tone: 'bad', text: 'An owner says it is good enough for a front dash cam at that price but cannot say it is really 4K, and doubts the rear quality.', quote: 'good enough for a front dash cam for that price', site: 'roadcam.my (Shopee review)', url: ZR },
          { tone: 'bad', text: 'An owner says connecting the rear camera and 24-hour recording has to be done at a shop.', site: 'roadcam.my (Shopee review)', url: ZR },
          { tone: 'bad', text: 'An owner says the rear camera is very dark at night on a car with dark tint.', site: 'roadcam.my (Shopee review)', url: ZR }
        ]
      },
      videos: [],
      videoLinks: [{ label: 'Roadcam on TikTok', url: 'https://www.tiktok.com/@roadcam.malaysia' }],
      gallery: [NP + 'Z50_BRIGHT_1.png', 'https://roadcam.my/cdn/shop/files/JUNE25_ROADCAMPREVIEWSHOPEE_Z50_Compressed.png', NP + 'Roadcam_Z50_Website.png'],
      imageSource: Z50S
    },

    /* ---------------- Roadcam Z80 ---------------- */
    {
      slug: 'z80', name: 'Z80', brand: 'Roadcam', full: 'Roadcam Z80 3-Ch AR',
      tagline: 'A three-channel dash cam: 2K front, 1080P cabin and rear, with AR driving assist.',
      priceShort: 'RM309 store bundle', theme: 'dark', heroScale: 0.64,
      hero: NP + 'Roadcam_Z80_Website.png',
      price: { text: 'RM309 for the store bundle with a 64GB card and professional installation, at the SAFCA physical store only', asOf: '2026-11-24', sourceUrl: Z80S },
      shopee: { url: shop('Roadcam Z80'), label: 'Search on Shopee', note: 'There is no official online store page for the Z80 that we could read, so this is a Shopee search.' },
      specs: [
        { key: 'Resolution', value: 'Front 2K, inner 1080P, rear 1080P', sourceUrl: Z80S },
        { key: 'Field of view', value: null, sourceUrl: Z80S },
        { key: 'Sensor', value: null, sourceUrl: Z80S },
        { key: 'Display', value: null, sourceUrl: Z80S },
        { key: 'GPS', value: null, sourceUrl: Z80S },
        { key: 'Wi-Fi', value: 'Built in', sourceUrl: Z80S },
        { key: 'AR driving assist', value: 'Yes', sourceUrl: Z80S },
        { key: 'G-sensor', value: 'Built in', sourceUrl: Z80S },
        { key: 'Parking mode', value: '24-hour parking mode listed; power needs not stated', sourceUrl: Z80S },
        { key: 'Storage', value: '64GB card in the store bundle; maximum size not stated', sourceUrl: Z80S },
        { key: 'Warranty', value: null, sourceUrl: Z80S }
      ],
      sections: [
        {
          id: 'overview', title: 'Three channels with AR.', source: Z80S,
          text: 'The Z80 records the front in 2K, plus 1080P cabin and rear cameras. AR Driving Assist, built-in Wi-Fi, a G-sensor and a 24-hour parking mode are listed.',
          tabs: [
            { label: 'Z80', type: 'image', src: NP + 'Roadcam_Z80_Website.png', alt: 'Roadcam Z80 with rear camera' },
            { label: 'Another angle', type: 'image', src: NP + '1.png', alt: 'Roadcam Z80 side view' },
            { label: 'Rear camera', type: 'image', src: NP + 'Rear_Camera_9_01(4).png', alt: 'Roadcam Z80 rear camera' }
          ],
          notes: ['Images come from the reseller\'s product page.']
        },
        {
          id: 'parking', title: '24-hour parking mode', source: Z80S,
          text: 'The listing names a 24-hour parking mode. It does not say how the dash cam is powered while parked or how recording is triggered.',
          tabs: [], notes: ['Source: the reseller\'s product page.']
        }
      ],
      pros: [
        { text: 'Three channels with a 2K front and 1080P cabin and rear cameras.', label: L, sourceUrl: Z80S },
        { text: 'AR Driving Assist, built-in Wi-Fi and a G-sensor.', label: L, sourceUrl: Z80S },
        { text: 'The store bundle includes a 64GB card and professional installation for a stated RM309.', label: L, sourceUrl: Z80S }
      ],
      cons: [
        { text: 'The bundle is only sold at the physical store, so you cannot just order it online.', label: L, sourceUrl: Z80S },
        { text: 'Field of view, sensor, screen, GPS and warranty are not stated.', label: O, sourceUrl: Z80S },
        { text: 'We could not find any owner reviews or tests we can verify.', label: O, sourceUrl: Z80S }
      ],
      sdCard: {
        points: [
          { text: 'The store bundle includes a 64GB memory card.', label: L, sourceUrl: Z80S },
          { text: 'The maximum card size, and whether it records without a card, are not stated.', label: O, sourceUrl: Z80S }
        ],
        inference: 'It is sold with a card and no built-in storage is listed, so assume it needs a card to record. Whether it works without one is not stated.'
      },
      sdSources: [Z80S],
      reviews: { note: noReviews, items: [] },
      videos: [],
      videoLinks: [{ label: 'Roadcam on TikTok', url: 'https://www.tiktok.com/@roadcam.malaysia' }],
      gallery: [NP + 'Roadcam_Z80_Website.png', NP + '1.png', NP + 'Rear_Camera_9_01(4).png'],
      imageSource: Z80S
    }
  ];

  list.forEach(function (p) { window.PRODUCTS.push(p); });

  // Ultra-3: the Safecam product list shows the full price range.
  var u = window.PRODUCTS.filter(function (p) { return p.slug === 'ultra-3'; })[0];
  if (u) {
    u.price.text = 'RM349 to RM419 depending on the pack (RM399 with a 64GB card)';
    u.price.sourceUrl = 'https://safecam.my/collections/all';
    u.sections.forEach(function (s) {
      s.tabs.forEach(function (t) { if (t.label === 'Complete') t.text = 'Adds the 24H Hardwire Kit for parking mode. The Safecam list shows prices up to RM419.'; });
    });
  }

  // Order shown in the menu and catalog.
  var order = ['a210', 't400', 'ultra-3', 'x900', 'x300', 'z50', 'z80'];
  window.PRODUCTS.sort(function (a, b) { return order.indexOf(a.slug) - order.indexOf(b.slug); });
})();
