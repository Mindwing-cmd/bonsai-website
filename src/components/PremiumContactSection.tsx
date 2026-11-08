"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import { LEGAL } from "@/data/legal";
import { SynapseBackground } from "@/components/ui/synapse-background";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { ContactStepForm } from "@/components/ContactStepForm";

const contactMethods = [
  {
    icon: Mail,
    title: "E-Mail",
    description: "Schreiben Sie uns",
    value: LEGAL.email,
    link: `mailto:${LEGAL.email}`,
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "Nach Erstkontakt",
    value: LEGAL.telefon,
    link: `tel:${LEGAL.telefonInternational}`,
  },
  {
    icon: MapPin,
    title: "Standort",
    description: "Nelkenweg 6, 99326 Stadtilm",
    value: "Thüringen",
    link: "/impressum",
  },
];

const companyStats = [
  { label: "Antwortzeit", value: "< 24 h", icon: Clock, animateNumber: true, numberValue: 24, prefix: "< ", suffix: " h" },
  { label: "Standort", value: "Stadtilm", icon: MapPin },
  { label: "Sicherheit", value: "DSGVO-konform", icon: Shield },
  { label: "Umsetzung", value: "Messbar", icon: Zap },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 0.86, 0.39, 0.96] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

/** Zahl von 0 bis target mit Ladeanimation */
function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  duration = 1.2,
  delay = 0,
  className,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(prefix + "0" + suffix);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      delay,
      ease: [0.22, 0.61, 0.36, 1],
    });
    return controls.stop;
  }, [count, target, duration, delay]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(prefix + String(Math.round(v)) + suffix));
    return unsub;
  }, [rounded, prefix, suffix]);

  return <motion.span className={className}>{display}</motion.span>;
}

export function PremiumContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden text-[var(--foreground)] bg-gradient-to-br from-[var(--background)] via-[var(--background-alt)]/30 to-[var(--background)]">
      {/* Synapse-Hintergrund (Netzwerk-Optik) */}
      <SynapseBackground className="z-0" opacity={0.12} />
      {/* Weitere Hintergrund-Ebenen */}
      <div className="absolute inset-0 z-0">
        {/* Animierter Gradient-Mesh (BonS-AI Blau) */}
        <motion.div
          className="absolute inset-0 opacity-100"
          style={{
            background: `linear-gradient(135deg, rgba(56, 189, 248, 0.06) 0%, rgba(56, 189, 248, 0.03) 50%, rgba(56, 189, 248, 0.06) 100%)`,
            backgroundSize: "400% 400%",
          }}
          animate={
            reduceMotion
              ? undefined
              : { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Bewegende Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-[var(--brand-accent)]/15 rounded-full blur-3xl pointer-events-none"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[var(--brand-accent)]/12 rounded-full blur-3xl pointer-events-none"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Kommunikationslinien */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"
              style={{
                left: `${18 + i * 16}%`,
                top: `${20 + i * 10}%`,
                transform: `rotate(${25 + i * 18}deg)`,
              }}
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.15, 0.6, 0.15], scaleY: [1, 1.4, 1] }
              }
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-6xl px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16 md:mb-20" variants={fadeInUp}>
          <motion.h1
            className="font-primary text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            variants={fadeInUp}
          >
            Wie erreichen Sie <span className="border-b-2 border-[var(--brand-accent)]">BonS-AI</span>?
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-base text-white/70 md:text-lg"
            variants={fadeInUp}
          >
            BonS-AI erreichen Sie über {LEGAL.anbieter} in {LEGAL.city}, {LEGAL.region}, {LEGAL.strasse}, {LEGAL.plzOrt}.
            Schreiben Sie an {LEGAL.email} oder rufen Sie {LEGAL.telefon} an. Eine Rückmeldung kommt in der Regel
            innerhalb von 24 Stunden. Das Studio arbeitet für Unternehmen in Thüringen und darüber hinaus.
          </motion.p>
        </motion.div>

        {/* Stats – Karten wie im Referenz-Design */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-20"
          variants={fadeInUp}
        >
          {companyStats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-accent)]/20 to-[var(--brand-accent)]/10 border border-white/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-[var(--brand-accent)]" />
              </div>
              <div className="text-2xl font-bold text-[var(--foreground)] mb-1">{stat.label}</div>
              <div className="text-sm text-white/60">
                {"animateNumber" in stat && stat.animateNumber && stat.numberValue != null ? (
                  <AnimatedNumber
                    target={stat.numberValue}
                    prefix={"prefix" in stat ? stat.prefix : ""}
                    suffix={"suffix" in stat ? stat.suffix : ""}
                    duration={3}
                    delay={i * 0.15}
                  />
                ) : (
                  stat.value
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={fadeInUp}>
            <ContactStepForm />
          </motion.div>

          {/* Kontaktwege */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div>
              <h3 className="font-primary text-2xl font-bold text-[var(--foreground)] mb-2">Weitere Wege</h3>
              <p className="text-white/60">So erreichen Sie uns.</p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.link}
                  className="group block p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-accent)]/20 to-[var(--brand-accent)]/10 border border-white/20 flex items-center justify-center shrink-0">
                      <method.icon className="w-7 h-7 text-[var(--brand-accent)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-semibold text-[var(--foreground)] mb-1">{method.title}</h4>
                      <p className="text-white/60 text-sm mb-2">{method.description}</p>
                      <p className="text-[var(--foreground)] font-medium break-words">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 shrink-0 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-[var(--brand-accent)]/[0.08] to-[var(--brand-accent)]/[0.04] backdrop-blur-xl rounded-2xl border border-[var(--brand-accent)]/30">
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-3">Schnelle Antwort</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Wir antworten in der Regel innerhalb von 24 Stunden. Bei dringenden Anfragen melden wir uns oft noch am selben Tag.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
