// Videos played right on each product page.
// k: 'mp4' (a video file), 'yt' (YouTube id) or 'tt' (TikTok video id).  r: '16/9' landscape or '9/16' portrait.
// u: the page the video comes from.  by: who made it.  d: length.  note: shown under the player.
(function () {
  var N = 'https://cdn-www.70mai.com/video/';
  var SH = 'https://cdn.shopify.com/videos/c/o/v/';
  var A = 'https://www.70mai.com/global/a210/';
  var T = 'https://www.70mai.com/global/t400/';
  var XT = 'https://safecam.my/pages/tutorial-safecam-x900';
  var XG = 'https://safecam.my/pages/x300';
  var ZL = 'https://roadcam.my/pages/roadcam-z50-tempah-sekarang-cod-2';
  var ZT = 'https://roadcam.my/pages/tutorial-roadcam-z50pro';
  var UG = 'https://safecam.my/pages/safecam-ultra-3';
  var S = 'SAFCA, Safecam\'s reseller';

  var by = {
    a210: [
      { title: 'Collision detection while parked', k: 'mp4', s: N + 'collisiondetection-4k.mp4', r: '16/9', by: '70mai', u: A, d: '0:06' },
      { title: 'Time-lapse parking recording', k: 'mp4', s: N + '6-Time-LapseRecording.mp4', r: '16/9', by: '70mai', u: A, d: '0:05' },
      { title: 'Buffered emergency recording', k: 'mp4', s: N + 'x800/buffered.mp4', r: '16/9', by: '70mai', u: A, d: '0:15' }
    ],
    t400: [
      { title: 'Daytime footage', k: 'mp4', s: N + 't400/day.mp4', r: '16/9', by: '70mai', u: T, d: '0:09' },
      { title: 'Nighttime footage', k: 'mp4', s: N + 't400/night.mp4', r: '16/9', by: '70mai', u: T, d: '0:11' },
      { title: 'Tunnel footage', k: 'mp4', s: N + 't400/channel.mp4', r: '16/9', by: '70mai', u: T, d: '0:07' },
      { title: 'Buffered emergency recording', k: 'mp4', s: N + 't800/buffered-emergency-recording.mp4', r: '16/9', by: '70mai', u: T, d: '0:16', note: 'This clip is shown on 70mai\'s T400 page.' }
    ],
    'ultra-3': [
      { title: 'Installation', k: 'yt', s: 'BovvTnEAX1I', r: '9/16', by: S, u: UG },
      { title: 'SD card installation', k: 'yt', s: '64SMNcFWZsc', r: '9/16', by: S, u: UG, d: '0:48' },
      { title: 'App connection', k: 'yt', s: 'qpBD79z55S4', r: '9/16', by: S, u: UG },
      { title: 'Screen saver', k: 'yt', s: 'RJv6v6cH1no', r: '9/16', by: S, u: UG },
      { title: 'Infrared night vision', k: 'yt', s: 'MH9eozzsuLQ', r: '9/16', by: S, u: UG }
    ],
    x900: [
      { title: 'How to format the SD card', k: 'mp4', s: SH + 'cbb37db43e3a45f08a4851e03218168c.mp4', r: '9/16', by: 'Safecam', u: XT, d: '0:31' },
      { title: 'How to connect the X900 Wi-Fi', k: 'mp4', s: SH + 'aa4f116652c34fd89135904f88df6063.mov', r: '9/16', by: 'Safecam', u: XT, d: '0:52' },
      { title: '24-hour parking mode', k: 'mp4', s: SH + '3fd4450b071c439f8fde810bc6875007.mov', r: '9/16', by: 'Safecam', u: XT, d: '0:44', note: 'Safecam says this feature only works with a 24-hour hardwire kit.' },
      { title: 'Setting up the X900', k: 'mp4', s: SH + '660eb6eae132434580e530d8fee5343a.mov', r: '9/16', by: 'Safecam', u: XT, d: '2:21' },
      { title: 'How to install the X900', k: 'mp4', s: SH + '1be8f968a08f42d8891a4478291ae9d7.mov', r: '9/16', by: 'Safecam', u: XT, d: '1:37' }
    ],
    x300: [
      { title: 'X300 overview', k: 'tt', s: '7472606363416415506', r: '9/16', by: 'Safecam on TikTok', u: 'https://www.tiktok.com/@safecam.malaysia/video/7472606363416415506' },
      { title: 'How to format the SD card (part 1)', k: 'mp4', s: SH + '103d8b1587bc4b9dbd053ebe4903513a.mp4', r: '16/9', by: 'Safecam', u: XG, d: '0:21' },
      { title: 'How to format the SD card (part 2)', k: 'mp4', s: SH + '955e2a72c70841fe858cb33ce8ecc402.mp4', r: '9/16', by: 'Safecam', u: XG, d: '0:26' },
      { title: 'How to connect the X300 Wi-Fi', k: 'mp4', s: SH + 'e4434d1fbb964c5fa09873d0a2e75486.mov', r: '9/16', by: 'Safecam', u: XG, d: '1:56' },
      { title: 'How to set the date and time', k: 'mp4', s: SH + '790cc7ef44b84bf18ac5f7032bf4f5fd.mp4', r: '16/9', by: 'Safecam', u: XG, d: '0:29' },
      { title: '24-hour parking mode', k: 'mp4', s: SH + 'acad95a439bb4880aa24ad42fe4329f9.mp4?v=1652522811', r: '16/9', by: 'Safecam', u: XG, d: '0:37', note: 'Safecam says this feature only works with a 24-hour hardwire kit.' },
      { title: 'Setting up the X300', k: 'mp4', s: SH + 'fda3f4e84b454a16aadcf63872808a0e.mov', r: '9/16', by: 'Safecam', u: XG, d: '2:14' },
      { title: 'How to install the X300', k: 'mp4', s: SH + 'd4b29ab4b64b471d98c35fb9c11936fc.mp4?v=1652522811', r: '9/16', by: 'Safecam', u: XG, d: '2:03' }
    ],
    z50: [
      { title: 'Clear evidence, front and rear', k: 'mp4', s: SH + '0df4e1d96d8e42b282b0e914c8ad8ba9.mp4', r: '16/9', by: 'Roadcam', u: ZL, d: '0:30' },
      { title: 'Install it yourself in under 2 minutes', k: 'mp4', s: SH + '68d48b70cfa8461fbe596b22fcef78e7.mp4', r: '16/9', by: 'Roadcam', u: ZL },
      { title: 'How to format the SD card', k: 'mp4', s: SH + '70f7fefae87b4178909362d917ba8b8e.mov', r: '9/16', by: 'Roadcam', u: ZT, d: '0:43', note: 'From the Z50PRO tutorial page. It may differ slightly from the Z50.' },
      { title: 'How to connect Wi-Fi and download video', k: 'mp4', s: SH + '69f38d09153f4f5c9ed2397b07866469.mov', r: '9/16', by: 'Roadcam', u: ZT, d: '1:45', note: 'From the Z50PRO tutorial page. It may differ slightly from the Z50.' },
      { title: 'How to connect Wi-Fi and download video (part 2)', k: 'mp4', s: SH + 'daf9193aed88404591313dca1ec5d903.mov', r: '9/16', by: 'Roadcam', u: ZT, d: '1:01', note: 'From the Z50PRO tutorial page. It may differ slightly from the Z50.' },
      { title: 'How to install it yourself', k: 'mp4', s: SH + 'f8d23209e54b408caa57e56988aaf94c.mov', r: '9/16', by: 'Roadcam', u: ZT, d: '1:25', note: 'From the Z50PRO tutorial page. It may differ slightly from the Z50.' }
    ],
    z80: [
      { title: 'Roadcam Z80 overview', k: 'tt', s: '7637712686435863829', r: '9/16', by: 'Roadcam on TikTok', u: 'https://www.tiktok.com/@roadcam.malaysia/video/7637712686435863829', note: 'A promotional video from Roadcam Malaysia, not an independent review.' }
    ]
  };

  window.PRODUCTS.forEach(function (p) {
    if (by[p.slug]) p.watch = by[p.slug];
    if (p.slug === 'ultra-3') p.videos = [];
  });
})();
