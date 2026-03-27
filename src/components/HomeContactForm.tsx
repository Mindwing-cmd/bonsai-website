"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HomeContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Name angeben";
    if (!formData.email.trim()) next.email = "E-Mail angeben";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = "Gültige E-Mail angeben";
    if (!formData.message.trim()) next.message = "Nachricht angeben";
    else if (formData.message.trim().length < 10) next.message = "Mind. 10 Zeichen";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Startseite" }),
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

  const inputBase =
    "w-full rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--steel-graphite)]/70 focus:outline-none focus:border-[var(--brand-accent)] transition-colors";

  if (isSubmitted) {
    return (
      <div className="rounded-xl border-2 border-[var(--light-industrial)] bg-[var(--background)]/80 p-6 text-center">
        <p className="font-medium text-[var(--foreground)]">Nachricht gesendet.</p>
        <p className="mt-1 text-sm text-[var(--steel-graphite)]">Wir melden uns zeitnah.</p>
        <Link
          href="/kontakt"
          className="mt-4 inline-block text-sm font-medium text-[var(--brand-accent)] hover:underline"
        >
          Zur Kontaktseite →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      <div className="sm:col-span-2 md:col-span-1">
        <label htmlFor="home-contact-name" className="mb-1.5 block text-sm font-medium text-[var(--steel-graphite)]">
          Name
        </label>
        <input
          id="home-contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Ihr Name"
          className={cn(inputBase, errors.name && "border-red-500/70")}
          autoComplete="name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>
      <div className="sm:col-span-2 md:col-span-1">
        <label htmlFor="home-contact-email" className="mb-1.5 block text-sm font-medium text-[var(--steel-graphite)]">
          E-Mail
        </label>
        <input
          id="home-contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="ihre@email.de"
          className={cn(inputBase, errors.email && "border-red-500/70")}
          autoComplete="email"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="home-contact-message" className="mb-1.5 block text-sm font-medium text-[var(--steel-graphite)]">
          Nachricht
        </label>
        <textarea
          id="home-contact-message"
          rows={3}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Kurze Nachricht zu Ihrem Anliegen …"
          className={cn(inputBase, "resize-none", errors.message && "border-red-500/70")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-[44px] w-full rounded-xl border-2 border-[var(--brand-accent)] bg-[var(--brand-accent)] px-5 py-3 font-medium text-[var(--brand-foreground)] transition-all hover:opacity-95 hover:shadow-glow disabled:opacity-60"
        >
          {isSubmitting ? "Wird gesendet …" : "Nachricht senden"}
        </button>
        {submitError && <p className="mt-2 text-sm text-red-400">{submitError}</p>}
      </div>
    </form>
  );
}
