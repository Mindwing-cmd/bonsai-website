# Case Study: Zahnärzte am Inn – Petri & Kollegen

**Projekt:** Praxis-Website für Zahnärzte am Inn (Mühldorf & Töging am Inn)  
**Auftraggeber:** Dr. Petri & Kollegen  
**Leistung:** Webdesign, Frontend-Entwicklung, SEO, DSGVO-konforme Umsetzung  
**Technologie:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Vercel, Resend (E-Mail)

---

## Hero

**Titel:** Zahnärzte am Inn – Petri & Kollegen  
**Untertitel:** Kompetenz und Vertrauen – Implantologie · Ästhetische Zahnmedizin · Orale Chirurgie · Prophylaxe

**Kurzbeschreibung (2–3 Zeilen):**  
Moderne Praxis-Website für zwei Standorte (Mühldorf und Töging am Inn). Fokus auf Vertrauen, klare Information zu Leistungen und Terminkontakt. Responsiv, suchmaschinenoptimiert und DSGVO-konform.

**Bild (Beschreibung):**  
Hero: Startseiten-Screenshot mit Video-Hintergrund (oder statisches Hero-Bild), darüber Titel und kurzer Intro-Text. Darunter zwei Standort-Karten (Mühldorf / Töging) mit Adresse und Öffnungszeiten. Ruhige, vertrauensvolle Farbgebung (z. B. Weiß, dezentes Grün/Blau).

---

## Projektübersicht

| Karte        | Inhalt                                      |
|-------------|---------------------------------------------|
| **Branche** | Medizin / Zahnarztpraxis                    |
| **Leistung**| Webdesign, Content-Struktur, Kontaktformular|
| **Timeline**| Typisch 4–8 Wochen (Konzept bis Go-Live)     |
| **Plattform**| Web (responsive, mobiloptimiert)           |

**Rolle:** Konzeption, Design, Umsetzung (Next.js/React), SEO, Hosting/Vercel-Setup.  
**Technologien:** Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, Resend (Kontaktformular), Leaflet/Mapbox (Standortkarten), strukturierte Daten (JSON-LD).

---

## Ausgangslage / Problem

- Die Praxis benötigte eine **moderne, vertrauenswürdige Webpräsenz** für zwei Standorte (Mühldorf am Inn, Töging am Inn).
- **Ziele:** Klare Darstellung der Leistungen (Implantologie, Ästhetik, Orale Chirurgie, Prophylaxe usw.), einfacher Kontakt/Terminanfrage, gute Auffindbarkeit in der Region (z. B. „Zahnarzt Mühldorf am Inn“, „Zahnarzt Töging“).
- **Anforderungen:** Responsives Design, semantisches HTML, SEO-Metadaten pro Seite, DSGVO-konforme Datenschutzerklärung und Kontaktformular, optional Karten und Öffnungszeiten pro Standort.

---

## Lösung

Eine **einheitliche Praxis-Website** mit App Router, zentraler Inhaltssteuerung über Konstanten und Inhaltsdateien, und klarer Informationsarchitektur:

- **Startseite:** Hero mit Video oder Bild, Praxis-Eindrücke (Carousel), eingebettetes Kontaktformular + Öffnungszeiten, Leistungs-Panels mit Hover-Ausklapp.
- **Praxis:** Über uns, Werte (Patientenorientierung, Qualität, Vertrauen, Einfühlungsvermögen), Team-Seiten pro Standort.
- **Leistungen:** Dynamische Unterseiten (z. B. Implantologie, Prothetik, Schienentherapie, Prophylaxe) mit einheitlichem Layout (PageHeader, Sektionen mit Bild/Text, optional FAQ).
- **Kontakt:** Zwei Kontaktformulare (Mühldorf / Töging), Versand per Resend an die Praxis-E-Mail.
- **Rechtliches:** Impressum, Datenschutz (HTML-Inhalt zentral gepflegt).
- **Karriere:** Stellenangebote / Bewerbungshinweise.

Technisch: Next.js 16 (App Router), TypeScript, Tailwind 4, Framer Motion für Animationen, Resend für E-Mail, Leaflet/Mapbox für Karten, JSON-LD für Dentist/LocalBusiness (SEO).

---

## Prozess – Wie die Webseite erstellt wurde (Schritt für Schritt)

1. **Briefing & Konzept**  
   Anforderungen und Ziele geklärt: zwei Standorte, Leistungskatalog, Kontakt, Vertrauen, regionale Suchbegriffe. Informationsarchitektur (Start, Praxis, Leistungen, Kontakt, Karriere, Impressum, Datenschutz) und URL-Struktur festgelegt.

2. **Struktur & Inhalte**  
   Zentrale Konstanten (`lib/constants.ts`): Standorte, Öffnungszeiten, Navigation, Leistungsliste, Praxisbilder, Team. Inhalte für Leistungsseiten und Praxis in `lib/subpage-content` bzw. ähnlichen Modulen. Einheitliche Benennung von Bildern (z. B. Praxis/, Behandlung/, Team/) für einfache Pflege.

3. **Design & Abnahme**  
   Ruhige, medizinisch vertrauensvolle Gestaltung: klare Typografie, ausreichend Kontrast, abgerundete Karten und Buttons. Farbakzent (z. B. Grün/Blau) für Marke und CTAs. Hero mit Video oder Bild, Carousel für Praxis-Eindrücke, Leistungs-Panels mit Hover. Design für Desktop und Mobile durchgespielt und abgenommen.

4. **Umsetzung (Technik)**  
   Next.js 16 mit App Router, TypeScript, Tailwind CSS 4. Seiten: `app/page.tsx` (Start), `app/about-us/page.tsx`, `app/[slug]/page.tsx` (Leistungen), `app/team-muehldorf`, `app/team-toeging`, `app/kontaktformular-muehldorf`, `app/kontaktformular-toeging`, `app/karriere`, `app/impressum`, `app/datenschutz`. Komponenten: Header, HeroWithVideo, PracticeCarousel, ServicesSection, ContactForm, JsonLd, PageHeader, LeistungSectionCard, VideoEmbed usw. Bilder über `next/image` mit festen Pfaden aus `public/images/`.

5. **Content & Bilder**  
   Texte und Bildlisten in Konstanten und Subpage-Content eingepflegt. Praxisbilder (z. B. TOM04779.jpg …) in `public/images/Praxis/`, Behandlungsbilder in `public/images/Behandlung/`, Team in `public/images/Team/`. OG-Bild und Favicon für Social und Browser. README-Anleitung für spätere Foto-/Video-Erweiterung.

6. **SEO & strukturierte Daten**  
   Pro Seite eigene Metadaten (Titel, Description, Keywords) über `lib/seo` und `buildSeoMetadata`. JSON-LD: Schema „Dentist“ mit beiden Standorten, Adressen, Telefon, E-Mail, Öffnungszeiten; LocalBusiness pro Standort. Sitemap (`/sitemap.xml`) und Canonical-URL über `NEXT_PUBLIC_SITE_URL`. Suchbegriffe u. a. Zahnarzt Mühldorf am Inn, Zahnarzt Töging, Dr. Petri & Kollegen.

7. **Kontaktformular & E-Mail**  
   Server Action `sendContactForm` mit Resend: Formulardaten werden an die Praxis-E-Mail (`RESEND_TO`) gesendet, Absender über `RESEND_FROM` (verifizierte Domain). Hinweis auf Datenschutz unter dem Formular, keine Speicherung in externer DB. Umgebungsvariablen in Vercel gesetzt.

8. **Launch & Einweisung**  
   Build und Export mit `npm run build`, Deployment auf Vercel. Domain (z. B. www.zahnaerzte-am-inn.de) in Vercel hinterlegt, DNS beim Anbieter eingetragen. Nach Go-Live: Sitemap in Google Search Console und Bing Webmaster Tools eingereicht, Kontaktformular getestet. Kundenseitige Pflege von Bildern und Texten über README dokumentiert.

---

## Worauf besonders geachtet wurde

- **Vertrauen und Seriosität:** Ruhige Farben, klare Hierarchie, professionelle Bilder (Praxis, Behandlung, Team). Werte wie Patientenorientierung, Qualität und Transparenz auf der Über-uns-Seite hervorgehoben.

- **DSGVO und Datenschutz:** Vollständige Datenschutzerklärung als eigene Seite, zentral als HTML gepflegt. Kontaktformular mit Hinweis auf Verarbeitung nur zur Anfragebearbeitung und Link zur Datenschutzerklärung. Keine unnötigen Cookies; nur technisch notwendige bzw. dokumentierte Dienste.

- **SEO und regionale Auffindbarkeit:** Pro Seite eigene Titel, Descriptions und Keywords (z. B. Zahnarzt Mühldorf am Inn, Zahnarzt Töging). Strukturierte Daten (JSON-LD) für Dentist und LocalBusiness mit beiden Standorten, Adressen, Öffnungszeiten und Kontakt. Sitemap und Canonical-URL für saubere Indizierung.

- **Barrierefreiheit und Usability:** Semantisches HTML (Überschriften, Landmarks, aria-label wo nötig). Kontaktformular mit sichtbaren Labels, ausreichend großen Touch-Zielen (min. 44px). Klare Kontrastverhältnisse und lesbare Schriftgrößen.

- **Performance und Wartbarkeit:** Next.js Image-Optimierung, statische Generierung wo möglich. Inhalte über zentrale Konstanten und Content-Dateien, sodass Texte und Bildlisten ohne tiefe Code-Änderungen angepasst werden können. Ausführliche README für Deployment (Vercel), Umgebungsvariablen und spätere Fotos/Videos.

- **Zwei Standorte konsistent:** Einheitliche Navigation mit Unterseiten für Team Mühldorf und Team Töging, jeweils eigenes Kontaktformular. Öffnungszeiten und Adressen pro Standort klar getrennt und in JSON-LD abgebildet.

---

## Design / UI-Showcase (Bilder – nur Beschreibung)

- **Hero / Startseite:** Screenshot der Startseite mit Hero-Bereich (Video oder Bild), Titel „Kompetenz und Vertrauen – Zahnärzte am Inn“, zwei Standort-Karten (Mühldorf, Töging) mit Adresse und Öffnungszeiten. Darunter Hinweis auf Kontaktformular und Praxis-Eindrücke.

- **Praxis-Eindrücke:** Carousel oder Galerie mit Praxisbildern (z. B. Behandlungszimmer, Empfang). Überschrift „Eindrücke von unserer Praxis“. Querformat oder Raster.

- **Leistungen:** Ausschnitt einer Leistungsseite (z. B. Implantologie oder Prophylaxe) mit großem Header-Bild, Titel, Kurzbeschreibung und darunter Karten mit Behandlungsschwerpunkten (Bild oben oder seitlich, Text, Hover-Effekt).

- **Über uns / Werte:** Zwei bis vier Karten mit Bild und Wert (z. B. Patientenorientierung, Qualitätsstandards, Vertrauen, Einfühlungsvermögen). Hover zeigt zusätzlichen Text Overlay. Ruhige, vertrauensvolle Optik.

- **Kontakt:** Kontaktformular (Name, E-Mail, Nachricht), daneben oder darunter Öffnungszeiten beider Standorte in Karten. Optional Kartenansicht (Mapbox/Leaflet) mit beiden Praxisstandorten.

- **Mobile Ansicht:** Ein bis zwei Screenshots der Startseite oder einer Leistungsseite auf Smartphone: lesbare Schrift, klare Buttons, Navigation (z. B. Hamburger-Menü), Kontakt-CTA gut erreichbar.

---

## Ergebnisse

- **Go-Live:** Website unter Produktionsdomain (z. B. www.zahnaerzte-am-inn.de) erreichbar, zwei Standorte und alle geplanten Seiten (Start, Praxis, Leistungen, Kontakt, Karriere, Impressum, Datenschutz) umgesetzt.

- **Technik:** Schnelle Ladezeiten durch Next.js-Optimierung und statische Generierung. Kontaktformular versendet zuverlässig per Resend an die Praxis; Datenschutz und Hinweise integriert.

- **SEO:** Pro Seite angepasste Meta-Titel und -Descriptions, strukturierte Daten (Dentist, LocalBusiness) für bessere Darstellung in Suchergebnissen. Sitemap eingereicht; Grundlage für regionale Suchbegriffe (Zahnarzt Mühldorf am Inn, Töging, Dr. Petri & Kollegen) gelegt.

- **Wartbarkeit:** Zentrale Pflege von Standorten, Öffnungszeiten, Navigation und Leistungstexten. README beschreibt Deployment, Umgebungsvariablen und das Einbinden neuer Fotos/Videos ohne Code-Anpassung.

*(Falls konkrete Kennzahlen vorliegen – z. B. Ladezeit, Kontaktanfragen vorher/nachher – hier eintragen.)*

---

## CTA (Call-to-Action)

**Überschrift:** Ähnliches Projekt für Ihre Praxis oder Ihr Unternehmen?

**Text:** Moderne, vertrauenswürdige Webseiten mit klarer Struktur, Kontaktformular und SEO – von der Konzeption bis zum Launch. Wir setzen auf bewährte Technik und überschaubare Pflege.

**Button:** Projekt starten / Kontakt aufnehmen  
*(Verlinkung auf Ihre Kontaktseite oder E-Mail.)*

---

## Kurzfassung für Überschriften / Pitch

- **Hero:** Zahnärzte am Inn – moderne Praxis-Website für zwei Standorte.
- **Problem:** Fehlende oder veraltete Webpräsenz, Bedarf nach Vertrauen, Kontakt und regionaler Sichtbarkeit.
- **Lösung:** Next.js-Website mit klarer Struktur, Kontaktformular, SEO und JSON-LD.
- **Prozess:** Briefing → Struktur & Inhalte → Design → Umsetzung → Content & Bilder → SEO & Resend → Launch & Einweisung.
- **Besonderes:** Vertrauen, DSGVO, SEO/regionale Suche, Barrierefreiheit, Performance, zwei Standorte konsistent.
- **Ergebnis:** Live-Website, wartbar, suchmaschinen- und nutzerfreundlich.
- **CTA:** Projekt starten / Kontakt aufnehmen.
