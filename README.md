# LEG — Webseiten-Prototyp

Statischer Prototyp für den Auftritt einer **LEG (lokale Elektrizitätsgemeinschaft)**:
Startseite mit Infos, Bildern und Partnerbereich, dazu Blog-artige Beiträge zu
kommenden Events.

Reines HTML, CSS und Vanilla-JavaScript — **kein Build-Tool, kein Server, keine
externen Abhängigkeiten**. Alle Pfade sind relativ, die Seite läuft per
Doppelklick genauso wie auf GitHub Pages.

## Aufbau

```
index.html          Startseite (Hero, Zahlen, Über, Galerie, Events, Partner, Kontakt)
style.css           Gemeinsames Stylesheet für alle Seiten
script.js           Mobile-Navigation, Event-Filter/Suche, Scroll-Reveal
assets/             SVG-Platzhalter: Logo, Favicon, Bilder, Sponsor-Logos
events/
  event-1.html      Lokaler Foodtruck-Abend
  event-2.html      Infoabend: So funktioniert die LEG
  event-3.html      Familiennachmittag mit Sunny
  event-4.html      WG Green Living Awards
  _template.html    Kopiervorlage für neue Beiträge (wird nicht verlinkt)
```

## Lokal ansehen

`index.html` doppelklicken. Mehr ist nicht nötig — es gibt nichts zu
installieren und nichts zu kompilieren.

## Veröffentlichen (GitHub Pages)

Repository → **Settings** → **Pages** → Source: `Deploy from a branch`,
Branch: `main`, Ordner: `/ (root)`. Nach ein bis zwei Minuten ist die Seite
unter `https://<benutzername>.github.io/<repo-name>/` erreichbar. Am Code muss
dafür nichts geändert werden.

## Neues Event hinzufügen

1. **Beitrag anlegen:** `events/_template.html` kopieren und umbenennen,
   z. B. zu `events/event-5.html`. Alle mit `HIER ANPASSEN` markierten Stellen
   ausfüllen (Titel, Datum, Uhrzeit, Ort, Kategorie, Bild, Text, Eckdaten).
2. **Auf der Startseite verlinken:** In `index.html` im Block
   `<div class="event-grid">` eine bestehende `<article class="event-card">`
   duplizieren und anpassen:
   - `data-category` — Kategorie in Kleinbuchstaben, steuert den Filter
   - `data-title` — Titel, wird von der Suche durchsucht
   - Bild, Tag, Tag-Datum (`event-card__day` / `event-card__month`), Überschrift, Teaser
   - `href` auf die neue Datei, z. B. `events/event-5.html`
3. **Neue Kategorie?** In `index.html` bei `<div class="filter-chips">` einen
   weiteren Button ergänzen. Sein `data-filter` muss exakt dem `data-category`
   der Karte entsprechen.

## Bilder ersetzen

Unter `assets/` liegen SVG-Platzhalter. Ein echtes Foto einbinden: Datei in
`assets/` ablegen und im `<img src="…">` den Dateinamen tauschen — plus einen
`alt`-Text schreiben, der beschreibt, was zu sehen ist. Seitenverhältnisse
regelt das CSS (`object-fit: cover`), Fotos müssen nicht zugeschnitten werden.

## Platzhalter, die vor einer echten Veröffentlichung ersetzt gehören

Im HTML jeweils als `<!-- PLATZHALTER: … -->` markiert:

- Kennzahlen im Band unter dem Hero (`142 Haushalte`, `310 kWp` …)
- Sponsorenlogos und -texte (lokaler Solarhersteller, Stadtwerk, weitere Partner)
- Kontaktadresse `info@leg-beispiel.de`, Anschrift, Impressum und Datenschutz
- Alle Event-Inhalte samt Daten aus dem Jahr 2026

## Barrierefreiheit und Verhalten

- Ohne JavaScript bleibt die Seite vollständig nutzbar; der Event-Filter ist
  eine Zusatzfunktion, alle Karten sind dann sichtbar.
- `prefers-reduced-motion` wird respektiert — dann laufen keine Animationen.
- Sprunglink, sichtbarer Fokusring, Beschriftungen und `alt`-Texte sind gesetzt.
- Ab 1800 px Breite skaliert die Typografie hoch, damit die Seite auch auf einem
  großen Display oder einer Infotafel auf Distanz lesbar bleibt.
