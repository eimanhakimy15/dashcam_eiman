# Dash Cam Guide

A neutral buyer's guide to seven dash cams sold in Malaysia. One page per product: highlights, tech specs, pros and cons, whether it works without an SD card, owner reviews, and videos. Every spec links to its source, and every claim is labelled **Manufacturer claim**, **Seller claim** or **Our take**.

Products: 70mai A210, 70mai T400, Safecam Ultra-3, Safecam X900, Safecam X300, Roadcam Z50, Roadcam Z80.

Plain HTML, CSS and JavaScript. There is no build step to view the site.

## View it

Open `index.html` in a browser, or serve the folder:

```
npx http-server . -p 5180
```

Then open http://localhost:5180. It also works on any static host, for example GitHub Pages.

## How it is organised

| File | What it holds |
| --- | --- |
| `index.html` | The catalog: one full screen per product, with Learn more and Buy |
| `a210.html`, `t400.html`, `ultra-3.html`, `x900.html`, `x300.html`, `z50.html`, `z80.html` | One page per product. Each is a small shell that `app.js` fills in |
| `app.js` | Renders the pages and runs the animations |
| `style.css` | All styling |
| `data.js` | A210, Ultra-3 and X900: specs, pros and cons, prices, images |
| `more.js` | T400, X300, Z50 and Z80, and the menu order |
| `stories.js` | The large image and video sections for A210, Ultra-3 and X900 |
| `sd.js` | The "Does it work without an SD card?" answers and their sources |
| `look.js` | Accent colour and the "at a glance" numbers |
| `watch.js` | Official and maker videos played on each page |
| `review-videos.js` | Independent review videos |
| `motion.js` | A bundled copy of the framer-motion DOM API (see below) |

## Edit the content

- Change a spec, price or Shopee link in `data.js` or `more.js`. Keep the `sourceUrl` for every value.
- Missing data is `null` and is shown as "Not stated". Do not guess.
- Add a video in `watch.js` or `review-videos.js`. Check it first, for example with the video site's oEmbed address.
- To add a product, add it to `data.js` or `more.js`, create a copy of one product page with the new `data-slug`, and list it in the `order` array at the end of `more.js`.

## Rebuild `motion.js`

`motion.js` is generated from `motion-entry.js` so the site works without a server. Rebuild it only if you update framer-motion:

```
npm install
npm run build:motion
```

## Notes and limits

- Specifications come from the manufacturers' and sellers' pages and have not been tested by the maintainers. Prices are reference prices on the date shown.
- Product images and videos are linked directly from each source page and belong to their owners. They are not stored in this repository, so they disappear if the owner moves them.
- Independent review videos are third-party content that we do not control, and some channels may also sell dash cams.
- Content is marked "Draft, not yet reviewed" until the owner approves it.
- Cross-document view transitions (the product image morph between pages) need a recent Chrome. Other browsers simply skip it.

## Licence

No licence has been chosen yet. Until one is added, all rights are reserved.
