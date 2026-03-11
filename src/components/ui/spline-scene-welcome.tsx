"use client";

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneWelcome() {
  return (
    <Card className="relative h-[500px] w-full overflow-hidden border-0 bg-[var(--deep-carbon)]">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="var(--brand-accent)"
      />

      <div className="flex h-full flex-col md:flex-row">
        {/* Left: Welcome copy – BonS-AI brand */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-12">
          <h2 className="font-primary text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-b from-[var(--light-industrial)] to-[var(--steel-graphite)] bg-clip-text text-transparent">
              Willkommen
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-[var(--light-industrial)]">
            High-end technology-driven digital studio. Wir verbinden präzises Web Design
            mit KI-gestützten Systemen – minimal, selbstbewusst, zukunftsorientiert.
          </p>
          <p className="mt-2 text-sm text-[var(--steel-graphite)]">
            Erlebe interaktive 3D-Erlebnisse, die Aufmerksamkeit wecken und deine Marke stärken.
          </p>
        </div>

        {/* Right: 3D Spline scene */}
        <div className="relative flex-1 min-h-[280px] md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  );
}
