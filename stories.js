// Story sections: one big heading, a short explanation, then large media with optional tabs.
// tab: { label, type: 'image' | 'video', src, alt, text }.   steps: how a feature works.
// Edit this file to change the sections on a product page.
(function () {
  var N = 'https://cdn-www.70mai.com/';
  var AD = N + 'locales/en/a210/';
  var SC = 'https://cdn.store-assets.com/s/1436101/';
  var A = 'https://www.70mai.com/global/a210/';
  var U = 'https://safecam.my/collections/feature-on-homepage/products/safecam-ultra-3';
  var X = 'https://safecam.my/collections/feature-on-homepage/products/safecam-x900';
  var C = 'Manufacturer claim';
  var O = 'Our take';
  var parkingText = function (u) {
    return {
      id: 'parking', title: '24-hour parking monitor', source: u,
      text: 'The parking monitor keeps watch while you are away. It needs the 24H Hardwire Kit, which is included in the Complete pack. The product page does not explain how recording is triggered, so we cannot tell you whether it uses a motion or an impact sensor.',
      tabs: [], notes: ['Source: the product page. We have not seen a demo video.']
    };
  };
  var by = {};

  by.a210 = {
    heroScale: 1.25,
    heroPhoto: AD + 'kv@2x.png',
    sections: [
      {
        id: 'dual', title: 'Dual-Channel Recording*', source: A,
        text: 'Front footage is 1080P at up to 60FPS, so fast traffic looks smoother. Add 1080P rear recording and both ends of the car are covered. The 132° front view keeps more of the road in frame.',
        tabs: [
          { label: 'Day Vision', type: 'image', src: AD + '2ch_tab_day@2x.png', alt: 'A210 day footage, front and rear' },
          { label: 'Super Night Vision', type: 'image', src: AD + '2ch_tab_night@2x.png', alt: 'A210 night footage', text: 'An f/1.6 aperture lets in more light, so night footage shows more road detail. 70mai also credits a sensor upgrade (FSI to BSI) with 20% better low-light performance.' }
        ],
        notes: ['*The RC21 rear camera is sold separately.', '**At 60FPS the resolution is 1080P and HDR is not supported.', 'Sample footage is from 70mai. Brightness and low-light figures are the manufacturer\'s claims, not independent tests.']
      },
      {
        id: 'hdr', title: 'Experience Your Journey in HDR*', source: A,
        text: 'HDR, from 70mai\'s own algorithm, smooths the jump between bright and dark areas and helps keep road signs and number plates readable in tricky light.',
        tabs: [{ label: 'HDR', type: 'image', src: AD + 'experience_your_journey_in_hdr@2x.png', alt: 'A210 HDR footage' }],
        notes: ['*When HDR is on, the frame rate switches to 30FPS automatically.']
      },
      {
        id: 'emergency', title: 'Buffered Emergency Recording*', source: A,
        text: 'Accidents do not start at the moment of impact. When a collision is detected, the camera saves up to 190 seconds before it and 30 seconds after it, and locks those clips in an Emergency Video folder in the 70mai app.',
        tabs: [{ label: 'Emergency recording', type: 'video', src: N + 'video/x800/buffered.mp4' }],
        notes: ['*Pre-recording length depends on your loop setting and when the collision happens.', 'Video: 70mai.']
      },
      {
        id: 'parking', title: '24H Parking Surveillance*', source: A,
        text: 'While the car is parked, the built-in G-sensor detects a collision and starts recording by itself. When you switch the dash cam back on, it alerts you.',
        tabs: [
          { label: 'Collision Detection', type: 'video', src: N + 'video/collisiondetection-4k.mp4' },
          { label: 'Time-Lapse Recording', type: 'video', src: N + 'video/6-Time-LapseRecording.mp4', text: '70mai also shows a time-lapse recording mode for parking. The page gives a sample video but does not describe how it works.' }
        ],
        steps: [
          { t: 'Power', x: 'The Hardwire Kit connects the dash cam to the car so it can stay on when the engine is off.', label: O },
          { t: 'Detect', x: 'The built-in G-sensor senses a bump or collision while the car is parked.', label: C },
          { t: 'Record', x: 'The dash cam starts recording by itself and saves the clip.', label: C },
          { t: 'Alert', x: 'When you turn the dash cam on again, it tells you something was recorded.', label: C }
        ],
        notes: ['*Parking surveillance needs the 70mai Hardwire Kit, sold separately.', 'Video: 70mai.']
      },
      {
        id: 'smart', title: 'Continuous Recording, Smart Control', source: A,
        text: 'The basics that keep a dash cam useful every day.',
        tabs: [
          { label: 'Loop Recording', type: 'image', src: AD + 'swiper_loopRecording@2x.png', alt: 'Loop recording', text: 'Loop recording overwrites the oldest files so recording never stops for lack of space. Important footage is saved separately and protected.' },
          { label: 'Supercapacitor', type: 'image', src: AD + 'swiper_supercapacitor@2x.png', alt: 'Supercapacitor', text: 'A supercapacitor instead of a battery, built for extreme temperatures. 70mai claims up to 500,000 charge cycles, from its own lab.' },
          { label: 'Wi-Fi App Control', type: 'image', src: AD + 'swiper_appControl@2x.png', alt: 'Wi-Fi app control', text: 'Control the dash cam, view footage and download clips on your phone through the 70mai app, over built-in Wi-Fi.' },
          { label: '256GB Storage', type: 'image', src: AD + 'swiper_256GB@2x.png', alt: '256GB storage', text: 'Supports microSD cards up to 256GB. 70mai recommends its own microSD card for compatibility.' }
        ],
        notes: []
      }
    ],
    compare: {
      name: 'A200', source: A,
      rows: [
        ['HDR', 'Yes', 'Yes'], ['Resolution', 'Front and rear 1080P', 'Front and rear 1080P'], ['Frame rate', 'Front 30FPS (HDR) or 60FPS', 'Front 30FPS (HDR) or 60FPS'],
        ['Field of view', 'Front 132°, rear 130°', 'Front 120°, rear 130°'], ['Aperture', 'f/1.6', 'f/2.0'], ['Screen', '1.9 inch', '2 inch'],
        ['Storage', 'Up to 256GB, U1 or above', 'Up to 128GB'], ['GPS', 'Yes', 'No'], ['Wi-Fi', 'Wi-Fi 6, up to 5MB/s', 'Wi-Fi 4, up to 2MB/s'],
        ['Supercapacitor', 'Yes', 'No'], ['App control', 'Yes', 'Yes']
      ]
    }
  };

  by['ultra-3'] = {
    heroScale: 0.92,
    sections: [
      {
        id: 'one-unit', title: 'Dual recording, half the mess.', source: U,
        text: 'Front, cabin and rear record together from one unit behind the mirror, so there is less to mount and fewer cables. The comparison with an old dash cam is Safecam\'s own image.',
        tabs: [{ label: 'One unit', type: 'image', src: SC + 'i/101864017.png', alt: 'Ultra-3 installed behind the mirror' }], notes: []
      },
      {
        id: 'sensor', title: 'Sony IMX335 sensor.', source: U,
        text: 'A Sony IMX335 sensor behind a 170° wide-angle lens with an f/1.8 aperture records the 4K front view.',
        tabs: [{ label: 'Sensor', type: 'image', src: SC + 'i/101863998.png', alt: 'Ultra-3 front lens' }], notes: []
      },
      {
        id: 'cabin', title: '2K fisheye cabin camera.', source: U,
        text: 'A fisheye cabin camera records the driver and the front and rear passengers.',
        tabs: [{ label: 'Cabin', type: 'image', src: SC + 'i/101864000.png', alt: 'Ultra-3 cabin view' }], notes: []
      },
      {
        id: 'packs', title: 'Choose your pack.', source: U,
        text: 'The Ultra-3 comes in three packs.',
        tabs: [
          { label: 'Device only', type: 'image', src: SC + 'i/101866940.png', alt: 'Ultra-3 device only', text: 'The dash cam on its own. From RM349.' },
          { label: '+ 64GB card', type: 'image', src: SC + 'i/101866959.png', alt: 'Ultra-3 with 64GB card', text: 'Adds a 64GB card. RM399.' },
          { label: 'Complete', type: 'image', src: SC + 'i/101866986.png', alt: 'Ultra-3 complete pack', text: 'Adds the 24H Hardwire Kit for parking mode. Price not stated.' }
        ],
        notes: []
      },
      parkingText(U)
    ]
  };

  by.x900 = {
    heroScale: 1.05,
    sections: [
      {
        id: 'three', title: 'Next-level three-channel setup.', source: X,
        text: 'Front 4K UHD, cabin 1080P and rear 1080P.',
        tabs: [{ label: 'Three channels', type: 'image', src: SC + 'i/102764474.png', alt: 'X900 three-channel setup' }], notes: []
      },
      {
        id: '4k', title: '4K UHD front.', source: X,
        text: 'The manufacturer says true 4K recording with sharper detail and better handling of light.',
        tabs: [{ label: '4K UHD', type: 'image', src: SC + 'i/102764477.png', alt: 'X900 4K UHD' }],
        notes: ['Detail and light handling are the manufacturer\'s claims.']
      },
      {
        id: 'inner', title: 'Cabin camera built in.', source: X,
        text: 'The cabin camera is built into the main unit, so the windscreen stays tidy. The unit also has 2.4GHz Wi-Fi for app control.',
        tabs: [{ label: 'Built in', type: 'image', src: SC + 'f/16996464.png', alt: 'X900 features' }], notes: []
      },
      {
        id: 'packs', title: 'Choose your pack.', source: X,
        text: 'The X900 comes in three packs.',
        tabs: [
          { label: 'Entry', type: 'image', src: SC + 'f/16997674.png', alt: 'X900 entry pack', text: 'Main unit and a 1080P rear camera. RM279. No card.' },
          { label: 'Value', type: 'image', src: SC + 'f/16997676.png', alt: 'X900 value pack', text: 'Adds a 64GB Micro SD card. RM309.' },
          { label: 'Complete', type: 'image', src: SC + 'f/16997682.png', alt: 'X900 complete pack', text: 'Adds the 24-hour Hardwire Kit for parking mode. RM329.' }
        ],
        notes: []
      },
      parkingText(X)
    ]
  };

  window.PRODUCTS.forEach(function (p) { Object.assign(p, by[p.slug]); });
})();
