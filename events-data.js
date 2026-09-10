/* ==========================================================================
   LEG — Eventdaten

   EINZIGE QUELLE für alle Events. Die Startseite baut ihre Karten daraus,
   events/event.html baut daraus die Detailseite.

   NEUES EVENT ANLEGEN: unten einen Block kopieren, Werte anpassen, fertig.
   Es muss keine HTML-Datei angelegt und nichts verlinkt werden.

   Pflichtfelder:
     id        eindeutig, nur Kleinbuchstaben und Bindestriche.
               Steht später in der Adresse: events/event.html?id=DEINE-ID
     category  steuert den Filter. Muss zu einem data-filter-Wert der Chips
               in index.html passen (dort ggf. neuen Chip ergänzen).
     date      ISO-Format JJJJ-MM-TT, wird zum Sortieren benutzt.
     image     Dateiname aus dem Ordner assets/ (ohne Pfad).
   ========================================================================== */
window.LEG_EVENTS = [

  {
    id: 'foodtruck-september',
    title: 'Lokaler Foodtruck-Abend bei der LEG',
    shortTitle: 'Foodtruck-Abend',
    category: 'foodtruck',
    categoryLabel: 'Foodtruck',
    date: '2026-09-18',
    day: '18',
    month: 'Sep',
    dateLabel: '18. September 2026',
    time: '17:00 – 21:00 Uhr',
    location: 'LEG-Hof, neben dem Gemeinschaftsgarten',
    image: 'img-foodtruck.svg',
    alt: 'Foodtruck mit Wimpelkette und Gästen auf dem LEG-Hof',
    teaser: 'Regionaler Foodtruck, Gespräche am Stand und kurze Info-Häppchen zu gemeinsamer Energie vor Ort.',
    lead: 'Ein entspannter Abend auf dem LEG-Hof: gutes Essen aus der Region, Gespräche mit dem Team und ein lockerer Einstieg in die Gemeinschaft.',
    sections: [
      {
        paragraphs: [
          'Der lokale Foodtruck bringt frische, unkomplizierte Küche direkt auf das LEG-Gelände. Dazu gibt es Infomaterial zur Gemeinschaft, kurze Gespräche mit dem Team und viel Zeit für Nachbarschaftsaustausch.',
          'Der Abend ist bewusst niedrigschwellig gedacht: vorbeikommen, etwas essen, Fragen stellen und die nächsten Projekte der LEG kennenlernen.'
        ]
      },
      {
        heading: 'Was der Abend bietet',
        list: [
          'Wechselndes Angebot vom regionalen Foodtruck, auch vegetarisch',
          'Infostand zur LEG mit Beispielrechnungen aus dem Quartier',
          'Kurzführung zur PV-Anlage auf dem Hofdach (ca. 20 Minuten)',
          'Sitzgelegenheiten und Spielecke für Familien'
        ]
      },
      {
        heading: 'Gut zu wissen',
        paragraphs: [
          'Eine Anmeldung ist nicht nötig — einfach vorbeikommen. Der Hof ist barrierefrei zugänglich, Fahrradstellplätze sind vorhanden. Bei Dauerregen weichen wir in die überdachte Remise aus.'
        ]
      }
    ],
    facts: {
      'Was': 'Offener Foodtruck-Abend mit Infostand',
      'Wann': '18. September 2026, 17:00 – 21:00 Uhr',
      'Wo': 'LEG-Hof, neben dem Gemeinschaftsgarten',
      'Für wen': 'Mitglieder, Nachbarschaft und alle Interessierten',
      'Kosten': 'Eintritt frei, Speisen zum Selbstzahlerpreis'
    }
  },

  {
    id: 'infoabend-september',
    title: 'Infoabend: So funktioniert die LEG',
    shortTitle: 'Infoabend',
    category: 'infoveranstaltung',
    categoryLabel: 'Infoveranstaltung',
    date: '2026-09-24',
    day: '24',
    month: 'Sep',
    dateLabel: '24. September 2026',
    time: '18:00 – 20:30 Uhr',
    location: 'Stadtteilzentrum, Großer Saal',
    image: 'img-info.svg',
    alt: 'Vortrag mit Diagrammen auf einer Leinwand vor sitzendem Publikum',
    teaser: 'Kompakter Überblick für neue Mitglieder, Nachbarschaften und Interessierte — mit viel Raum für Fragen.',
    lead: 'Ein Abend, der die Energiegemeinschaft ohne Fachsprache erklärt — von der Erzeugung auf dem Dach bis zur Abrechnung am Monatsende.',
    sections: [
      {
        paragraphs: [
          'Dieser Abend erklärt die LEG in einfacher Form: Wie funktioniert lokale Erzeugung, wie entsteht Gemeinschaftsenergie und welche Rolle spielen Nachbarschaft, Stadtwerk und Netzbetreiber dabei?',
          'Es gibt einen kurzen Vortrag, eine offene Fragerunde und Infotafeln mit Beispielen aus der Praxis. Vorwissen ist nicht nötig.'
        ]
      },
      {
        heading: 'Programm',
        list: [
          '18:00 — Ankommen, Getränke, kurze Begrüßung',
          '18:20 — Vortrag: Erzeugung, Verteilung, Abrechnung',
          '19:00 — Praxisbeispiele aus zwei Quartieren',
          '19:30 — Offene Fragerunde',
          '20:00 — Austausch an den Infotafeln'
        ]
      },
      {
        heading: 'Für wen sich der Abend lohnt',
        paragraphs: [
          'Für Haushalte, die über einen Beitritt nachdenken, für Eigentümerinnen und Eigentümer mit freier Dachfläche, für Mieterinnen und Mieter ohne eigenes Dach — und für alle, die wissen wollen, was im Viertel gerade entsteht.'
        ]
      }
    ],
    facts: {
      'Was': 'Vortrag mit Fragerunde und Infotafeln',
      'Wann': '24. September 2026, 18:00 – 20:30 Uhr',
      'Wo': 'Stadtteilzentrum, Großer Saal',
      'Für wen': 'Neue Mitglieder, Nachbarschaft, Interessierte',
      'Kosten': 'Eintritt frei, keine Anmeldung nötig'
    }
  },

  {
    id: 'sunny-familiennachmittag',
    title: 'Sunny lädt zum Familiennachmittag ein',
    shortTitle: 'Familiennachmittag mit Sunny',
    category: 'maskottchen',
    categoryLabel: 'Maskottchen',
    date: '2026-10-02',
    day: '02',
    month: 'Okt',
    dateLabel: '2. Oktober 2026',
    time: '14:00 – 18:00 Uhr',
    location: 'Innenhof und Marktplatz',
    image: 'img-sunny.svg',
    alt: 'Sunny, das Sonnen-Maskottchen der LEG, winkt mit beiden Armen',
    teaser: 'Unser Maskottchen Sunny begleitet Mitmachstationen, Bastelecken und Fotopunkte für Groß und Klein.',
    lead: 'Sunny, das Sonnen-Maskottchen der LEG, öffnet den Innenhof für Familien: Mitmachen, basteln, Fotos machen — und ganz nebenbei etwas über Energie lernen.',
    sections: [
      {
        paragraphs: [
          'Sunny begleitet den Familiennachmittag mit kurzen Walk-Acts, Fotopunkten und kleinen Aktionen für Kinder und Erwachsene. Zwischen den Auftritten ist Sunny am Infopoint zu finden.',
          'Geplant sind Mitmachstationen, Infokarten zum Stromsparen im Alltag und eine freundliche Atmosphäre für alle, die die Gemeinschaft ohne Vortragsformat kennenlernen möchten.'
        ]
      },
      {
        heading: 'Stationen im Hof',
        list: [
          'Bastelecke: Sonnenblume aus Papier und kleine Windräder',
          'Mini-Solarwerkstatt mit Modellautos für Kinder ab 6 Jahren',
          'Fotopunkt mit Sunny — Bilder gern selbst mitnehmen',
          'Quiz-Tafel: Wie viel Strom steckt in einem Alltagsgerät?',
          'Kuchentheke des Nachbarschaftsvereins'
        ]
      },
      {
        heading: 'Gut zu wissen',
        paragraphs: [
          'Der Nachmittag ist offen und kostenlos, Kinder bleiben in Begleitung Erwachsener. Der Innenhof ist stufenlos erreichbar, Kinderwagen kein Problem. Bei starkem Regen verschieben wir in die Markthalle.'
        ]
      }
    ],
    facts: {
      'Was': 'Familiennachmittag mit Maskottchen und Mitmachstationen',
      'Wann': '2. Oktober 2026, 14:00 – 18:00 Uhr',
      'Wo': 'Innenhof und Marktplatz',
      'Für wen': 'Familien, Kinder ab 3 Jahren, Nachbarschaft',
      'Kosten': 'Eintritt frei, Kuchen gegen Spende'
    }
  },

  {
    id: 'green-living-awards',
    title: 'WG Green Living Awards',
    shortTitle: 'Green Living Awards',
    category: 'awards',
    categoryLabel: 'Awards',
    date: '2026-10-11',
    day: '11',
    month: 'Okt',
    dateLabel: '11. Oktober 2026',
    time: '16:00 – 19:30 Uhr',
    location: 'Quartiershalle, Bühne',
    image: 'img-awards.svg',
    alt: 'Goldener Pokal auf einem Siegerpodest mit Konfetti',
    teaser: 'Auszeichnung für gemeinschaftliche Wohnideen, Energieeffizienz und smarte Nachbarschaftsprojekte.',
    lead: 'Ein Abend für Wohnprojekte, die zeigen, wie gemeinschaftliches und energiebewusstes Wohnen im Alltag wirklich aussieht.',
    sections: [
      {
        paragraphs: [
          'Bei den WG Green Living Awards zeichnen wir Wohnideen aus, die gemeinschaftlich, energiesparend und alltagstauglich sind. Im Mittelpunkt stehen Projekte, die andere zum Nachmachen einladen.',
          'Nominiert werden können Wohngemeinschaften, Hausgemeinschaften und Nachbarschaftsinitiativen mit smarter Flächennutzung, geteilten Ressourcen und klaren Ideen für nachhaltiges Zusammenleben.'
        ]
      },
      {
        heading: 'Kategorien',
        list: [
          'Beste Energieidee — messbar weniger Verbrauch im Alltag',
          'Geteilte Ressourcen — Werkzeug, Mobilität, Geräte, Flächen',
          'Nachbarschaftswirkung — Projekte, die über das eigene Haus hinausgehen',
          'Publikumspreis — Abstimmung am Abend vor Ort'
        ]
      },
      {
        heading: 'Ablauf',
        paragraphs: [
          'Nach der Begrüßung stellen sich die nominierten Projekte in kurzen Beiträgen vor. Die Jury aus LEG, Stadtwerk und Nachbarschaftsrat vergibt die drei Fachpreise, der Publikumspreis wird direkt im Saal ermittelt. Im Anschluss gibt es Zeit zum Austausch.'
        ]
      }
    ],
    facts: {
      'Was': 'Preisverleihung mit Projektvorstellungen',
      'Wann': '11. Oktober 2026, 16:00 – 19:30 Uhr',
      'Wo': 'Quartiershalle, Bühne',
      'Für wen': 'Wohnprojekte, Mitglieder, Gäste aus der Region',
      'Kosten': 'Eintritt frei, Platzreservierung empfohlen'
    }
  },

  {
    id: 'foodtruck-oktober',
    title: 'Herbstausgabe: Foodtruck & Erntemarkt',
    shortTitle: 'Foodtruck & Erntemarkt',
    category: 'foodtruck',
    categoryLabel: 'Foodtruck',
    date: '2026-10-23',
    day: '23',
    month: 'Okt',
    dateLabel: '23. Oktober 2026',
    time: '16:00 – 20:00 Uhr',
    location: 'LEG-Hof und Gemeinschaftsgarten',
    image: 'img-foodtruck.svg',
    alt: 'Foodtruck mit Wimpelkette und Gästen auf dem LEG-Hof',
    teaser: 'Zweite Runde mit Suppenküche, Ständen aus dem Gemeinschaftsgarten und warmem Licht im Hof.',
    lead: 'Der Foodtruck kommt wieder — diesmal mit Herbstkarte und Ständen aus dem eigenen Gemeinschaftsgarten.',
    sections: [
      {
        paragraphs: [
          'Nach dem gut besuchten September-Abend gibt es eine Herbstausgabe. Der Foodtruck bringt eine kleine Suppenkarte mit, der Gemeinschaftsgarten stellt Kürbis, Kräuter und Eingemachtes daneben.',
          'Der Hof wird beleuchtet, es gibt Stehtische und ausreichend Sitzplätze unter dem Vordach.'
        ]
      },
      {
        heading: 'Neu in dieser Ausgabe',
        list: [
          'Erntestand des Gemeinschaftsgartens gegen Spende',
          'Kurzvorstellung der Winterprojekte der LEG',
          'Tauschecke für Saatgut und Stecklinge'
        ]
      }
    ],
    facts: {
      'Was': 'Foodtruck-Abend mit Erntemarkt',
      'Wann': '23. Oktober 2026, 16:00 – 20:00 Uhr',
      'Wo': 'LEG-Hof und Gemeinschaftsgarten',
      'Für wen': 'Offen für alle',
      'Kosten': 'Eintritt frei, Speisen zum Selbstzahlerpreis'
    }
  },

  {
    id: 'infoabend-november',
    title: 'Infoabend für Vermietende und Hausverwaltungen',
    shortTitle: 'Infoabend für Vermietende',
    category: 'infoveranstaltung',
    categoryLabel: 'Infoveranstaltung',
    date: '2026-11-12',
    day: '12',
    month: 'Nov',
    dateLabel: '12. November 2026',
    time: '18:30 – 20:30 Uhr',
    location: 'Stadtteilzentrum, Seminarraum 2',
    image: 'img-info.svg',
    alt: 'Vortrag mit Diagrammen auf einer Leinwand vor sitzendem Publikum',
    teaser: 'Wie kommt der Gemeinschaftsstrom in ein Mehrparteienhaus? Praxisabend für Eigentum und Verwaltung.',
    lead: 'Ein Abend speziell für alle, die ein Haus mit mehreren Parteien verwalten — von der Dachfläche bis zur Nebenkostenabrechnung.',
    sections: [
      {
        paragraphs: [
          'Mehrparteienhäuser sind der größte Hebel im Quartier und zugleich der kniffligste Fall. Dieser Abend geht die typischen Fragen der Reihe nach durch.',
          'Mit dabei sind eine Vertreterin des Stadtwerks und eine Hausverwaltung, die den Schritt bereits gegangen ist.'
        ]
      },
      {
        heading: 'Themen',
        list: [
          'Dachflächen: Eignung, Statik, Pacht oder Eigenbetrieb',
          'Zählerkonzepte und was sich dabei ändert',
          'Verteilung und Abrechnung gegenüber den Mietparteien',
          'Förderungen und typische Stolpersteine'
        ]
      }
    ],
    facts: {
      'Was': 'Fachlicher Infoabend mit Praxisbericht',
      'Wann': '12. November 2026, 18:30 – 20:30 Uhr',
      'Wo': 'Stadtteilzentrum, Seminarraum 2',
      'Für wen': 'Vermietende, Hausverwaltungen, Eigentümergemeinschaften',
      'Kosten': 'Eintritt frei, Anmeldung erbeten'
    }
  },

  {
    id: 'sunny-laternenzug',
    title: 'Sunnys Laternenzug durchs Quartier',
    shortTitle: 'Sunnys Laternenzug',
    category: 'maskottchen',
    categoryLabel: 'Maskottchen',
    date: '2026-11-21',
    day: '21',
    month: 'Nov',
    dateLabel: '21. November 2026',
    time: '17:00 – 19:00 Uhr',
    location: 'Start am Marktplatz',
    image: 'img-evening.svg',
    alt: 'Beleuchtetes Quartier am Abend mit Lichterketten',
    teaser: 'Sunny führt den Laternenzug an — mit selbst gebauten Solarlaternen durch die dunkle Jahreszeit.',
    lead: 'Ein Zug durchs Viertel, angeführt von Sunny: Laternen basteln, gemeinsam losgehen und das Quartier im Dunkeln neu sehen.',
    sections: [
      {
        paragraphs: [
          'Ab 16:00 Uhr wird am Marktplatz gebastelt: Laternen mit kleinen Solarleuchten statt Kerze. Wer schon eine Laterne hat, bringt sie einfach mit.',
          'Um 17:30 Uhr setzt sich der Zug in Bewegung, begleitet von Sunny und der Nachbarschaftskapelle. Die Route führt an drei LEG-Anlagen vorbei, die an diesem Abend beleuchtet sind.'
        ]
      },
      {
        heading: 'Gut zu wissen',
        paragraphs: [
          'Warm anziehen, festes Schuhwerk. Die Route ist etwa 1,5 Kilometer lang und mit Kinderwagen befahrbar. Am Ziel gibt es Punsch und Kinderpunsch.'
        ]
      }
    ],
    facts: {
      'Was': 'Laternenzug mit Bastelaktion',
      'Wann': '21. November 2026, 17:00 – 19:00 Uhr',
      'Wo': 'Start am Marktplatz',
      'Für wen': 'Familien und Nachbarschaft',
      'Kosten': 'Eintritt frei, Bastelmaterial gegen Spende'
    }
  },

  {
    id: 'jahresrueckblick',
    title: 'Jahresrückblick und Zahlen der Gemeinschaft',
    shortTitle: 'Jahresrückblick',
    category: 'infoveranstaltung',
    categoryLabel: 'Infoveranstaltung',
    date: '2026-12-10',
    day: '10',
    month: 'Dez',
    dateLabel: '10. Dezember 2026',
    time: '18:00 – 20:00 Uhr',
    location: 'Quartiershalle, kleiner Saal',
    image: 'img-community.svg',
    alt: 'Menschen im Gespräch an einem Infopoint der LEG',
    teaser: 'Was hat das Jahr gebracht? Erzeugung, Verbrauch und Projekte der LEG offen auf dem Tisch.',
    lead: 'Einmal im Jahr legen wir alle Zahlen offen: Wie viel Strom wurde erzeugt, wie viel blieb im Quartier, und was steht als Nächstes an?',
    sections: [
      {
        paragraphs: [
          'Der Jahresrückblick ist bewusst öffentlich. Mitglieder sehen, was ihr Beitrag bewirkt hat, Interessierte bekommen einen ungeschönten Eindruck von Aufwand und Ertrag.',
          'Im zweiten Teil sammeln wir gemeinsam Ideen für das kommende Jahr — von neuen Dachflächen bis zu Formaten, die euch bisher gefehlt haben.'
        ]
      },
      {
        heading: 'Auf dem Programm',
        list: [
          'Erzeugung und Eigenverbrauch im Jahresverlauf',
          'Abrechnung: was das für die Haushalte bedeutet hat',
          'Stand der laufenden Projekte',
          'Ideenrunde für das kommende Jahr'
        ]
      }
    ],
    facts: {
      'Was': 'Öffentliche Jahresbilanz mit Ideenrunde',
      'Wann': '10. Dezember 2026, 18:00 – 20:00 Uhr',
      'Wo': 'Quartiershalle, kleiner Saal',
      'Für wen': 'Mitglieder und Interessierte',
      'Kosten': 'Eintritt frei'
    }
  },

  {
    id: 'winterwerkstatt',
    title: 'Winterwerkstatt: Stromfresser finden',
    shortTitle: 'Winterwerkstatt',
    category: 'infoveranstaltung',
    categoryLabel: 'Infoveranstaltung',
    date: '2027-01-22',
    day: '22',
    month: 'Jan',
    dateLabel: '22. Januar 2027',
    time: '17:00 – 20:00 Uhr',
    location: 'Werkraum im Quartiersbüro',
    image: 'img-info.svg',
    alt: 'Vortrag mit Diagrammen auf einer Leinwand vor sitzendem Publikum',
    teaser: 'Messgeräte ausleihen, Verbrauch verstehen, Kosten senken — praktischer Abend zum Mitmachen.',
    lead: 'Ein Abend mit Messgeräten statt Folien: Wir schauen uns an, wo im Haushalt der Strom tatsächlich hingeht.',
    sections: [
      {
        paragraphs: [
          'Jede Teilnehmerin und jeder Teilnehmer bekommt ein Messgerät und lernt, damit den eigenen Haushalt durchzugehen. Die Geräte können anschließend für zwei Wochen mit nach Hause genommen werden.',
          'Wer mag, bringt seine letzte Stromabrechnung mit — dann rechnen wir gemeinsam durch, was sich realistisch einsparen lässt.'
        ]
      },
      {
        heading: 'Mitbringen',
        list: [
          'Letzte Stromabrechnung (freiwillig)',
          'Ein Gerät aus dem Haushalt, das euch verdächtig vorkommt',
          'Notizzeug'
        ]
      }
    ],
    facts: {
      'Was': 'Praxis-Werkstatt mit Messgeräten zum Ausleihen',
      'Wann': '22. Januar 2027, 17:00 – 20:00 Uhr',
      'Wo': 'Werkraum im Quartiersbüro',
      'Für wen': 'Haushalte aus dem Quartier, max. 20 Personen',
      'Kosten': 'Eintritt frei, Anmeldung nötig'
    }
  },

  {
    id: 'fruehjahrsputz',
    title: 'Frühjahrsputz an den Solaranlagen',
    shortTitle: 'Frühjahrsputz',
    category: 'maskottchen',
    categoryLabel: 'Maskottchen',
    date: '2027-03-13',
    day: '13',
    month: 'Mär',
    dateLabel: '13. März 2027',
    time: '10:00 – 14:00 Uhr',
    location: 'Treffpunkt LEG-Hof',
    image: 'img-solar.svg',
    alt: 'Illustrierte Häuserzeile mit Solaranlagen auf den Dächern',
    teaser: 'Anlagen checken, Module reinigen, danach gemeinsam grillen — mit Sunny als Vorarbeiter.',
    lead: 'Einmal im Frühjahr gehen wir gemeinsam über die Anlagen: reinigen, prüfen, dokumentieren — und danach zusammen essen.',
    sections: [
      {
        paragraphs: [
          'Verschmutzte Module bringen messbar weniger Ertrag. Statt eine Firma zu beauftragen, machen wir das gemeinsam — angeleitet von zwei Fachleuten aus der Gemeinschaft.',
          'Gearbeitet wird nur an gut zugänglichen Flächen, alles Weitere übernimmt der Wartungsbetrieb. Sunny ist auch dabei, allerdings ohne Leiter.'
        ]
      },
      {
        heading: 'Ablauf',
        list: [
          '10:00 — Einweisung und Sicherheitshinweise',
          '10:30 — Reinigung in Zweiergruppen',
          '12:30 — Sichtprüfung und Protokoll',
          '13:00 — Gemeinsames Grillen im Hof'
        ]
      }
    ],
    facts: {
      'Was': 'Gemeinsame Wartungsaktion mit anschließendem Grillen',
      'Wann': '13. März 2027, 10:00 – 14:00 Uhr',
      'Wo': 'Treffpunkt LEG-Hof',
      'Für wen': 'Mitglieder ab 16 Jahren',
      'Kosten': 'Kostenlos, Verpflegung inklusive'
    }
  },

  {
    id: 'foodtruck-fruehling',
    title: 'Frühlingsausgabe: Foodtruck im Garten',
    shortTitle: 'Foodtruck im Garten',
    category: 'foodtruck',
    categoryLabel: 'Foodtruck',
    date: '2027-04-24',
    day: '24',
    month: 'Apr',
    dateLabel: '24. April 2027',
    time: '16:00 – 21:00 Uhr',
    location: 'Gemeinschaftsgarten',
    image: 'img-community.svg',
    alt: 'Menschen im Gespräch an einem Infopoint der LEG',
    teaser: 'Saisonstart im Gemeinschaftsgarten mit Foodtruck, Pflanzentauschbörse und Livemusik.',
    lead: 'Der Garten macht auf: Foodtruck, Pflanzentausch und Musik zum Start in die neue Saison.',
    sections: [
      {
        paragraphs: [
          'Zum Saisonstart öffnet der Gemeinschaftsgarten für alle. Der Foodtruck steht am Eingang, die Beete sind frisch bestellt, und wer mag, nimmt einen Ableger mit nach Hause.',
          'Ab 19:00 Uhr spielt eine Band aus dem Viertel — betrieben, wie es sich gehört, mit Strom aus der Gemeinschaft.'
        ]
      },
      {
        heading: 'Dabei',
        list: [
          'Foodtruck mit Frühlingskarte',
          'Pflanzen- und Saatguttauschbörse',
          'Führung durch die neuen Beete',
          'Livemusik ab 19:00 Uhr'
        ]
      }
    ],
    facts: {
      'Was': 'Saisoneröffnung mit Foodtruck und Musik',
      'Wann': '24. April 2027, 16:00 – 21:00 Uhr',
      'Wo': 'Gemeinschaftsgarten',
      'Für wen': 'Offen für alle',
      'Kosten': 'Eintritt frei, Speisen zum Selbstzahlerpreis'
    }
  },

  {
    id: 'green-living-awards-2027',
    title: 'WG Green Living Awards 2027',
    shortTitle: 'Green Living Awards 2027',
    category: 'awards',
    categoryLabel: 'Awards',
    date: '2027-05-15',
    day: '15',
    month: 'Mai',
    dateLabel: '15. Mai 2027',
    time: '17:00 – 21:00 Uhr',
    location: 'Quartiershalle, große Bühne',
    image: 'img-awards.svg',
    alt: 'Goldener Pokal auf einem Siegerpodest mit Konfetti',
    teaser: 'Zweite Auflage der Awards — diesmal mit offener Nominierung aus allen vier Quartieren.',
    lead: 'Die Awards gehen in die zweite Runde: mehr Kategorien, offene Nominierung und eine Jury aus allen vier Quartieren.',
    sections: [
      {
        paragraphs: [
          'Nach der gut besuchten ersten Auflage öffnen wir die Nominierung: Jedes Wohnprojekt aus den vier Quartieren kann sich selbst oder andere vorschlagen.',
          'Neu ist die Kategorie „Bester Neustart" für Projekte, die im laufenden Jahr begonnen haben.'
        ]
      },
      {
        heading: 'Nominierung',
        paragraphs: [
          'Vorschläge können bis vier Wochen vor der Verleihung eingereicht werden. Ein kurzer Text und zwei Fotos reichen — die Jury meldet sich für Rückfragen.'
        ]
      }
    ],
    facts: {
      'Was': 'Preisverleihung mit offener Nominierung',
      'Wann': '15. Mai 2027, 17:00 – 21:00 Uhr',
      'Wo': 'Quartiershalle, große Bühne',
      'Für wen': 'Wohnprojekte, Mitglieder, Gäste aus der Region',
      'Kosten': 'Eintritt frei, Platzreservierung empfohlen'
    }
  }

];
