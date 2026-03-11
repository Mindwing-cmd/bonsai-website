"use client";

/**
 * Animated glassy pricing – PricingCard + optional ShaderCanvas background.
 * Primary CTAs use ShinyLink; secondary use RippleButton/Link.
 */
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { ShinyLink } from "@/components/ui/shiny-button";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glProgramRef = useRef<WebGLProgram | null>(null);
  const glBgColorLocationRef = useRef<WebGLUniformLocation | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const [backgroundColor, setBackgroundColor] = useState([0.06, 0.09, 0.16]);

  useEffect(() => {
    const root = document.documentElement;
    const updateColor = () => {
      const isDark = root.classList.contains("dark");
      setBackgroundColor(isDark ? [0.06, 0.09, 0.16] : [1.0, 1.0, 1.0]);
    };
    updateColor();
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          updateColor();
        }
      }
    });
    observer.observe(root, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const gl = glRef.current;
    const program = glProgramRef.current;
    const location = glBgColorLocationRef.current;
    if (gl && program && location) {
      gl.useProgram(program);
      gl.uniform3fv(location, new Float32Array(backgroundColor));
    }
  }, [backgroundColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }
    glRef.current = gl;

    const vertexShaderSource = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBackgroundColor;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff = center-uv;
        float len = length(diff);
        len += variation(diff,vec2(0.,1.),5.,2.);
        len -= variation(diff,vec2(1.,0.),5.,2.);
        float circle = smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv = gl_FragCoord.xy/iResolution.xy;
        uv.x *= 1.5; uv.x -= 0.25;
        float mask = 0.0;
        float radius = .35;
        vec2 center = vec2(.5);
        mask += paintCircle(uv,center,radius,.035).r;
        mask += paintCircle(uv,center,radius-.018,.01).r;
        mask += paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        float t = 0.55 + 0.2*v.x;
        float g = 0.58 + 0.18*v.y;
        float b = 0.65 - 0.1*v.y*v.x;
        vec3 foregroundColor=vec3(t,g,b);
        vec3 color=mix(uBackgroundColor,foregroundColor,mask*0.5);
        color=mix(color,vec3(0.97,0.97,0.98),paintCircle(uv,center,radius,.003).r);
        gl_FragColor=vec4(color,1.);
      }`;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Could not create shader");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Shader compilation error");
      }
      return shader;
    };

    const program = gl.createProgram();
    if (!program) throw new Error("Could not create program");
    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    glProgramRef.current = program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(program, "iTime");
    const iResLoc = gl.getUniformLocation(program, "iResolution");
    glBgColorLocationRef.current = gl.getUniformLocation(program, "uBackgroundColor");
    gl.uniform3fv(glBgColorLocationRef.current, new Float32Array(backgroundColor));

    let animationFrameId: number;
    const render = (time: number) => {
      gl.uniform1f(iTimeLoc!, time * 0.001);
      gl.uniform2f(iResLoc!, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    animationFrameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 block h-full w-full bg-[var(--background)] z-0"
      aria-hidden
    />
  );
};

export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  /** e.g. "/mo" or "einmalig" – default "/mo" */
  priceSuffix?: string;
  features: string[];
  buttonText: string;
  /** If set, the button becomes a Link to this href. */
  href?: string;
  /** Optional second button next to the main CTA (e.g. "Vollständige Leistung"). */
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  isPopular?: boolean;
  buttonVariant?: "primary" | "secondary";
  /** Kompaktere Karte: gleiche Breite, weniger Höhe (z. B. Starter). */
  compact?: boolean;
  /** Mittlere Höhe: höher als compact, niedriger als Business (z. B. Enterprise). */
  medium?: boolean;
}

export const PricingCard = ({
  planName,
  description,
  price,
  priceSuffix = "/mo",
  features,
  buttonText,
  href,
  secondaryButtonText,
  secondaryButtonHref,
  isPopular = false,
  buttonVariant = "primary",
  compact = false,
  medium = false,
}: PricingCardProps) => {
  const hoverStyles =
    "hover:shadow-2xl hover:border-[var(--brand-accent-soft)]/25 dark:hover:border-[var(--brand-accent-soft)]/30 hover:-translate-y-0.5";
  const sizeCompact = compact;
  const sizeMedium = medium && !compact;
  const sizeFull = !sizeCompact && !sizeMedium;
  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    ${hoverStyles}
    ${isPopular
      ? "scale-110 flex-[1.25] min-w-0 max-w-sm px-7 py-8 relative ring-2 ring-[var(--brand-accent-soft)]/20 from-[var(--brand-accent-muted)] to-black/0 dark:from-white/15 dark:to-white/5 dark:border-[var(--brand-accent-soft)]/20 shadow-2xl"
      : sizeCompact
        ? "flex-1 min-w-0 max-w-xs px-6 py-5"
        : sizeMedium
          ? "flex-1 min-w-0 max-w-xs px-6 py-6"
          : "flex-1 min-w-0 max-w-xs px-7 py-8"
    }
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans flex items-center justify-center gap-2
    ${buttonVariant === "primary"
      ? "bg-[var(--brand-accent)] hover:opacity-95 text-[var(--brand-foreground)]"
      : "bg-black/10 hover:bg-black/20 text-foreground border border-black/20 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20"
    }
  `;

  const isShinyCta = href && buttonVariant === "primary";

  return (
    <div className={cardClasses.trim()}>
      {isPopular && (
        <div className="absolute -top-4 right-4 rounded-full bg-[var(--brand-accent-soft)] px-3 py-1 text-[12px] font-semibold text-[var(--brand-foreground)]">
          Beliebt
        </div>
      )}
      <div className={sizeCompact ? "mb-2" : sizeMedium ? "mb-2.5" : "mb-3"}>
        <h2
          className={`font-primary font-extralight tracking-[-0.03em] text-[var(--foreground)] ${
            sizeCompact ? "text-[36px]" : sizeMedium ? "text-[40px]" : "text-[48px]"
          }`}
        >
          {planName}
        </h2>
        <p
          className={`font-sans text-[var(--steel-graphite)] ${
            sizeCompact ? "mt-0.5 text-[15px]" : sizeMedium ? "mt-1 text-[15px]" : "mt-1 text-[16px]"
          }`}
        >
          {description}
        </p>
      </div>
      <div
        className={`flex items-baseline gap-2 ${
          sizeCompact ? "my-4" : sizeMedium ? "my-5" : "my-6"
        }`}
      >
        <span
          className={`font-primary font-extralight text-[var(--foreground)] ${
            sizeCompact ? "text-[36px]" : sizeMedium ? "text-[40px]" : "text-[48px]"
          }`}
        >
          {price}
        </span>
        <span className="font-sans text-[14px] text-[var(--steel-graphite)]">{priceSuffix}</span>
      </div>
      <div
        className={`h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)] ${
          sizeCompact ? "mb-4" : sizeMedium ? "mb-4" : "mb-5"
        }`}
      />
      <ul
        className={`flex flex-col gap-2 font-sans text-[14px] text-[var(--foreground)]/90 ${
          sizeCompact ? "mb-4" : sizeMedium ? "mb-5" : "mb-6"
        }`}
      >
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 shrink-0 text-[var(--brand-accent-soft)]" /> {feature}
          </li>
        ))}
      </ul>
      <div className={`flex gap-2 ${secondaryButtonText && secondaryButtonHref ? "flex-row" : ""}`}>
        {href ? (
          isShinyCta ? (
            <ShinyLink
              href={href}
              className={`mt-auto w-full py-2.5 rounded-xl text-[14px] font-semibold ${secondaryButtonText && secondaryButtonHref ? "flex-1 min-w-0" : "w-full"}`}
            >
              {buttonText}
            </ShinyLink>
          ) : (
            <Link
              href={href}
              className={`${buttonClasses.trim()} flex flex-1 min-w-0 items-center justify-center ${secondaryButtonText && secondaryButtonHref ? "" : "w-full"}`}
            >
              {buttonText}
            </Link>
          )
        ) : (
          <RippleButton className={`${buttonClasses.trim()} ${secondaryButtonText && secondaryButtonHref ? "flex-1 min-w-0" : "w-full"}`}>
            {buttonText}
          </RippleButton>
        )}
        {secondaryButtonText && secondaryButtonHref && (
          <Link
            href={secondaryButtonHref}
            className="flex flex-1 min-w-0 items-center justify-center rounded-xl border-2 border-[var(--brand-accent)] bg-transparent py-2.5 font-sans text-[14px] font-semibold text-[var(--brand-accent)] transition hover:bg-[var(--brand-accent-muted)]"
          >
            {secondaryButtonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export interface ModernPricingPageProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  plans: PricingCardProps[];
  showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
  showAnimatedBackground = true,
}: ModernPricingPageProps) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      {showAnimatedBackground && <ShaderCanvas />}
      <main className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-8">
        <div className="mx-auto mb-14 w-full max-w-5xl text-center">
          <h1 className="font-primary text-[48px] font-extralight leading-tight tracking-[-0.03em] md:text-[64px]">
            {title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-[16px] text-[var(--foreground)]/80 md:text-[20px]">
            {subtitle}
          </p>
        </div>
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 md:flex-row md:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
};
