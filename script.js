/* ==========================================================================
   LEG — gemeinsames Skript für Startseite und Beitragsseiten.
   Vanilla JS, kein Build, keine Abhängigkeiten.

   Die Eventdaten stehen in events-data.js (window.LEG_EVENTS). Dieses Skript
   baut daraus die Liste der Startseite und die einzelne Beitragsseite.

   Jeder Block prüft zuerst, ob seine Elemente existieren, damit dieselbe
   Datei auf allen Seiten eingebunden werden kann.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  var events = (window.LEG_EVENTS || []).slice().sort(function (a, b) {
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  });

  /* Pfade unterscheiden sich zwischen Startseite und events/-Ordner.
     Beide Werte stehen als data-Attribute am <body>. */
  var assetsPath = document.body.getAttribute('data-assets-path') || 'assets/';
  var eventsPath = document.body.getAttribute('data-events-path') || 'events/';

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function eventUrl(id) {
    return eventsPath + 'event.html?id=' + encodeURIComponent(id);
  }

  function findEvent(id) {
    for (var i = 0; i < events.length; i++) {
      if (events[i].id === id) return events[i];
    }
    return null;
  }

  /* -------------------------------------------------------- Zeilenmarkup */
  function rowHtml(ev) {
    /* Farbe des Kategorie-Labels kommt aus style.css: .tag--<category> */
    return '' +
      '<article class="event-row" data-category="' + esc(ev.category) + '"' +
      ' data-title="' + esc(ev.title) + '">' +
        '<p class="event-row__date">' +
          '<span class="event-row__day">' + esc(ev.day) + '</span>' +
          '<span class="event-row__month">' + esc(ev.month) + '</span>' +
        '</p>' +
        '<img class="event-row__thumb" src="' + esc(assetsPath + ev.image) + '"' +
        ' alt="' + esc(ev.alt) + '" width="104" height="72" loading="lazy">' +
        '<div class="event-row__text">' +
          '<span class="tag tag--' + esc(ev.category) + '">' +
            esc(ev.categoryLabel) + '</span>' +
          '<h3>' + esc(ev.title) + '</h3>' +
          '<p class="event-row__teaser">' + esc(ev.teaser) + '</p>' +
          '<p class="event-row__when">' + esc(ev.time) + ' &middot; ' +
            esc(ev.location) + '</p>' +
        '</div>' +
        '<a class="event-row__go" href="' + esc(eventUrl(ev.id)) + '"' +
        ' aria-label="Beitrag lesen: ' + esc(ev.title) + '">' +
          '<span aria-hidden="true">&rarr;</span>' +
        '</a>' +
      '</article>';
  }

  /* ------------------------------------------- Liste auf der Startseite */
  function renderEventList() {
    var list = document.querySelector('[data-event-list]');
    if (!list || !events.length) return;

    list.innerHTML = events.map(rowHtml).join('');
  }

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
    var list = document.querySelector('[data-event-list]');
    var chips = document.querySelectorAll('[data-filter]');
    var search = document.querySelector('[data-search]');
    if (!list || !chips.length) return;

    var cards = Array.prototype.slice.call(list.querySelectorAll('[data-category]'));
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
      search.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') event.preventDefault();
      });
    }

    apply();
  }

  /* ------------------------------------------------- Beitragsseite */
  function renderEventPage() {
    var page = document.querySelector('[data-event-page]');
    if (!page) return;

    var params = new URLSearchParams(window.location.search);
    var ev = findEvent(params.get('id'));

    if (!ev) {
      page.innerHTML =
        '<div class="container section">' +
          '<h1>Event nicht gefunden</h1>' +
          '<p class="lead">Dieser Beitrag existiert nicht (mehr). ' +
          'Auf der Startseite stehen alle aktuellen Termine.</p>' +
          '<p><a class="btn btn--primary" href="../index.html#events">Zu den Events</a></p>' +
        '</div>';
      return;
    }

    document.title = ev.title + ' — LEG';
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', ev.teaser);

    function fill(slot, html) {
      var el = page.querySelector('[data-slot="' + slot + '"]');
      if (el) el.innerHTML = html;
    }

    fill('breadcrumb', esc(ev.shortTitle || ev.title));
    fill('eyebrow', esc(ev.categoryLabel));
    fill('title', esc(ev.title));
    fill('lead', esc(ev.lead));

    var icons = {
      date: '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>',
      time: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
      place: '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>'
    };

    function metaItem(icon, text) {
      return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
        ' stroke-width="2" stroke-linecap="round" aria-hidden="true">' + icon + '</svg>' +
        esc(text) + '</li>';
    }

    fill('meta',
      metaItem(icons.date, ev.dateLabel) +
      metaItem(icons.time, ev.time) +
      metaItem(icons.place, ev.location));

    fill('cover',
      '<img src="' + esc(assetsPath + ev.image) + '" alt="' + esc(ev.alt) + '"' +
      ' width="800" height="600">');

    var body = (ev.sections || []).map(function (section) {
      var html = '';
      if (section.heading) html += '<h2>' + esc(section.heading) + '</h2>';
      (section.paragraphs || []).forEach(function (text) {
        html += '<p>' + esc(text) + '</p>';
      });
      if (section.list && section.list.length) {
        html += '<ul>' + section.list.map(function (item) {
          return '<li>' + esc(item) + '</li>';
        }).join('') + '</ul>';
      }
      return html;
    }).join('');

    body += '<p><em>Hinweis: Alle Angaben sind Platzhalter des Prototyps und ' +
      'werden vor der Veröffentlichung durch echte Inhalte ersetzt.</em></p>';
    fill('body', body);

    var facts = ev.facts || {};
    fill('facts', Object.keys(facts).map(function (key) {
      return '<div><dt>' + esc(key) + '</dt><dd>' + esc(facts[key]) + '</dd></div>';
    }).join(''));

    /* Die beiden nächsten Events im Kalender, umlaufend. */
    var index = events.indexOf(ev);
    var related = [];
    for (var step = 1; related.length < 2 && step < events.length; step++) {
      related.push(events[(index + step) % events.length]);
    }
    fill('related', related.map(rowHtml).join(''));
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

  /* Reihenfolge zählt: erst Karten bauen, dann filtern. */
  renderEventList();
  renderEventPage();
  initNav();
  initHeaderScroll();
  initEventFilter();
  initReveal();
})();
