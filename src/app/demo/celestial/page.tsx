import { CelestialSphere } from "@/components/ui/celestial-sphere";

export const metadata = {
  title: "Celestial Sphere – Demo | BonS-AI",
  description: "Interactive WebGL shader component demo.",
};

export default function DemoCelestialPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-none bg-[var(--background)]">
      <CelestialSphere
        hue={210.0}
        speed={0.4}
        zoom={1.2}
        particleSize={4.0}
        className="absolute inset-0 top-0 left-0 h-full w-full"
      />
      <div className="relative z-10 text-center text-[var(--foreground)] pointer-events-none px-6">
        <h1 className="font-primary text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Celestial Sphere
        </h1>
        <p className="mt-4 text-lg text-[var(--steel-graphite)]">
          Interaktive WebGL-Shader-Komponente für React.
        </p>
      </div>
    </div>
  );
}
