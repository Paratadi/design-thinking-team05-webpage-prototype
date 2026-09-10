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
events-data.js      ALLE Eventinhalte — die einzige Datei, die für Events zählt
events/event.html   Eine Vorlage, die jeden Beitrag anzeigt
style.css           Gemeinsames Stylesheet für alle Seiten
script.js           Baut die Karten und Beiträge, Navigation, Filter, Suche
assets/             SVG-Platzhalter: Logo, Favicon, Bilder, Sponsor-Logos
```

### Wie die Events funktionieren

Es gibt **keine HTML-Datei pro Event**. Alle Inhalte stehen in
`events-data.js`; `script.js` baut daraus die Karten der Startseite und füllt
`events/event.html`. Welcher Beitrag angezeigt wird, steht in der Adresse:

```
events/event.html?id=foodtruck-september
```

Vorteil: Ein Event wird an genau einer Stelle gepflegt. Layout-Änderungen
gelten sofort für alle Beiträge.

## Lokal ansehen

`index.html` doppelklicken. Mehr ist nicht nötig — es gibt nichts zu
installieren und nichts zu kompilieren.

## Veröffentlichen (GitHub Pages)

Repository → **Settings** → **Pages** → Source: `Deploy from a branch`,
Branch: `main`, Ordner: `/ (root)`. Nach ein bis zwei Minuten ist die Seite
unter `https://<benutzername>.github.io/<repo-name>/` erreichbar. Am Code muss
dafür nichts geändert werden.

## Neues Event hinzufügen

Nur **eine** Datei anfassen: `events-data.js`.

1. Einen bestehenden Block im Array kopieren und die Werte anpassen.
2. Speichern, Seite neu laden. Karte und Beitrag sind sofort da, die Sortierung
   nach Datum passiert automatisch.

Worauf zu achten ist:

| Feld | Bedeutung |
|---|---|
| `id` | eindeutig, nur Kleinbuchstaben und Bindestriche — steht später in der Adresse |
| `category` | steuert den Filter, muss zu einem Chip in `index.html` passen |
| `date` | `JJJJ-MM-TT`, wird zum Sortieren benutzt |
| `day` / `month` | was auf der Karte im Datums-Badge steht (z. B. `18` / `Sep`) |
| `image` | Dateiname aus `assets/`, ohne Pfad |
| `sections` | der Fließtext: pro Block wahlweise `heading`, `paragraphs`, `list` |

**Neue Kategorie?** In `index.html` bei `<div class="filter-chips">` einen
weiteren Button ergänzen. Sein `data-filter` muss exakt dem `category`-Wert aus
`events-data.js` entsprechen.

## Bilder ersetzen

Unter `assets/` liegen SVG-Platzhalter. Ein echtes Foto einbinden: Datei in
`assets/` ablegen, dann den Dateinamen eintragen — bei Events im Feld `image`
in `events-data.js`, sonst direkt im `<img src="…">`. Dazu einen `alt`-Text
schreiben, der beschreibt, was zu sehen ist. Seitenverhältnisse regelt das CSS
(`object-fit: cover`), Fotos müssen nicht zugeschnitten werden.

## Platzhalter, die vor einer echten Veröffentlichung ersetzt gehören

Im HTML jeweils als `<!-- PLATZHALTER: … -->` markiert:

- Sponsorenlogos und -texte (lokaler Solarhersteller, Stadtwerk, weitere Partner)
- Kontaktadresse `kontakt@leg-prototyp.example`, Anschrift, Rechtliches und
  Datenschutz — bewusst neutral gehalten, ohne Ortsbezug
- Alle Event-Inhalte in `events-data.js` samt Daten aus 2026 und 2027

## Barrierefreiheit und Verhalten

- Der Rest der Seite (Hero, Über, Galerie, Partner, Kontakt, Footer) steht
  fest im HTML und funktioniert auch ohne JavaScript. Die Events werden aus
  `events-data.js` erzeugt und brauchen JavaScript — ohne erscheint an ihrer
  Stelle ein Hinweistext.
- `prefers-reduced-motion` wird respektiert — dann laufen keine Animationen.
- Sprunglink, sichtbarer Fokusring, Beschriftungen und `alt`-Texte sind gesetzt.
- Ab 1800 px Breite skaliert die Typografie hoch, damit die Seite auch auf einem
  großen Display oder einer Infotafel auf Distanz lesbar bleibt.
