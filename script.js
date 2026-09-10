/* ==========================================================================
   LEG — gemeinsames Skript für Startseite und Beitragsseiten.
   Vanilla JS, kein Build, keine Abhängigkeiten.
   Jeder Block prüft zuerst, ob seine Elemente existieren, damit dieselbe
   Datei auf allen Seiten eingebunden werden kann.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  /* ---------------------------------------------------------------- Nav */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------------------ Header-Schatten */
  function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ------------------------------------------------- Filter + Suche */
  function initEventFilter() {
    var grid = document.querySelector('[data-event-grid]');
    var chips = document.querySelectorAll('[data-filter]');
    var search = document.querySelector('[data-search]');
    if (!grid || !chips.length) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-category]'));
    var empty = document.querySelector('[data-empty]');
    var status = document.querySelector('[data-filter-status]');
    var activeCategory = 'alle';

    function apply() {
      var term = search ? search.value.trim().toLowerCase() : '';
      var visible = 0;

      cards.forEach(function (card) {
        var category = card.getAttribute('data-category') || '';
        var haystack = (card.getAttribute('data-title') || '').toLowerCase() + ' ' + category;
        var matchCategory = activeCategory === 'alle' || category === activeCategory;
        var matchTerm = term === '' || haystack.indexOf(term) !== -1;
        var show = matchCategory && matchTerm;

        card.hidden = !show;
        if (show) visible++;
      });

      if (empty) empty.hidden = visible !== 0;
      if (status) {
        status.textContent = visible === 1
          ? '1 Event wird angezeigt.'
          : visible + ' Events werden angezeigt.';
      }
    }

    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () {
        activeCategory = chip.getAttribute('data-filter') || 'alle';
        Array.prototype.forEach.call(chips, function (other) {
          other.setAttribute('aria-pressed', other === chip ? 'true' : 'false');
        });
        apply();
      });
    });

    if (search) {
      search.addEventListener('input', apply);
      // Enter im Suchfeld soll keine Seite neu laden
      search.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') event.preventDefault();
      });
    }

    apply();
  }

  /* -------------------------------------------------- Scroll-Reveal */
  function initReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    function showAll() {
      Array.prototype.forEach.call(items, function (item) {
        item.classList.add('is-visible');
      });
    }

    if (reduceMotion || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(items, function (item) {
      observer.observe(item);
    });
  }

  initNav();
  initHeaderScroll();
  initEventFilter();
  initReveal();
})();
