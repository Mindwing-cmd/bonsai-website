import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  projectType?: string;
  source?: string;
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "schwingerb@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM ?? "onboarding@resend.dev";
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, number[]>();

function clientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unbekannt";
  return req.headers.get("x-real-ip")?.trim() || "unbekannt";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    hits.forEach((times, key) => {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) hits.delete(key);
    });
  }
  return false;
}

function isValidEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value);
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as ContactPayload;
    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const message = payload.message?.trim() ?? "";
    const company = payload.company?.trim() || "-";
    const projectType = payload.projectType?.trim() || "-";
    const source = payload.source?.trim() || "Website";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Bitte eine gültige E-Mail-Adresse eingeben." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Bitte schreiben Sie mindestens 10 Zeichen." },
        { status: 400 }
      );
    }
    if (isRateLimited(clientIp(req))) {
      return NextResponse.json(
        { ok: false, error: "Zu viele Anfragen. Bitte versuchen Sie es in einer Stunde erneut." },
        { status: 429, headers: { "Retry-After": "3600" } }
      );
    }

    const apiKey = process.env.RESEND_API_KEY ?? process.env.API_BONSAI;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Der Versand ist gerade nicht eingerichtet. Bitte schreiben Sie uns per E-Mail." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const subject =
      source === "Kontaktseite"
        ? `Neue Kontaktanfrage von ${name}`
        : `Neue Startseiten-Anfrage von ${name}`;

    const lines = [
      `Quelle: ${source}`,
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Unternehmen: ${company}`,
      `Projekttyp: ${projectType}`,
      "",
      "Nachricht:",
      message,
    ];

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "E-Mail konnte nicht versendet werden." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }
}
