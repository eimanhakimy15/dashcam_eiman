// Look and feel per product: accent colour and the "at a glance" numbers shown under the hero.
// Every number comes from the specs on the product page (see the Tech specs section for sources).
(function () {
  var orange = '#f26a21';
  var blue = '#2b6cff';
  var red = '#e5322d';
  var by = {
    a210: { accent: orange, glance: [['1080P', 'Front and rear video'], ['132°', 'Front field of view'], ['Wi-Fi 6', 'Fast clip downloads'], ['256GB', 'Largest card, U1 or faster']] },
    t400: { accent: orange, glance: [['1440P', 'Front video with HDR'], ['3', 'Channels at once'], ['147°', 'Interior field of view'], ['512GB', 'Largest card supported']] },
    'ultra-3': { accent: blue, glance: [['4K', 'Front video'], ['170°', 'Front field of view'], ['5GHz', 'Wi-Fi'], ['2', 'Years of warranty']] },
    x900: { accent: blue, glance: [['4K', 'Front video'], ['3', 'Channels at once'], ['2.4GHz', 'Wi-Fi'], ['1', 'Year of warranty']] },
    x300: { accent: blue, glance: [['3', 'Channels at once'], ['1080P', 'Front video'], ['720P', 'Cabin and rear video'], ['1', 'Year of warranty']] },
    z50: { accent: red, glance: [['4K', 'Front video'], ['1080P', 'Rear video'], ['5.0', 'Stars on roadcam.my'], ['680', 'Shopee reviews']] },
    z80: { accent: red, glance: [['2K', 'Front video'], ['3', 'Channels at once'], ['1080P', 'Cabin and rear video'], ['64', 'GB card in the bundle']] }
  };
  window.PRODUCTS.forEach(function (p) {
    var s = by[p.slug];
    if (s) { p.accent = s.accent; p.glance = s.glance; }
  });
})();
