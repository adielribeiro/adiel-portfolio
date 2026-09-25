/* =========================================================================
   Adiel Ribeiro — Portfólio
   Vanilla JS, no dependencies. Progressive enhancement over a static page.
   ========================================================================= */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var $  = function (sel, ctx) { return (ctx || doc).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); };

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var isTouch = window.matchMedia('(hover: none)').matches;

  /* ------------------------------ Theme toggle --------------------------- */
  (function theme() {
    var btn = $('[data-theme-toggle]');
    if (!btn) return;

    var meta = $('meta[name="theme-color"]:not([media])');
    var LIGHT = '#fbfaf8', DARK = '#0a0a0c';

    function current() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

    function paint() {
      var mode = current();
      btn.setAttribute('aria-pressed', String(mode === 'dark'));
      btn.setAttribute('aria-label', mode === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
      if (meta) meta.setAttribute('content', mode === 'dark' ? DARK : LIGHT);
    }

    btn.addEventListener('click', function () {
      root.setAttribute('data-theme', current() === 'dark' ? 'light' : 'dark');
      try { localStorage.setItem('ar-theme', current()); } catch (e) { /* privado */ }
      paint();
    });

    // Follow the OS while the visitor has not made an explicit choice.
    var os = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem('ar-theme'); } catch (err) { /* privado */ }
      if (saved) return;
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      paint();
    };
    if (os.addEventListener) os.addEventListener('change', onChange);
    else if (os.addListener) os.addListener(onChange);

    paint();
  })();

  /* ---------------------------- Mobile menu ------------------------------ */
  (function mobileMenu() {
    var toggle = $('[data-menu-toggle]');
    var menu   = $('[data-menu]');
    if (!toggle || !menu) return;

    $$('.menu__nav a', menu).forEach(function (a, i) { a.style.setProperty('--i', i); });

    function open() {
      menu.hidden = false;
      // Next frame so the transition has a start state.
      requestAnimationFrame(function () {
        menu.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Fechar menu');
      });
    }
    function close() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      setTimeout(function () { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 400);
    }

    toggle.addEventListener('click', function () {
      menu.classList.contains('is-open') ? close() : open();
    });

    $$('[data-menu-link]', menu).forEach(function (a) {
      a.addEventListener('click', close);
    });

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { close(); toggle.focus(); }
    });

    // A resize past the breakpoint should not leave a stale open menu.
    window.addEventListener('resize', function () {
      if (menu.classList.contains('is-open') && window.innerWidth > 1040) close();
    });
  })();

  /* ------------------------- Scroll-driven UI --------------------------- */
  (function scrollUI() {
    var header   = $('[data-header]');
    var progress = $('[data-progress]');
    var links    = $$('[data-navlink]');
    var sections = links
      .map(function (a) { return doc.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    var ticking = false;

    function update() {
      var y   = window.scrollY || root.scrollTop;
      var max = root.scrollHeight - window.innerHeight;

      if (header) header.classList.toggle('is-stuck', y > 12);
      if (progress) progress.style.width = (max > 0 ? Math.min(1, y / max) * 100 : 0) + '%';

      if (sections.length) {
        var probe = y + window.innerHeight * 0.32;
        var activeId = null;
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].getBoundingClientRect().top + y <= probe) activeId = sections[i].id;
        }
        // Near the bottom the last section should win.
        if (max > 0 && y >= max - 4) activeId = sections[sections.length - 1].id;

        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + activeId);
        });
      }

      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  })();

  /* ---------------------------- Reveal on scroll ------------------------- */
  (function reveal() {
    var items = $$('[data-reveal]');
    if (!items.length) return;

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    items.forEach(function (el) { io.observe(el); });
  })();

  /* ------------------------------ Marquee -------------------------------- */
  (function marquee() {
    var track = $('[data-marquee]');
    if (!track) return;

    var group = $('.marquee__group', track);
    if (!group) return;

    // Clone once so the loop has no visible seam.
    track.appendChild(group.cloneNode(true));

    if (reducedMotion.matches) return;

    var width = group.offsetWidth;
    var offset = 0;
    var last = 0;
    var paused = false;
    var running = false;

    function measure() { width = group.offsetWidth || width; }

    function frame(now) {
      if (!last) last = now;
      var dt = Math.min(64, now - last) / 1000;
      last = now;

      if (!paused) {
        offset -= dt * 38;                 // px per second
        if (offset <= -width) offset += width;
        track.style.transform = 'translate3d(' + offset.toFixed(2) + 'px,0,0)';
      }
      requestAnimationFrame(frame);
    }

    function start() { if (!running) { running = true; last = 0; requestAnimationFrame(frame); } }

    var wrap = track.parentElement;
    wrap.addEventListener('pointerenter', function () { paused = true; });
    wrap.addEventListener('pointerleave', function () { paused = false; });
    doc.addEventListener('visibilitychange', function () { paused = doc.hidden; });

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        measure();
        offset = offset % -width;
        track.style.transform = 'translate3d(' + offset.toFixed(2) + 'px,0,0)';
      }, 160);
    });

    // Defer until fonts settle so the group width is final.
    if (doc.fonts && doc.fonts.ready) {
      doc.fonts.ready.then(function () { measure(); start(); });
    } else {
      window.addEventListener('load', function () { measure(); start(); });
      start();
    }
  })();

  /* --------------------------- Portrait blur-up -------------------------- */
  (function portrait() {
    var img = $('#portrait-img');
    if (!img) return;
    if (img.complete && img.naturalWidth) { img.classList.add('is-loaded'); return; }
    img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
    img.addEventListener('error', function () { img.classList.add('is-loaded'); }, { once: true });
  })();

  /* ----------------------- Project card pointer glow --------------------- */
  (function cardGlow() {
    if (isTouch || reducedMotion.matches) return;

    $$('.project').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
      });
    });
  })();

  /* --------------------------- Copy e-mail + toast ----------------------- */
  (function copyEmail() {
    var btn = $('[data-copy]');
    var toast = $('[data-toast]');
    if (!btn || !toast) return;

    var timer;

    function say(msg) {
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(timer);
      timer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
    }

    function fallback(text) {
      var ta = doc.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      doc.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = doc.execCommand('copy'); } catch (e) { ok = false; }
      doc.body.removeChild(ta);
      return ok;
    }

    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () { say('E-mail copiado: ' + text); };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {
          say(fallback(text) ? 'E-mail copiado: ' + text : text);
        });
      } else {
        say(fallback(text) ? 'E-mail copiado: ' + text : text);
      }
    });
  })();

  /* ------------------------------- Footer ------------------------------- */
  (function footer() {
    var y = $('[data-year]');
    if (y) y.textContent = String(new Date().getFullYear());
  })();

  /* -------------------------- Anchor offset fix -------------------------- */
  // CSS `scroll-padding-top` covers modern browsers; this is the safety net
  // for deep links that land while the header is still transparent.
  (function anchors() {
    doc.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var target = doc.getElementById(id);
      if (!target) return;

      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY -
                (root.classList.contains('no-smooth') ? 0 : 16);
      window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      history.replaceState(null, '', '#' + id);
    });
  })();
})();
