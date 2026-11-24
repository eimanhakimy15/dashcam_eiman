(function () {
  var P = window.PRODUCTS;
  var page = document.body.getAttribute('data-page');
  var slug = document.body.getAttribute('data-slug');
  var app = document.getElementById('app');

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function src(url) { return '<a class="src" href="' + esc(url) + '" target="_blank" rel="noopener">Source</a>'; }
  function tag(t) { return '<span class="tag">' + esc(t) + '</span>'; }
  function img(url, alt) { return '<img src="' + esc(url) + '" alt="' + esc(alt) + '" referrerpolicy="no-referrer">'; }
  function val(v) { return v === null || v === undefined ? 'Not stated' : v; }
  function find(s) { return P.filter(function (p) { return p.slug === s; })[0]; }

  /* ---------- shared chrome ---------- */
  function gnav() {
    return '<header class="gnav"><div class="in"><a class="brand" href="index.html">Dash Cam Guide</a>' +
      '<div class="menu"><button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-panel" aria-haspopup="true">Dash Cams<span class="chev" aria-hidden="true"></span></button>' +
      '<div class="menu-panel" id="menu-panel">' +
      P.map(function (p) {
        return '<a class="mi" href="' + p.slug + '.html"' + (p.slug === slug ? ' aria-current="page"' : '') + '><span class="mt">' + img(p.hero, '') + '</span><span class="mx"><b>' + esc(p.brand + ' ' + p.name) + '</b><small>' + esc(p.priceShort) + '</small></span></a>';
      }).join('') +
      '<a class="mi all" href="index.html">See all dash cams</a></div></div></div></header>';
  }
  function footer() {
    return '<footer><div class="in"><p>Specifications come from the manufacturers and have not been tested by us. We are not a seller.</p>' +
      '<p>Product images and videos are linked directly from each product\'s source page and belong to their owners. Prices are reference prices on the date shown and can change.</p>' +
      '<p>"Manufacturer claim" means the manufacturer stated it. "Our take" is our own conclusion from that data.</p></div></footer>' +
      '<dialog id="lightbox"><button class="close" aria-label="Close">×</button><img alt="" referrerpolicy="no-referrer"></dialog>';
  }

  /* ---------- big product stage: animated text behind a large product image ---------- */
  function letters(t) { return t.split('').map(function (c) { return '<span class="ch">' + esc(c) + '</span>'; }).join(''); }
  function bigstage(p) {
    var run = esc(p.brand + ' ' + p.name) + ' &nbsp;·&nbsp; ';
    var one = new Array(7).join(run);
    return '<div class="bigstage"><div class="bgtext" aria-hidden="true"><span class="word">' + letters(p.name) + '</span>' +
      '<span class="strip"><span>' + one + '</span><span>' + one + '</span></span></div><i class="spot"></i>' + img(p.hero, p.full).replace('<img', '<img class="big' + (p.heroMode === 'photo' ? ' photo' : '') + '" style="--s:' + (p.heroScale || 1) + ';view-transition-name:hero-' + p.slug + (p.heroClip ? ';clip-path:inset(' + p.heroClip + ')' : '') + '"') + '</div>';
  }

  /* ---------- catalog ---------- */
  function catalog() {
    return '<section class="catalog-head"><h1>Dash cams.</h1><p>' + P.length + ' popular dash cams, one page each. See what is good, what is not, and what the makers do not say.</p></section>' +
      P.map(function (p, i) {
        var theme = p.theme === 'dark' ? 'dark' : (i % 2 === 0 ? 'light' : 'light white');
        return '<section class="tile ' + theme + '" id="' + p.slug + '" style="--accent:' + (p.accent || '#f26a21') + '">' +
          '<span class="brand-name">' + esc(p.brand) + '</span><h2>' + esc(p.name) + '</h2>' +
          '<p class="sub">' + esc(p.tagline) + '</p><p class="price">' + esc(p.priceShort) + '</p>' +
          '<div class="actions"><a class="btn" href="' + p.slug + '.html">Learn more</a><a class="btn line" href="' + esc(p.shopee.url) + '" target="_blank" rel="noopener">Buy</a></div>' +
          bigstage(p) + '</section>';
      }).join('');
  }

  /* ---------- product page ---------- */
  /* ---------- videos played on the page ---------- */
  function playerHtml(v, autoplay) {
    var ap = autoplay ? '1' : '0';
    if (v.k === 'yt') {
      return '<iframe class="wp-media" src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.s) + '?rel=0&autoplay=' + ap + '" title="' + esc(v.title) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>';
    }
    if (v.k === 'tt') {
      return '<iframe class="wp-media" src="https://www.tiktok.com/player/v1/' + encodeURIComponent(v.s) + '?description=0&music_info=0&rel=0&autoplay=' + ap + '" title="' + esc(v.title) + '" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    }
    return '<video class="wp-media" src="' + esc(v.s) + '" controls playsinline preload="metadata"' + (autoplay ? ' autoplay' : '') + ' aria-label="' + esc(v.title) + '"></video>';
  }
  function watch(p) {
    if (!p.watch || !p.watch.length) return '';
    var first = p.watch[0];
    return '<section class="sec watch" id="watch"><div class="wrap"><h2>' + (p.watch.some(function (v) { return v.tag === 'Review'; }) ? 'Watch the reviews.' : (p.watch.some(function (v) { return v.rev; }) ? 'Watch owner videos.' : 'Watch it in action.')) + '</h2>' +
      '<p class="lede">' + (p.watch.length > 1 ? 'Pick a video from the list and it plays right here.' : 'The video plays right here.') + ' Videos come from the maker, its reseller or independent reviewers.</p>' +
      '<div class="wp" data-slug="' + esc(p.slug) + '"><div><div class="wp-view' + (first.r === '9/16' ? ' v' : '') + '">' + playerHtml(first, false) + '</div>' +
      '<p class="wp-note">' + (first.note ? esc(first.note) + ' ' : '') + 'Source: <a href="' + esc(first.u) + '" target="_blank" rel="noopener">' + esc(first.by) + '</a></p></div>' +
      '<ol class="wp-list">' + p.watch.map(function (v, i) {
        return '<li><button class="wp-item' + (i === 0 ? ' on' : '') + '" type="button" data-i="' + i + '"><span class="n">' + (i + 1) + '</span><span><b>' + esc(v.title) + '</b><small>' + (v.tag ? '<em class="rv-tag">' + esc(v.tag) + '</em> ' : '') + esc(v.by) + '</small></span><span class="d">' + esc(v.d || '') + '</span></button></li>';
      }).join('') + '</ol></div></div></section>';
  }
  function glance(p) {
    if (!p.glance) return '';
    return '<section class="glance"><div class="gl">' + p.glance.map(function (g) {
      var m = /^(d+(?:.d+)?)(.*)$/.exec(g[0]);
      var count = m ? ' data-n="' + m[1] + '" data-suf="' + esc(m[2]) + '"' : '';
      return '<div class="gi"><b class="gn"' + count + '>' + esc(g[0]) + '</b><span>' + esc(g[1]) + '</span></div>';
    }).join('') + '</div></section>';
  }
  function media(t) {
    if (t.type === 'video') return '<video src="' + esc(t.src) + '" muted loop playsinline preload="metadata" aria-label="' + esc(t.label) + '"></video>';
    return img(t.src, t.alt || t.label);
  }
  function story(s) {
    var tabs = s.tabs || [];
    var first = tabs[0] || {};
    var stage = tabs.length ? '<div class="stage">' + tabs.map(function (t, i) { return media(t).replace('<img', '<img class="m' + (i === 0 ? ' on' : '') + '"').replace('<video', '<video class="m' + (i === 0 ? ' on' : '') + '"'); }).join('') + '</div>' : '';
    var bar = tabs.length > 1 ? '<div class="tabs" role="tablist"><span class="ind"></span>' + tabs.map(function (t, i) {
      return '<button class="tab' + (i === 0 ? ' on' : '') + '" role="tab" data-i="' + i + '" data-text="' + esc(t.text || '') + '">' + esc(t.label) + '</button>';
    }).join('') + '</div>' : '';
    var steps = s.steps ? '<div class="steps">' + s.steps.map(function (st, i) {
      return '<div class="step"><b>' + (i + 1) + '. ' + esc(st.t) + '</b><p>' + esc(st.x) + '</p>' + tag(st.label) + '</div>';
    }).join('') + '</div>' : '';
    var notes = (s.notes && s.notes.length) ? '<div class="notes">' + s.notes.map(function (n) { return '<p>' + esc(n) + '</p>'; }).join('') + '</div>' : '';
    return '<section class="story" id="' + s.id + '"><h2>' + esc(s.title) + '</h2><p class="txt">' + esc(s.text) + '</p>' + stage + bar +
      '<p class="tabtext">' + esc(first.text || '') + '</p>' + steps + notes + '<p class="claim">' + tag('Manufacturer claim') + ' ' + src(s.source) + '</p></section>';
  }
  function points(items) {
    return '<ul class="points">' + items.map(function (i) { return '<li>' + esc(i.text) + ' ' + tag(i.label) + ' ' + src(i.sourceUrl) + '</li>'; }).join('') + '</ul>';
  }
  function proscons(items) {
    return '<ul>' + items.map(function (i) { return '<li>' + esc(i.text) + ' ' + tag(i.label) + ' ' + src(i.sourceUrl) + '</li>'; }).join('') + '</ul>';
  }
  function reviewItem(r) {
    return '<li><p>' + esc(r.text) + '</p>' + (r.quote ? '<blockquote>"' + esc(r.quote) + '"</blockquote>' : '') +
      '<div class="meta"><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.site) + '</a>' + (r.date ? ' · ' + esc(r.date) : '') + '</div></li>';
  }
  function owners(p) {
    var items = (p.reviews && p.reviews.items) || [];
    var good = items.filter(function (i) { return i.tone === 'good'; });
    var bad = items.filter(function (i) { return i.tone === 'bad'; });
    function col(title, list, empty) {
      return '<div class="empty"><h4>' + title + '</h4>' + (list.length ? '<ul class="rv">' + list.map(reviewItem).join('') + '</ul>' : '<p>' + empty + '</p>') + '</div>';
    }
    var video = '';
    if (p.videos && p.videos.length) {
      video = '<h3 class="vh">Official setup videos</h3><div class="vgrid">' + p.videos.map(function (v) {
        return '<div><button class="video-frame" type="button" data-id="' + esc(v.id) + '" aria-label="Play video: ' + esc(v.title) + '" style="background-image:url(https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg)"><span class="play" aria-hidden="true"></span></button><p class="vt">' + esc(v.title) + '</p><p class="vc">' + esc(v.channel || '') + '</p></div>';
      }).join('') + '</div>';
    } else if (p.videoLinks && p.videoLinks.length) {
      video = '<p class="lede" style="margin-top:36px">No owner video we can verify yet. Official channels:</p><div class="links">' +
        p.videoLinks.map(function (l) { return '<a class="btn line" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>'; }).join('') + '</div>';
    }
    return '<section class="sec"><div class="wrap"><h2>What owners say.</h2><p class="lede">' + esc((p.reviews && p.reviews.note) || '') + '</p>' +
      '<div class="body two">' + col('What owners like', good, 'No verified positive review yet.') + col('What owners do not like', bad, 'No verified negative review yet.') + '</div>' +
      '<div class="links"><a class="btn line" href="' + esc(p.shopee.url) + '" target="_blank" rel="noopener">Read reviews on Shopee</a></div>' + video + '</div></section>';
  }
  function compare(p) {
    if (!p.compare) return '';
    var c = p.compare;
    return '<section class="sec"><div class="wrap"><h2>Compare with the ' + esc(c.name) + '.</h2><p class="lede">70mai\'s own comparison with the model before it. ' + src(c.source) + '</p>' +
      '<div class="body"><table class="cmp"><thead><tr><th></th><th>' + esc(p.name) + '</th><th>' + esc(c.name) + '</th></tr></thead><tbody>' +
      c.rows.map(function (r) { return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('') + '</tbody></table></div></div></section>';
  }

  function product(p) {
    var firstId = p.sections[0].id;
    var heroMedia = bigstage(p);
    var banner = p.heroPhoto ? '<section class="banner"><div class="photo">' + img(p.heroPhoto, p.full + ' key visual') + '</div></section>' : '';
    return '<div class="local"><div class="in"><strong>' + esc(p.full) + '</strong><nav>' + (p.watch ? '<a href="#watch">Videos</a>' : '') + '<a href="#' + firstId + '">Features</a><a href="#sd">SD card</a><a href="#specs">Tech specs</a><a href="#proscons">Pros and cons</a><a class="btn sm" href="#buy">Buy</a></nav></div></div>' +
      '<section class="ph"><span class="brand-name">' + esc(p.brand) + '</span><h1>' + esc(p.full) + '</h1><p class="sub">' + esc(p.tagline) + '</p><p class="price">' + esc(p.priceShort) + '</p>' +
        '<div class="actions"><a class="btn" href="' + esc(p.shopee.url) + '" target="_blank" rel="noopener">' + esc(p.shopee.label) + '</a><a class="btn line" href="#' + firstId + '">Explore features</a></div>' +
        '<span class="draft">Draft, not yet reviewed</span>' + heroMedia + '</section>' + banner + glance(p) + watch(p) +
      p.sections.map(story).join('') +
      '<section class="sec black dark" id="sd"><div class="wrap"><h2>Does it work without an SD card?</h2><span class="verdict">' + esc(p.sdCard.verdict) + '</span>' +
        '<p class="lede">' + esc(p.sdCard.lede) + '</p>' +
        '<div class="body">' + points(p.sdCard.points) + '<div class="infer"><h4>Our take</h4><p>' + esc(p.sdCard.inference) + ' Ask the seller before you buy if this matters to you.</p><p style="margin-top:10px">' + p.sdSources.map(src).join(' ') + '</p></div></div></div></section>' +
      '<section class="sec" id="specs"><div class="wrap"><h2>Tech specs.</h2><dl class="body specs">' + p.specs.map(function (s) {
        return '<div class="row' + (s.value === null ? ' missing' : '') + '"><dt>' + esc(s.key) + '</dt><dd>' + esc(val(s.value)) + '</dd>' + src(s.sourceUrl) + '</div>';
      }).join('') + '</dl><p class="price-line">Reference price: ' + esc(p.price.text) + ' (as of ' + esc(p.price.asOf) + '). ' + src(p.price.sourceUrl) + '</p></div></section>' +
      compare(p) +
      '<section class="sec" id="proscons"><div class="wrap"><h2>Pros and cons.</h2><div class="body pc"><div class="pros"><h3>Pros</h3>' + proscons(p.pros) + '</div><div class="cons"><h3>Cons</h3>' + proscons(p.cons) + '</div></div></div></section>' +
      owners(p) +
      '<section class="sec"><div class="wrap"><h2>Gallery.</h2><div class="body gallery">' + p.gallery.map(function (u, n) {
        return '<button class="shot" data-full="' + esc(u) + '" aria-label="Open image ' + (n + 1) + '">' + img(u, p.full + ' image ' + (n + 1)) + '</button>';
      }).join('') + '</div><p class="credit">Images from the <a href="' + esc(p.imageSource) + '" target="_blank" rel="noopener">source page</a>.</p></div></section>' +
      '<section class="sec buy" id="buy"><div class="wrap"><h2>' + esc(p.full) + '</h2><p>' + esc(p.price.text) + '</p><div class="actions"><a class="btn" href="' + esc(p.shopee.url) + '" target="_blank" rel="noopener">' + esc(p.shopee.label) + '</a><a class="btn line" href="index.html">All dash cams</a></div>' +
        '<p class="note">' + esc(p.shopee.note) + '</p></div></section>';
  }

  /* ---------- render ---------- */
  var current = find(slug);
  if (page === 'product' && !current) {
    app.innerHTML = gnav() + '<section class="catalog-head"><h1>Product not found.</h1><p><a href="index.html">See all dash cams</a></p></section>' + footer();
    return;
  }
  if (current && current.accent) document.documentElement.style.setProperty('--accent', current.accent);
  document.title = page === 'product' ? current.full + ' | Dash Cam Guide' : 'Dash Cam Guide';
  app.innerHTML = gnav() + (page === 'product' ? product(current) : catalog()) + footer();

  /* ---------- interactions ---------- */
  var box = document.getElementById('lightbox');
  if (box) box.addEventListener('click', function () { box.close(); });

  // Parent menu: hover on desktop, tap on phones; Escape or an outside tap closes it.
  var menu = document.querySelector('.gnav .menu');
  var menuBtn = menu.querySelector('.menu-btn');
  function setMenu(open) { menu.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  document.addEventListener('click', function (e) { if (!menu.contains(e.target)) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); menuBtn.focus(); } });
  if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
    menu.addEventListener('mouseenter', function () { setMenu(true); });
    menu.addEventListener('mouseleave', function () { setMenu(false); });
  }

  function playActive(storyEl, inView) {
    var vids = storyEl.querySelectorAll('.stage video');
    Array.prototype.forEach.call(vids, function (v) {
      if (inView && v.classList.contains('on')) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } else v.pause();
    });
  }

  app.addEventListener('click', function (e) {
    var wi = e.target.closest('.wp-item');
    if (wi) {
      var wp = wi.closest('.wp');
      var list = find(wp.getAttribute('data-slug')).watch;
      var v = list[parseInt(wi.getAttribute('data-i'), 10)];
      Array.prototype.forEach.call(wp.querySelectorAll('.wp-item'), function (b) { b.classList.toggle('on', b === wi); });
      var view = wp.querySelector('.wp-view');
      view.classList.toggle('v', v.r === '9/16');
      view.innerHTML = playerHtml(v, true);
      var m = view.querySelector('video');
      if (m) m.addEventListener('loadedmetadata', function () { view.classList.toggle('v', m.videoHeight > m.videoWidth); });
      var note = wp.querySelector('.wp-note');
      note.innerHTML = (v.note ? esc(v.note) + ' ' : '') + 'Source: <a href="' + esc(v.u) + '" target="_blank" rel="noopener">' + esc(v.by) + '</a>';
      return;
    }
    var vf = e.target.closest('.video-frame');
    if (vf && vf.tagName === 'BUTTON') {
      vf.outerHTML = '<iframe class="video-frame" src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(vf.getAttribute('data-id')) + '?autoplay=1&rel=0" title="Official setup video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      return;
    }
    var tab = e.target.closest('.tab');
    if (tab) {
      var st = tab.closest('.story');
      var i = parseInt(tab.getAttribute('data-i'), 10);
      Array.prototype.forEach.call(st.querySelectorAll('.tab'), function (t) { t.classList.toggle('on', t === tab); });
      Array.prototype.forEach.call(st.querySelectorAll('.stage > .m'), function (m, n) { m.classList.toggle('on', n === i); });
      placeInd(tab.closest('.tabs'));
      if (tab.scrollIntoView) tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      var tt = st.querySelector('.tabtext');
      tt.textContent = tab.getAttribute('data-text') || '';
      if (window.Motion && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) window.Motion.animate(tt, { opacity: [0, 1], y: [8, 0] }, { duration: 0.4 });
      playActive(st, true);
      return;
    }
    var b = e.target.closest('.shot');
    if (b && box && typeof box.showModal === 'function') { box.querySelector('img').src = b.getAttribute('data-full'); box.showModal(); }
  });

  // Size each media stage to the real ratio of its first image or video.
  Array.prototype.forEach.call(document.querySelectorAll('.stage'), function (stage) {
    var m = stage.querySelector('.m');
    function fit() {
      var w = m.naturalWidth || m.videoWidth, h = m.naturalHeight || m.videoHeight;
      if (!w || !h) return;
      stage.style.aspectRatio = w + ' / ' + h;
      if (w / h < 1.3) stage.classList.add('sq');
    }
    stage.style.aspectRatio = '16 / 9';
    Array.prototype.forEach.call(stage.children, function (c) { c.style.objectFit = 'cover'; c.style.height = '100%'; });
    if (m.tagName === 'VIDEO') m.addEventListener('loadedmetadata', fit); else if (m.complete && m.naturalWidth) fit(); else m.addEventListener('load', fit);
  });

  // Videos play only while their section is on screen.
  if ('IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { playActive(en.target, en.isIntersecting); });
    }, { threshold: 0.35 });
    Array.prototype.forEach.call(document.querySelectorAll('.story'), function (s) { if (s.querySelector('video')) vio.observe(s); });
  }

  /* ---------- polish that does not need the animation library ---------- */
  function placeInd(tabs) {
    var on = tabs.querySelector('.tab.on');
    var ind = tabs.querySelector('.ind');
    if (!on || !ind) return;
    ind.style.left = on.offsetLeft + 'px';
    ind.style.width = on.offsetWidth + 'px';
  }
  function allInd() { Array.prototype.forEach.call(document.querySelectorAll('.tabs'), placeInd); }
  allInd();
  window.addEventListener('resize', allInd);
  window.addEventListener('load', allInd);

  // Catalog tiles stack: each one sticks to the top and the next slides over it.
  function stickTiles() {
    Array.prototype.forEach.call(document.querySelectorAll('.tile'), function (t) {
      t.style.top = Math.min(0, window.innerHeight - t.offsetHeight) + 'px';
    });
  }
  if (page === 'catalog') {
    stickTiles();
    window.addEventListener('resize', stickTiles);
    window.addEventListener('load', stickTiles);
  }

  /* ---------- motion ---------- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var M = window.Motion;
  if (!M || reduce) return;
  var ease = [0.2, 0.8, 0.2, 1];
  var $$ = function (root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); };
  var hide = function (els) { els.forEach(function (e) { e.style.opacity = 0; }); };
  var range = ['start end', 'end start'];
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;

  // Opening curtain, once per visit, on the catalog page only
  var D = 0;
  var seen = false;
  try { seen = !!sessionStorage.getItem('dcg-seen'); } catch (e) { seen = true; }
  if (page === 'catalog' && !seen) {
    D = 1.3;
    try { sessionStorage.setItem('dcg-seen', '1'); } catch (e) { /* ignore */ }
    var curtain = document.createElement('div');
    curtain.className = 'loader';
    curtain.innerHTML = '<div class="lw">Dash Cam Guide</div><div class="lc"><span>0</span>%</div><span class="lbar"><i></i></span>';
    document.body.appendChild(curtain);
    document.documentElement.classList.add('loading');
    var num = curtain.querySelector('.lc span');
    var fill = curtain.querySelector('.lbar i');
    M.animate(0, 100, { duration: 1, ease: 'easeInOut', onUpdate: function (v) { num.textContent = Math.round(v); fill.style.transform = 'scaleX(' + (v / 100) + ')'; } });
    setTimeout(function () {
      M.animate(curtain, { y: ['0%', '-100%'] }, { duration: 0.75, ease: [0.7, 0, 0.2, 1] });
      setTimeout(function () { curtain.remove(); document.documentElement.classList.remove('loading'); }, 800);
    }, 1100);
  }

  // Reading progress bar
  var bar = document.createElement('div');
  bar.className = 'progress';
  bar.innerHTML = '<i></i>';
  document.body.appendChild(bar);
  M.scroll(M.animate(bar.firstChild, { scaleX: [0, 1] }, { ease: 'linear' }));

  // The strip of text behind each product runs faster the faster you scroll.
  var strips = $$(document, '.strip');
  var pos = strips.map(function () { return 0; });
  var onScreen = strips.map(function () { return true; });
  strips.forEach(function (s, i) {
    Array.prototype.forEach.call(s.children, function (c) { c.style.animation = 'none'; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { onScreen[i] = en[0].isIntersecting; }).observe(s);
    }
  });
  var lastY = window.scrollY;
  var vel = 0;
  function tick() {
    var y = window.scrollY;
    vel += ((y - lastY) - vel) * 0.12;
    lastY = y;
    strips.forEach(function (s, i) {
      if (!onScreen[i]) return;
      var w = s.firstElementChild.offsetWidth;
      if (!w) return;
      pos[i] += (i % 2 ? -1 : 1) * (0.6 + Math.abs(vel) * 0.35);
      var x = -(((pos[i] % w) + w) % w);
      s.children[0].style.transform = 'translateX(' + x + 'px)';
      s.children[1].style.transform = 'translateX(' + x + 'px)';
    });
    requestAnimationFrame(tick);
  }
  if (strips.length) requestAnimationFrame(tick);

  // Pointer effects on devices with a mouse: a glow follows the pointer, buttons lean towards it.
  if (canHover) {
    $$(document, '.bigstage').forEach(function (st) {
      st.addEventListener('pointermove', function (e) {
        var r = st.getBoundingClientRect();
        st.style.setProperty('--px', (e.clientX - r.left) + 'px');
        st.style.setProperty('--py', (e.clientY - r.top) + 'px');
      });
    });
    $$(document, '.btn').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + 'px');
        b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * 0.32).toFixed(1) + 'px');
      });
      b.addEventListener('pointerleave', function () { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
    });
  }

  // Big product image with animated text behind it: letters rise, strip fades in, product pops in,
  // then the word slides sideways and the product drifts as you scroll.
  function bigStageMotion(root, lead) {
    var chars = $$(root, '.ch');
    var word = root.querySelector('.word');
    var strip = root.querySelector('.strip');
    var big = root.querySelector('.big');
    hide(chars); strip.style.opacity = 0; big.style.opacity = 0;
    M.inView(root, function () {
      M.animate(chars, { opacity: [0, 1], y: ['80%', 0], rotate: [8, 0] }, { duration: 0.9, delay: M.stagger(0.07, { startDelay: lead }), ease: ease });
      M.animate(strip, { opacity: [0, 1] }, { duration: 1, delay: lead + 0.6 });
      M.animate(big, { opacity: [0, 1], scale: [0.7, 1] }, { duration: 1.5, delay: lead + 0.25, ease: ease });
    }, { amount: 0.25 });
    M.scroll(M.animate(word, { x: ['-8%', '8%'] }, { ease: 'linear' }), { target: root, offset: range });
    M.scroll(M.animate(big, { y: ['5%', '-5%'] }, { ease: 'linear' }), { target: root, offset: range });
  }

  // Headings reveal word by word
  function wordReveal(h, lead) {
    if (h.children.length) return;
    h.innerHTML = h.textContent.split(' ').map(function (w) { return '<span class="w">' + esc(w) + '</span>'; }).join(' ');
    var ws = $$(h, '.w');
    hide(ws);
    M.inView(h, function () {
      M.animate(ws, { opacity: [0, 1], y: ['70%', 0], rotate: [4, 0] }, { duration: 0.8, delay: M.stagger(0.07, { startDelay: lead || 0 }), ease: ease });
    }, { amount: 0.6 });
  }
  // List items slide in one after another
  function listReveal(items, host) {
    hide(items);
    M.inView(host, function () {
      M.animate(items, { opacity: [0, 1], x: [-24, 0] }, { duration: 0.7, delay: M.stagger(0.08), ease: ease });
    }, { amount: 0.15 });
  }
  // Numbers count up
  function countUp(els) {
    els.forEach(function (c) { c.textContent = '0' + c.getAttribute('data-suf'); });
    els.forEach(function (c, i) {
      M.inView(c, function () {
        var dec = (c.getAttribute('data-n').split('.')[1] || '').length;
        M.animate(0, parseFloat(c.getAttribute('data-n')), { duration: 1.4, delay: i * 0.08, ease: 'easeOut', onUpdate: function (v) { c.textContent = v.toFixed(dec) + c.getAttribute('data-suf'); } });
      }, { amount: 0.8 });
    });
  }

  if (page === 'catalog') {
    wordReveal(document.querySelector('.catalog-head h1'), D);
    var lead = document.querySelector('.catalog-head p');
    lead.style.opacity = 0;
    M.animate(lead, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: D + 0.5, ease: ease });
    var tiles = $$(document, '.tile');
    tiles.forEach(function (t, i) {
      var texts = $$(t, '.brand-name, h2, .sub, .price, .actions');
      hide(texts);
      M.inView(t, function () {
        M.animate(texts, { opacity: [0, 1], y: [28, 0] }, { duration: 0.8, delay: M.stagger(0.09), ease: ease });
      }, { amount: 0.3 });
      bigStageMotion(t.querySelector('.bigstage'), 0);
      // When the next tile slides over this one, this one steps back.
      var next = tiles[i + 1];
      if (next) M.scroll(M.animate(t, { scale: [1, 0.92], filter: ['brightness(1)', 'brightness(0.5)'] }, { ease: 'linear' }), { target: next, offset: ['start end', 'start start'] });
    });
    return;
  }

  // Product page hero
  var ph = document.querySelector('.ph');
  var heroTexts = $$(ph, '.brand-name, h1, .sub, .price, .actions, .draft');
  hide(heroTexts);
  M.animate(heroTexts, { opacity: [0, 1], y: [30, 0] }, { duration: 0.9, delay: M.stagger(0.09), ease: ease });
  bigStageMotion(ph.querySelector('.bigstage'), 0);

  var banner = document.querySelector('.banner .photo');
  if (banner) {
    var bi = banner.querySelector('img');
    M.scroll(M.animate(bi, { scale: [1.15, 1] }, { ease: 'linear' }), { target: banner, offset: range });
  }

  // At a glance: big numbers count up
  var gl = document.querySelector('.gl');
  if (gl) {
    var gis = $$(gl, '.gi');
    hide(gis);
    M.inView(gl, function () { M.animate(gis, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: M.stagger(0.1), ease: ease }); }, { amount: 0.3 });
    countUp($$(gl, '.gn[data-n]'));
  }

  // Each story: heading words, text, then the media, which wipes open and grows as it arrives
  $$(document, '.story').forEach(function (s) {
    wordReveal(s.querySelector('h2'));
    var txt = s.querySelector('.txt');
    var stage = s.querySelector('.stage');
    var rest = $$(s, '.tabs, .tabtext, .steps, .notes, .claim');
    hide([txt]); if (stage) stage.style.opacity = 0; hide(rest);
    M.inView(s, function () {
      M.animate(txt, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, delay: 0.2, ease: ease });
      if (stage) M.animate(stage, { opacity: [0, 1], clipPath: ['inset(0 0 100% 0 round 12px)', 'inset(0 0 0% 0 round 12px)'], y: [40, 0] }, { duration: 1.1, delay: 0.3, ease: ease });
      M.animate(rest, { opacity: [0, 1] }, { duration: 0.8, delay: 0.6 });
      var steps = $$(s, '.step');
      if (steps.length) M.animate(steps, { y: [24, 0] }, { duration: 0.7, delay: M.stagger(0.12, { startDelay: 0.6 }), ease: ease });
    }, { amount: 0.2 });
    if (stage) M.scroll(M.animate(stage, { scale: [0.9, 1] }, { ease: 'linear' }), { target: stage, offset: ['start end', 'center center'] });
  });

  // Other sections
  $$(document, '.sec h2').forEach(function (h) { wordReveal(h); });
  var specs = document.querySelector('.specs');
  if (specs) {
    var rows = $$(specs, '.row');
    hide(rows);
    M.inView(specs, function () { M.animate(rows, { opacity: [0, 1], y: [16, 0] }, { duration: 0.6, delay: M.stagger(0.05), ease: ease }); }, { amount: 0.1 });
  }
  $$(document, '.pc > div').forEach(function (col) { listReveal($$(col, 'li'), col); });
  $$(document, '.points').forEach(function (ul) { listReveal($$(ul, 'li'), ul); });
  var shots = $$(document, '.shot');
  var gal = document.querySelector('.gallery');
  if (gal) {
    hide(shots);
    M.inView(gal, function () { M.animate(shots, { opacity: [0, 1], x: [40, 0] }, { duration: 0.8, delay: M.stagger(0.1), ease: ease }); }, { amount: 0.2 });
  }
})();
