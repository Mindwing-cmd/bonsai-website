# Gründe: Timeline-Animation sieht nicht wie gewünscht aus

## 1. **Lenis Smooth Scroll vs. Framer Motion `useScroll`**
- **Problem:** Es wird **Lenis** für weiches Scrollen genutzt (`SmoothScroll`). Framer Motion liest die **native** Scroll-Position von `window`. Lenis interpoliert die Position (z.B. `duration: 1.2`), dadurch kann die gemessene Scroll-Position **verzögert** oder anders verlaufen als das sichtbare Scrollen.
- **Folge:** Die Fortschrittslinie (Höhe/Deckkraft) wirkt **verspätet**, **ruckelig** oder **nicht synchron** mit dem tatsächlichen Scroll.

## 2. **Höhe der Timeline erst nach dem ersten Layout**
- **Problem:** `height` wird in `useEffect` per `getBoundingClientRect()` und `ResizeObserver` gesetzt. Beim **ersten Render** ist `height = 0`. Die Linie hat also `height: 0px` und `heightTransform` animiert von 0 zu 0.
- **Folge:** Die animierte Linie kann **anfangs unsichtbar** sein oder erst **nach dem ersten Scroll/Resize** erscheinen.

## 3. **Scroll-Offset-Bereich**
- **Problem:** `offset: ["start 10%", "end 50%"]` bedeutet: `scrollYProgress` geht von 0 → 1, wenn der **Anfang** des Containers 10 % des Viewports erreicht, bis der **Ende** des Containers bei 50 % ist. Bei **kurzer Seite** oder **viel Inhalt** kann der Fortschritt sehr schnell oder sehr langsam durchlaufen.
- **Folge:** Linie füllt sich **zu früh** oder **zu spät** im Verhältnis zu den sticky Titeln.

## 4. **Z-Index / Überdeckung der Linie**
- **Problem:** Die vertikale Linie hat **kein** `z-index`, die linke Spalte (Titel + Kreis) hat `z-40`. Die Linie liegt bei `left-8`, die Kreise bei `left-3` mit Hintergrund `bg-[var(--background)]`. Dadurch **überdecken die Kreise** die Linie an den Knotenpunkten.
- **Folge:** Die Fortschrittslinie wirkt **abgeschnitten** oder **unterbrochen** an den Sticky-Punkten statt durchgehend.

## 5. **Sticky nur im scrollenden Vorfahren**
- **Problem:** `position: sticky` funktioniert nur relativ zum **nächsten scrollenden Vorfahren**. Die Timeline steckt in `-ml-[50vw]` Full-Bleed-Containern und darin in `InteractiveNeuralVortex` (der `overflow-x-hidden` hat). Wenn irgendwo **overflow: hidden** (oder `overflow-y: hidden`) auf einem umschließenden Element sitzt, kann Sticky **deaktiviert** werden.
- **Folge:** Die Titel **kleben nicht** oben, sondern scrollen normal mit.

## 6. **Opacity nur im ersten Progress-Bereich**
- **Problem:** `opacityTransform` mappt `[0, 0.1]` → `[0, 1]`. Die Linie ist also schon bei **10 % Scroll-Progress** voll sichtbar. Wenn `scrollYProgress` durch Lenis oder kurze Sektion **kaum** 0–0.1 durchläuft, bleibt die Linie **scheinbar unsichtbar**.
- **Folge:** Linie erscheint **gar nicht** oder nur sehr kurz.

## 7. **Container-Ref und Viewport**
- **Problem:** `useScroll({ target: containerRef })` bezieht den Fortschritt auf das **Target-Element**. Wenn die Timeline in einem **breiten Full-Bleed-Bereich** liegt, kann die berechnete „Sichtbarkeit“ des Containers im Viewport von der tatsächlichen Wahrnehmung abweichen (z.B. bei festem Header `pt-24`).
- **Folge:** 0 und 1 von `scrollYProgress` treffen **zu früh** oder **zu spät** ein.

---

## Empfohlene Fixes (priorisiert)

1. **Höhe initial setzen** – z.B. `height` erst nach `requestAnimationFrame` oder in einem zweiten `useEffect` nach Mount setzen, oder einen Mindestwert nutzen, bis die echte Höhe da ist.
2. **Linie hinter die Kreise legen** – Linie mit `z-0`, rechter Content-Bereich mit `z-10`, Sticky-Spalte behält `z-40`; Kreise behalten Deckfläche, damit die Linie darunter durch die Lücke zwischen den Kreisen sichtbar wirkt, oder Linie bewusst **unter** dem Sticky-Bereich (z.B. `z-[-1]`) und Kreise mit Hintergrund.
3. **Offset anpassen** – z.B. `["start 5%", "end 60%"]` oder andere Werte testen, damit der Fortschritt besser zur Länge der Seite passt.
4. **Lenis und useScroll** – Optional: Lenis-`scroll`-Event nutzen und eine eigene Progress-Berechnung für die Timeline machen, oder Lenis auf den Leistungen-Seiten temporär deaktivieren, um zu prüfen, ob die Animation dann stimmt.
