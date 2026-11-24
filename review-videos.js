// Independent review videos, shown first in each product's "Watch" list.
// Every id below was checked with the video site's own oEmbed lookup, and the title names the exact model.
// We do not control these videos and cannot vouch for the reviewers; some may also sell dash cams.
(function () {
  var NOTE = 'An independent review by a third party. We do not control its content.';
  var rev = {
    a210: [
      { title: 'Đánh giá 70mai A210 (Vietnamese)', k: 'yt', s: '1-iU3547ptM', r: '16/9', by: 'Auto365 Review', u: 'https://www.youtube.com/watch?v=1-iU3547ptM', note: 'In Vietnamese. It covers the supercapacitor. The channel may be linked to an installer, so treat it with care. ' + NOTE }
    ],
    t400: [
      { title: 'Extreme 70mai dash cam test in the tropics (T800 and T400)', k: 'yt', s: 'MS6wP7A2f-I', r: '16/9', by: 'TechManiacHD in English', u: 'https://www.youtube.com/watch?v=MS6wP7A2f-I', note: 'Covers both the T800 and the T400. ' + NOTE },
      { title: '70mai T400 full review, installation and real driving test', k: 'yt', s: 'OUMh3FCOkgQ', r: '16/9', by: 'Gadgets BD', u: 'https://www.youtube.com/watch?v=OUMh3FCOkgQ', note: 'The channel may also be a retailer. ' + NOTE },
      { title: 'T800 and T400 compared', k: 'yt', s: 'ID-7VL4A2_k', r: '16/9', by: 'Prime Tech Hub', u: 'https://www.youtube.com/watch?v=ID-7VL4A2_k', note: 'Covers both the T800 and the T400. ' + NOTE }
    ]
  };
  var YT = 'https://www.youtube.com/watch?v=';
  rev.x300 = [
    { title: 'Testing the X300 at night', k: 'yt', s: 'eWs6yVCiZNE', r: '16/9', by: 'Lenoil Lionel', u: YT + 'eWs6yVCiZNE', d: '1:22', note: 'In Malay. Night footage from the X300 itself. ' + NOTE },
    { title: 'X300 dash cam unboxing', k: 'yt', s: 'MGpIn6-KOlc', r: '16/9', by: 'mustafha jalil', u: YT + 'MGpIn6-KOlc', d: '6:07', tag: 'Owner video', note: 'An unboxing by a viewer, not a full review. ' + NOTE },
    { title: 'Fitting the X300 in a Honda CR-V', k: 'yt', s: 'KGExW237lFs', r: '16/9', by: 'Mursyid Sazali', u: YT + 'KGExW237lFs', d: '34:33', tag: 'Owner video', note: 'In Malay. An installation video, and the installer may do this for customers. ' + NOTE }
  ];
  rev.x900 = [
    { title: '4K dash cam Safecam X900', k: 'yt', s: 'DZFDgTT4_4s', r: '9/16', by: 'Nanrara channel', u: YT + 'DZFDgTT4_4s', d: '1:01', tag: 'Owner video', note: 'A one-minute clip with no description, not a full review. It may be promotional. ' + NOTE },
    { title: 'The cheapest Safecam: X900', k: 'yt', s: 'HL9-IlzGbsc', r: '9/16', by: 'Nanrara channel', u: YT + 'HL9-IlzGbsc', d: '1:01', tag: 'Owner video', note: 'In Malay. A one-minute clip with no description, not a full review. It may be promotional. ' + NOTE }
  ];
  window.PRODUCTS.forEach(function (p) {
    var r = rev[p.slug];
    if (!r) return;
    r.forEach(function (v) { v.rev = true; v.tag = v.tag || 'Review'; });
    p.watch = r.concat(p.watch || []);
  });
})();
