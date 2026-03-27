import { PremiumContactSection } from "@/components/PremiumContactSection";

export const metadata = {
  title: "Kontakt – BonS-AI",
  description: "Kontakt aufnehmen – Webdesign & KI aus Thüringen. Projekt im Kopf? Schreiben Sie uns – wir melden uns zeitnah, in der Regel innerhalb von 24 Stunden.",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-24">
      <PremiumContactSection />
    </main>
  );
}
