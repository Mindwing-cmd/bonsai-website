"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

const PROJECT_TYPES = [
  { value: "webdesign", label: "Webdesign" },
  { value: "ki-systeme", label: "KI-Systeme & Automatisierung" },
  { value: "innovation", label: "Web- und Mobile-App-Entwicklung" },
  { value: "paid-ads", label: "Paid Ads" },
  { value: "sonstiges", label: "Sonstiges" },
] as const;

const STEPS = [
  {
    id: "name",
    short: "Name",
    title: "Wie dürfen wir Sie ansprechen?",
    hint: "Vor- und Nachname reichen.",
  },
  {
    id: "email",
    short: "E-Mail",
    title: "Wohin dürfen wir antworten?",
    hint: "Wir melden uns in der Regel innerhalb von 24 Stunden.",
  },
  {
    id: "company",
    short: "Unternehmen",
    title: "Für welches Unternehmen schreiben Sie?",
    hint: "Optional. Diesen Schritt können Sie überspringen.",
  },
  {
    id: "project",
    short: "Anliegen",
    title: "Worum geht es?",
    hint: "Optional. Wählen Sie einen Bereich oder gehen Sie weiter.",
  },
  {
    id: "message",
    short: "Nachricht",
    title: "Was sollen wir wissen?",
    hint: "Mindestens 10 Zeichen. Ziel, Zeitrahmen oder offene Fragen helfen uns weiter.",
  },
  {
    id: "review",
    short: "Prüfen",
    title: "Passt alles?",
    hint: "Prüfen Sie die Angaben. Danach senden wir die Anfrage.",
  },
] as const;

type StepId = (typeof STEPS)[number]["id"];

function isValidEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value);
}

function projectLabel(value: string) {
  return PROJECT_TYPES.find((item) => item.value === value)?.label ?? "";
}

function validateStep(stepId: StepId, form: FormState) {
  if (stepId === "name" && !form.name.trim()) {
    return "Bitte geben Sie Ihren Namen an.";
  }
  if (stepId === "email") {
    if (!form.email.trim()) return "Bitte geben Sie Ihre E-Mail an.";
    if (!isValidEmail(form.email.trim())) return "Bitte geben Sie eine gültige E-Mail an.";
  }
  if (stepId === "message") {
    if (!form.message.trim()) return "Bitte schreiben Sie eine kurze Nachricht.";
    if (form.message.trim().length < 10) return "Bitte schreiben Sie mindestens 10 Zeichen.";
  }
  return "";
}

const fieldClass =
  "w-full min-h-11 scroll-mt-28 rounded-xl border-2 bg-white/[0.08] px-4 py-3 text-base text-[var(--foreground)] placeholder:text-white/40 focus:border-[var(--brand-accent)] focus:outline-none";

export function ContactStepForm() {
  const uid = useId();
  const reduceMotion = usePrefersReducedMotion();
  const shouldFocus = useRef(false);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const current = STEPS[step];
  const titleId = `${uid}-title`;
  const hintId = `${uid}-hint`;
  const errorId = `${uid}-error`;
  const fieldId = `${uid}-field`;

  const focusStep = () => {
    const form = document.querySelector('form[aria-label="Kontaktanfrage"]');
    const heading = form?.querySelector("h3");
    const target = form?.querySelector<HTMLElement>("[data-autofocus]");
    if (!heading || !target || heading.textContent?.trim() !== STEPS[step].title) return false;
    heading.scrollIntoView({ block: "start", behavior: "auto" });
    target.focus({ preventScroll: true });
    return document.activeElement === target;
  };

  const focusCurrent = () => {
    focusStep();
  };

  const goTo = (index: number) => {
    if (index < 0 || index >= STEPS.length || index === step || isSubmitting) return;
    shouldFocus.current = true;
    setError("");
    setSubmitError("");
    setDirection(index > step ? 1 : -1);
    setStep(index);
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const submit = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          projectType: form.projectType,
          message: form.message,
          source: "Kontaktseite",
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setSubmitError(data.error ?? "Versand fehlgeschlagen. Bitte später erneut versuchen.");
        return;
      }
      setIsSubmitted(true);
    } catch {
      setSubmitError("Netzwerkfehler. Bitte Verbindung prüfen und erneut versuchen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    const message = validateStep(current.id, form);
    if (message) {
      setError(message);
      focusCurrent();
      return;
    }
    setError("");
    if (step < STEPS.length - 1) {
      goTo(step + 1);
      return;
    }
    void submit();
  };

  const optionalEmpty =
    (current.id === "company" && !form.company.trim()) ||
    (current.id === "project" && !form.projectType);

  const primaryLabel = current.id === "review"
    ? isSubmitting
      ? "Wird gesendet …"
      : "Nachricht senden"
    : optionalEmpty
      ? "Überspringen"
      : "Weiter";

  const variants = reduceMotion
    ? {
        enter: { opacity: 1, y: 0 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 0 },
      }
    : {
        enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 14 : -14 }),
        center: { opacity: 1, y: 0 },
        exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -14 : 14 }),
      };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border-2 border-[var(--light-industrial)] bg-white/[0.05] px-6 py-12 text-center backdrop-blur-xl md:px-8"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/20">
          <CheckCircle className="h-8 w-8 text-[var(--brand-accent)]" aria-hidden />
        </div>
        <h3 className="font-primary text-2xl font-bold text-[var(--foreground)]">Nachricht gesendet</h3>
        <p className="mt-2 text-[var(--steel-graphite)]">Vielen Dank. Wir melden uns in Kürze bei Ihnen.</p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setForm(EMPTY_FORM);
            setStep(0);
            setDirection(-1);
            setError("");
            setSubmitError("");
          }}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[var(--light-industrial)] px-5 py-3 text-base text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)]"
        >
          Weitere Nachricht senden
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleNext}
      noValidate
      aria-label="Kontaktanfrage"
      aria-busy={isSubmitting}
      className="rounded-xl border-2 border-[var(--light-industrial)] bg-white/[0.05] p-6 backdrop-blur-xl md:p-8"
    >
      <p className="sr-only" aria-live="polite">
        Schritt {step + 1} von {STEPS.length}: {current.title}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-white/70">
        Die Angaben verwenden wir zur Bearbeitung Ihrer Anfrage. Mehr dazu in der{" "}
        <Link href="/datenschutz" className="text-[var(--brand-accent)] underline underline-offset-2">
          Datenschutzerklärung
        </Link>
        .
      </p>

      <div className="relative min-h-[18rem]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: [0.23, 0.86, 0.39, 0.96] }}
            onAnimationComplete={(definition) => {
              if (definition !== "center" || !shouldFocus.current) return;
              let frames = 0;
              const tryFocus = () => {
                if (!shouldFocus.current) return;
                if (focusStep()) {
                  shouldFocus.current = false;
                  return;
                }
                frames += 1;
                if (frames < 24) requestAnimationFrame(tryFocus);
              };
              tryFocus();
            }}
          >
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between gap-3 text-sm">
                <p className="text-white/70">
                  Schritt {step + 1} von {STEPS.length}
                </p>
                <p className="font-medium text-[var(--brand-accent)]">{current.short}</p>
              </div>
              <div
                className="grid grid-cols-6 gap-1.5"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={STEPS.length}
                aria-valuenow={step + 1}
                aria-valuetext={`Schritt ${step + 1} von ${STEPS.length}: ${current.short}`}
                aria-label="Fortschritt der Anfrage"
              >
                {STEPS.map((item, index) => (
                  <span
                    key={item.id}
                    aria-hidden
                    className={cn(
                      "h-1.5 rounded-full",
                      index <= step ? "bg-[var(--brand-accent)]" : "bg-white/15"
                    )}
                  />
                ))}
              </div>
            </div>
            {current.id === "name" && (
              <FieldStep
                titleId={titleId}
                hintId={hintId}
                errorId={errorId}
                fieldId={fieldId}
                title={current.title}
                hint={current.hint}
                error={error}
              >
                <input
                  id={fieldId}
                  data-autofocus
                  type="text"
                  name="name"
                  autoComplete="name"
                  autoCapitalize="words"
                  enterKeyHint="next"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Vor- und Nachname"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${hintId} ${errorId}` : hintId}
                  className={cn(fieldClass, error ? "border-red-500/70" : "border-white/[0.15]")}
                />
              </FieldStep>
            )}

            {current.id === "email" && (
              <FieldStep
                titleId={titleId}
                hintId={hintId}
                errorId={errorId}
                fieldId={fieldId}
                title={current.title}
                hint={current.hint}
                error={error}
              >
                <input
                  id={fieldId}
                  data-autofocus
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoCapitalize="off"
                  inputMode="email"
                  enterKeyHint="next"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="name@unternehmen.de"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${hintId} ${errorId}` : hintId}
                  className={cn(fieldClass, error ? "border-red-500/70" : "border-white/[0.15]")}
                />
              </FieldStep>
            )}

            {current.id === "company" && (
              <FieldStep
                titleId={titleId}
                hintId={hintId}
                errorId={errorId}
                fieldId={fieldId}
                title={current.title}
                hint={current.hint}
                error={error}
              >
                <input
                  id={fieldId}
                  data-autofocus
                  type="text"
                  name="organization"
                  autoComplete="organization"
                  autoCapitalize="words"
                  enterKeyHint="next"
                  value={form.company}
                  onChange={(event) => update("company", event.target.value)}
                  placeholder="Unternehmen"
                  aria-describedby={hintId}
                  className={cn(fieldClass, "border-white/[0.15]")}
                />
              </FieldStep>
            )}

            {current.id === "project" && (
              <div>
                <h3
                  id={titleId}
                  className="scroll-mt-28 font-primary text-2xl font-bold tracking-tight text-balance text-[var(--foreground)] md:text-3xl"
                >
                  {current.title}
                </h3>
                <p id={hintId} className="mt-2 text-sm leading-relaxed text-white/60">
                  {current.hint}
                </p>
                <div
                  role="radiogroup"
                  aria-labelledby={titleId}
                  aria-describedby={hintId}
                  className="mt-6 grid gap-2"
                  onKeyDown={(event) => {
                    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
                    const backward = event.key === "ArrowUp" || event.key === "ArrowLeft";
                    if (!forward && !backward) return;
                    event.preventDefault();
                    const currentIndex = PROJECT_TYPES.findIndex((item) => item.value === form.projectType);
                    const nextIndex =
                      currentIndex < 0
                        ? forward
                          ? 0
                          : PROJECT_TYPES.length - 1
                        : (currentIndex + (forward ? 1 : -1) + PROJECT_TYPES.length) % PROJECT_TYPES.length;
                    const next = PROJECT_TYPES[nextIndex];
                    update("projectType", next.value);
                    requestAnimationFrame(() => {
                      document.getElementById(`${uid}-project-${next.value}`)?.focus();
                    });
                  }}
                >
                  {PROJECT_TYPES.map((item, index) => {
                    const selected = form.projectType === item.value;
                    const tabbable = form.projectType ? selected : index === 0;
                    return (
                      <button
                        key={item.value}
                        id={`${uid}-project-${item.value}`}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        tabIndex={tabbable ? 0 : -1}
                        data-autofocus={tabbable ? true : undefined}
                        onClick={() => update("projectType", selected ? "" : item.value)}
                        className={cn(
                          "min-h-11 scroll-mt-28 rounded-xl border-2 px-4 py-3 text-left text-base transition-colors",
                          selected
                            ? "border-[var(--brand-accent)] bg-[var(--brand-accent)]/15 text-[var(--foreground)] shadow-glow"
                            : "border-white/[0.15] bg-white/[0.04] text-[var(--foreground)] hover:border-[var(--brand-accent)]"
                        )}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {current.id === "message" && (
              <FieldStep
                titleId={titleId}
                hintId={hintId}
                errorId={errorId}
                fieldId={fieldId}
                title={current.title}
                hint={current.hint}
                error={error}
              >
                <textarea
                  id={fieldId}
                  data-autofocus
                  name="message"
                  rows={6}
                  enterKeyHint="next"
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Worum geht es, und bis wann soll es stehen?"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${hintId} ${errorId}` : hintId}
                  className={cn(
                    fieldClass,
                    "resize-y",
                    error ? "border-red-500/70" : "border-white/[0.15]"
                  )}
                />
                <p className="mt-2 text-right text-xs text-white/45" aria-hidden>
                  {form.message.trim().length} Zeichen
                </p>
              </FieldStep>
            )}

            {current.id === "review" && (
              <div>
                <h3
                  id={titleId}
                  tabIndex={-1}
                  data-autofocus
                  className="scroll-mt-28 font-primary text-2xl font-bold tracking-tight text-balance text-[var(--foreground)] outline-none md:text-3xl"
                >
                  {current.title}
                </h3>
                <p id={hintId} className="mt-2 text-sm leading-relaxed text-white/60">
                  {current.hint}
                </p>
                <ul className="mt-6 space-y-2">
                  <ReviewRow label="Name" value={form.name.trim()} onEdit={() => goTo(0)} />
                  <ReviewRow label="E-Mail" value={form.email.trim()} onEdit={() => goTo(1)} />
                  <ReviewRow
                    label="Unternehmen"
                    value={form.company.trim() || "Nicht angegeben"}
                    onEdit={() => goTo(2)}
                  />
                  <ReviewRow
                    label="Anliegen"
                    value={projectLabel(form.projectType) || "Nicht angegeben"}
                    onEdit={() => goTo(3)}
                  />
                  <ReviewRow label="Nachricht" value={form.message.trim()} onEdit={() => goTo(4)} />
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Die Angaben verwenden wir zur Bearbeitung Ihrer Anfrage. Mehr dazu in der{" "}
                  <Link href="/datenschutz" className="text-[var(--brand-accent)] underline underline-offset-2">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => goTo(step - 1)}
                  disabled={isSubmitting}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[var(--light-industrial)] px-4 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:border-[var(--brand-accent)] disabled:opacity-50 sm:flex-none sm:px-5"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Zurück
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-transparent bg-[var(--brand-accent)] px-5 py-3 text-base font-medium text-[var(--brand-foreground)] transition-all hover:shadow-glow disabled:opacity-50"
              >
                {isSubmitting && (
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none"
                    aria-hidden
                  />
                )}
                {current.id === "review" && !isSubmitting && <Send className="h-4 w-4" aria-hidden />}
                {primaryLabel}
                {current.id !== "review" && <ArrowRight className="h-4 w-4" aria-hidden />}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {submitError && (
        <p role="alert" className="mt-3 text-sm text-red-400">
          {submitError}
        </p>
      )}
    </form>
  );
}

function FieldStep({
  titleId,
  hintId,
  errorId,
  fieldId,
  title,
  hint,
  error,
  children,
}: {
  titleId: string;
  hintId: string;
  errorId: string;
  fieldId: string;
  title: string;
  hint: string;
  error: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        id={titleId}
        className="scroll-mt-28 font-primary text-2xl font-bold tracking-tight text-balance text-[var(--foreground)] md:text-3xl"
      >
        <label htmlFor={fieldId}>{title}</label>
      </h3>
      <p id={hintId} className="mt-2 text-sm leading-relaxed text-white/60">
        {hint}
      </p>
      <div className="mt-6">{children}</div>
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function ReviewRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <li className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-white/45">{label}</p>
        <p className="mt-1 whitespace-pre-wrap break-words text-base text-[var(--foreground)]">{value}</p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="inline-flex min-h-11 shrink-0 items-center px-2 text-sm font-medium text-[var(--brand-accent)] hover:underline"
      >
        Ändern
      </button>
    </li>
  );
}
