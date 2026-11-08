import { cn } from "@/lib/utils";

/**
 * Violet Aurora Gradient Hero Background (21st.dev)
 * Angepasst an BonS-AI Brand (#0B0812, #A388EE, #7B5CD9, #C4A0FF)
 */
export function VioletAuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ containerType: "size" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#0B0812",
          backgroundImage:
            "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.030'/></svg>\"), radial-gradient(circle at 56.18% 53.14%, rgba(11, 8, 18, 1) 0%, rgba(11, 8, 18, 0.844) 19.02%, rgba(11, 8, 18, 0.5) 38.05%, rgba(11, 8, 18, 0.156) 57.07%, rgba(11, 8, 18, 0) 76.1%), radial-gradient(circle at 40.93% 70.24%, rgba(18, 16, 26, 1) 0%, rgba(18, 16, 26, 0.844) 17.71%, rgba(18, 16, 26, 0.5) 35.42%, rgba(18, 16, 26, 0.156) 53.14%, rgba(18, 16, 26, 0) 70.85%), radial-gradient(circle at 58% 14.42%, rgba(163, 136, 238, 0.9) 0%, rgba(163, 136, 238, 0.75) 12.9%, rgba(163, 136, 238, 0.35) 25.8%, rgba(163, 136, 238, 0.1) 38.7%, rgba(163, 136, 238, 0) 51.6%), radial-gradient(circle at 65% 81.01%, rgba(123, 92, 217, 0.95) 0%, rgba(123, 92, 217, 0.7) 13.34%, rgba(123, 92, 217, 0.35) 26.68%, rgba(123, 92, 217, 0.1) 40.01%, rgba(123, 92, 217, 0) 53.35%), radial-gradient(circle at 16.23% 47.68%, rgba(163, 136, 238, 0.75) 0%, rgba(163, 136, 238, 0.55) 12.46%, rgba(163, 136, 238, 0.28) 24.93%, rgba(163, 136, 238, 0.08) 37.39%, rgba(163, 136, 238, 0) 49.85%), radial-gradient(circle at 94% 31.96%, rgba(196, 160, 255, 0.85) 0%, rgba(196, 160, 255, 0.6) 11.59%, rgba(196, 160, 255, 0.28) 23.18%, rgba(196, 160, 255, 0.08) 34.76%, rgba(196, 160, 255, 0) 46.35%)",
          backgroundSize: "120px 120px, auto, auto, auto, auto, auto, auto",
          backgroundBlendMode: "overlay, normal, normal, normal, normal, normal, normal",
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] mix-blend-overlay"
      >
        <filter id="grain-bons-ai-aurora">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-bons-ai-aurora)" />
      </svg>
    </div>
  );
}
