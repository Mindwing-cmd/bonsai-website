"use client";

import { useRef, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type SynapseBackgroundProps = {
  className?: string;
  /** Linienfarbe (CSS, z. B. var(--brand-accent)) */
  lineColor?: string;
  /** Opacity der Linien 0–1 */
  opacity?: number;
};

/**
 * Dezenter „Synapse“-Hintergrund: verbundene Linien/Knoten (Netzwerk-Optik).
 * BonS-AI: Electric Blue / Steel Graphite, respektiert prefers-reduced-motion.
 */
export function SynapseBackground({
  className = "",
  lineColor = "var(--brand-accent)",
  opacity = 0.15,
}: SynapseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || reduceMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getComputedLineColor = () => {
      if (typeof document === "undefined") return `rgba(3, 105, 161, ${opacity})`;
      const resolved = getComputedStyle(document.documentElement)
        .getPropertyValue("--brand-accent")
        .trim();
      if (resolved.startsWith("#") && resolved.length >= 3) {
        const hex = resolved.slice(1).replace(/^([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/, "$1$1$2$2$3$3");
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        if (!Number.isNaN(r) && !Number.isNaN(g) && !Number.isNaN(b)) {
          return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
      }
      return `rgba(56, 189, 248, ${opacity})`;
    };

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w === 0 || h === 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      const color = getComputedLineColor();

      const cols = Math.max(4, Math.floor(w / 120));
      const rows = Math.max(3, Math.floor(h / 100));
      const spacingX = w / (cols + 1);
      const spacingY = h / (rows + 1);
      const nodes: { x: number; y: number }[] = [];

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const jitter = 0.15;
          const x = c * spacingX + (Math.sin(time * 0.0008 + c) * spacingX * jitter);
          const y = r * spacingY + (Math.cos(time * 0.0006 + r) * spacingY * jitter);
          nodes.push({ x, y });
        }
      }

      const maxDist = 140;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.globalAlpha = alpha * 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [mounted, reduceMotion, lineColor, opacity]);

  if (!mounted) {
    return <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden />;
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {!reduceMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />
      )}
      {reduceMotion && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${lineColor}08 0%, transparent 50%, ${lineColor}06 100%)`,
          }}
        />
      )}
    </div>
  );
}
