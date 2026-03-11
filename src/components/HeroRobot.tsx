"use client";

import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const NEXBOT_SPLINE_EMBED_URL =
  "https://my.spline.design/nexbotrobotcharacterconceptforpersonaluse-l5MWJrKa6KfxFRMA1Sfyv0rL/";

interface HeroRobotProps {
  /** Normalisierte Mausposition relativ zur Sektion: x,y von -1 bis 1 (Mitte = 0) */
  mouseNormX: number;
  mouseNormY: number;
}

const PARALLAX_STRENGTH = 20;

export function HeroRobot({ mouseNormX, mouseNormY }: HeroRobotProps) {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    mouseX.set(mouseNormX * PARALLAX_STRENGTH);
    mouseY.set(mouseNormY * PARALLAX_STRENGTH);
  }, [mouseNormX, mouseNormY, mouseX, mouseY]);

  return (
    <div className="absolute inset-0 h-full w-full">
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="absolute inset-0 h-full w-full"
      >
        <iframe
          src={NEXBOT_SPLINE_EMBED_URL}
          title="Nexbot – BonS-AI Roboter"
          className="absolute inset-0 h-full w-full min-h-full min-w-full border-0"
          allowFullScreen
        />
      </motion.div>
    </div>
  );
}
