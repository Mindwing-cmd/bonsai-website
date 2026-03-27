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

    const apiKey = process.env.RESEND_API_KEY ?? process.env.API_BONSAI;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY oder API_BONSAI fehlt auf dem Server." },
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
