"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SynapseBackground } from "@/components/ui/synapse-background";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const contactMethods = [
  {
    icon: Mail,
    title: "E-Mail",
    description: "Schreiben Sie uns",
    value: "bonsai.schwinger@gmail.com",
    link: "mailto:bonsai.schwinger@gmail.com",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "Nach Erstkontakt",
    value: "+49 1515 6197764",
    link: "tel:+4915156197764",
  },
  {
    icon: MapPin,
    title: "Standort",
    description: "Ihre Region – wir sind digital für Sie da",
    value: "Deutschland",
    link: "#",
  },
];

const companyStats = [
  { label: "Antwortzeit", value: "< 24 h", icon: Clock, animateNumber: true, numberValue: 24, prefix: "< ", suffix: " h" },
  { label: "Projekte", value: "15", icon: Briefcase, animateNumber: true, numberValue: 15 },
  { label: "Sicherheit", value: "DSGVO konform", icon: Shield },
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name ist erforderlich";
    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Bitte gültige E-Mail eingeben";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mindestens 10 Zeichen";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
          <motion.h2
            className="font-primary text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            variants={fadeInUp}
          >
            <span className="border-b-2 border-[var(--brand-accent)]">Schreiben</span> Sie uns
          </motion.h2>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Projekt im Kopf? Wir melden uns zeitnah – in der Regel innerhalb von 24 Stunden.
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
          {/* Formular */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div>
              <h3 className="font-primary text-2xl font-bold text-[var(--foreground)] mb-2">Nachricht senden</h3>
              <p className="text-white/60">Erzählen Sie uns von Ihrem Vorhaben – wir antworten schnell.</p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="text"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={cn(
                          "w-full pl-10 pr-4 py-4 rounded-xl border-2 bg-white/[0.08] text-[var(--foreground)] placeholder-white/40 focus:outline-none transition-colors",
                          errors.name ? "border-red-500/70" : "border-white/[0.15] focus:border-[var(--brand-accent)]"
                        )}
                      />
                      {errors.name && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="email"
                        placeholder="E-Mail *"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={cn(
                          "w-full pl-10 pr-4 py-4 rounded-xl border-2 bg-white/[0.08] text-[var(--foreground)] placeholder-white/40 focus:outline-none transition-colors",
                          errors.email ? "border-red-500/70" : "border-white/[0.15] focus:border-[var(--brand-accent)]"
                        )}
                      />
                      {errors.email && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      type="text"
                      placeholder="Unternehmen (optional)"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-white/[0.15] bg-white/[0.08] text-[var(--foreground)] placeholder-white/40 focus:outline-none focus:border-[var(--brand-accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange("projectType", e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border-2 border-white/[0.15] bg-white/[0.08] text-[var(--foreground)] focus:outline-none focus:border-[var(--brand-accent)] transition-colors"
                    >
                      <option value="">Projekttyp (optional)</option>
                      <option value="webdesign">Webdesign</option>
                      <option value="ki-systeme">KI-Systeme & Automatisierung</option>
                      <option value="innovation">Web- und Mobile-App-Entwicklung</option>
                      <option value="paid-ads">Paid Ads</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-white/40" />
                    <textarea
                      placeholder="Ihre Nachricht *"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={cn(
                        "w-full pl-10 pr-4 py-4 rounded-xl border-2 bg-white/[0.08] text-[var(--foreground)] placeholder-white/40 focus:outline-none resize-none transition-colors",
                        errors.message ? "border-red-500/70" : "border-white/[0.15] focus:border-[var(--brand-accent)]"
                      )}
                    />
                    {errors.message && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl border-2 border-transparent bg-[var(--brand-accent)] text-[var(--brand-foreground)] font-medium transition-all hover:opacity-95 disabled:opacity-50"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-[var(--brand-foreground)]/30 border-t-[var(--brand-foreground)] rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Nachricht senden
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center rounded-2xl border border-white/[0.15] bg-white/[0.05] backdrop-blur-xl"
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl border border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/20 flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-8 h-8 text-[var(--brand-accent)]" />
                  </motion.div>
                  <h3 className="font-primary text-xl font-bold text-[var(--foreground)] mb-2">Nachricht gesendet</h3>
                  <p className="text-[var(--steel-graphite)] mb-6">
                    Vielen Dank. Wir melden uns in Kürze bei Ihnen.
                  </p>
                  <motion.button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "", projectType: "" });
                    }}
                    className="px-5 py-2.5 rounded-xl border border-white/[0.15] bg-white/[0.08] text-[var(--foreground)] hover:bg-white/[0.12] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Weitere Nachricht senden
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
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
                      <p className="text-[var(--foreground)] font-medium truncate">{method.value}</p>
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
