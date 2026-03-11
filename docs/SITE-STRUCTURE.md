# BonS-AI – Seitenstruktur & Sitemap

Inspiriert von modernen Tech- und Agentur-Websites (Stripe, Vercel, Linear, hochwertige Digital Studios). Klare Hierarchie, eine Hauptaufgabe pro Seite, maximal 3 Klicks zu allen wichtigen Inhalten.

---

## 1. Übersicht (Sitemap)

```
/                       → Startseite (Home)
/leistungen/webdesign   → Einzelleistung: Webdesign
/leistungen/ki-systeme  → Einzelleistung: KI-Systeme
/leistungen/innovation  → Einzelleistung: Web- und Mobile-Apps
/leistungen/paid-ads    → Einzelleistung: Paid Ads
/referenzen             → Referenzen / Projekte (Portfolio)
/referenzen/[slug]      → Einzelprojekt (Case Study)
/ueber-uns              → Über uns (Team, Ansatz, Werte)
/kontakt                → Kontakt (Formular + Infos)
/preise                 → Pricingübersicht
/impressum              → Impressum
/datenschutz            → Datenschutz
```

---

## 2. Seite für Seite

### Startseite `/`
- **Job:** Vertrauen aufbauen, klare Positionierung, direkte Wege zu Leistungen & Kontakt.
- **Sektionen (wie aktuell, evtl. verfeinert):**
  - Hero (BonS-AI, Roboter, CTAs)
  - Leistungen-Teaser (4 Kacheln → Link zu `/leistungen/[slug]` oder Anker `#leistungen` auf der Home)
  - Über-uns-Teaser (Positioning, ein Satz)
  - Kontakt-Teaser + CTA
- **Navigation:** Logo, Leistungen (Dropdown zu Detailseiten), Referenzen, Über uns, Kontakt, „Projekt starten“.

### Leistungen (keine Übersichtsseite)
- **Überblick:** Auf der Startseite: Leistungen-Teaser mit Karten, die direkt zu den Detailseiten verlinken.
- **Detailseiten** `/leistungen/webdesign` etc.:
  - Outcome, Inhalt, Zeitrahmen, Referenz-Projekte, FAQ, CTA „Gespräch vereinbaren“.

### Referenzen `/referenzen`
- **Job:** Risiko reduzieren – zeigen, was ihr könnt und was dabei rauskommt.
- **Inhalt:**
  - Filterbare/klassierte Projektliste (z. B. nach Branche, Leistung).
  - Karten: Bild/Preview, Titel, Kurzbeschreibung, Technologie, Link zu Case Study.
- **Case Study** `/referenzen/[slug]`:
  - Ausgangslage, Lösung, Prozess, Ergebnis (mit Kennzahlen wenn möglich), Galerie, CTA.

### Preise `/preise`
- **Job:** Preisübersicht und Paketangebote
- **Inhalt:**
  - Übersicht zu den Preisen für Webdesign
  - Übersicht zu den Preisen für Hosting  & Wartung


### Über uns `/ueber-uns`
- **Job:** Vertrauen und menschliche Ebene – wer steckt hinter BonS-AI.
- **Inhalt:**
  - Positioning (Technologie-getriebenes Studio, Werte).
  - Team (Fotos, kurze Rolle/Bio).
  - Ansatz/Prozess (wie ihr arbeitet).
  - Optional: Meilensteine, Kundenstimmen.

### Kontakt `/kontakt`
- **Job:** Frictionless – schnell anfragen oder informieren.
- **Inhalt:**
  - Kontaktformular (Name, E-Mail, Nachricht, optional Projekttyp).
  - E-Mail, optional Telefon, Adresse.
  - Kurzer Text „Worauf Sie sich freuen können“ / Antwortzeit.

### Rechtliches
- **Impressum** `/impressum`, **Datenschutz** `/datenschutz` – Standard-Inhalte, im Footer verlinkt.

### Optional (Phase 2)
- **Blog/Insights** `/blog`, `/blog/[slug]` – SEO, Expertise zeigen.
- **Karriere** `/karriere` – wenn ihr rekrutiert.

---

## 3. Navigation (Empfehlung)

**Haupt-Nav (Header):**
- Logo → Home
- Leistungen (Dropdown optional: Webdesign, KI-Systeme, Digitale Innovation)
- Referenzen
- Über uns
- Kontakt
- Button: „Projekt starten“ → `/kontakt`

**Footer:**
- Leistungen, Referenzen, Über uns, Kontakt
- Impressum, Datenschutz
- Social/Newsletter optional

---

## 4. Technische Umsetzung (Next.js App Router)

- Jede Hauptseite = eigene Route unter `src/app/...`:
  - `src/app/page.tsx` (Home)
  - `src/app/leistungen/[slug]/page.tsx` (keine Index-Seite unter /leistungen)
  - `src/app/referenzen/page.tsx`, `src/app/referenzen/[slug]/page.tsx`
  - `src/app/ueber-uns/page.tsx`
  - `src/app/kontakt/page.tsx`
  - `src/app/impressum/page.tsx`, `src/app/datenschutz/page.tsx`
- Gemeinsames Layout (Header, Footer) in `src/app/layout.tsx` oder pro Bereich.
- Anker-Links auf der Home (z. B. `#leistungen`) können auf `/leistungen` umgestellt werden, sobald die Seite existiert.

---

## 5. Nächste Schritte

1. **Bestätigen:** Welche Seiten zuerst? (z. B. Leistungen + Kontakt + Impressum/Datenschutz.)
2. **Content:** Kurze Texte pro Sektion bereitstellen.
3. **Umsetzung:** Routen anlegen, Inhalte einpflegen, Nav anpassen.

Wenn du magst, können wir als Nächstes mit `/leistungen` und `/kontakt` starten und die Nav darauf ausrichten.
