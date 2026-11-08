"use client";

const NEXBOT_SPLINE_EMBED_URL =
  "https://my.spline.design/nexbotrobotcharacterconceptforpersonaluse-l5MWJrKa6KfxFRMA1Sfyv0rL/?v=2";

/**
 * Spline-Roboter über Brand-BG.
 * - spline-interactive: Lenis darf pointer-events nicht killen
 * - mix-blend-multiply: weiße Embed-Fläche wird zum Violet-Aurora darunter,
 *   dunkler Roboter bleibt sichtbar (ohne zusätzliche Abdunkelungs-Overlays)
 */
export function HeroRobot() {
  return (
    <div
      className="absolute inset-0 h-full w-full overflow-hidden"
      style={{ backgroundColor: "transparent", colorScheme: "light" }}
    >
      <iframe
        src={NEXBOT_SPLINE_EMBED_URL}
        title="Nexbot – BonS-AI Roboter"
        className="spline-interactive absolute inset-0 h-full w-full min-h-full min-w-full border-0 mix-blend-multiply"
        style={{ backgroundColor: "transparent", colorScheme: "light" }}
        allow="autoplay; fullscreen"
        loading="eager"
      />
    </div>
  );
}
