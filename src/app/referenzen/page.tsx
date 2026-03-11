import Link from "next/link";
import Image from "next/image";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { StaggeredReveal, StaggeredRevealItem } from "@/components/StaggeredReveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const REFERENZEN: Array<{
  slug: string;
  title: string;
  kurzbeschreibung: string;
  branche: string;
  leistung: string;
  technologie: string;
  image: string | string[] | null;
}> = [
  {
    slug: "innovation-mvp",
    title: "Push – Fitness & Accountability App",
    kurzbeschreibung: "Fitness-App der nächsten Generation: Accountability, Gamification und AI-Optimierung – von der Strategie bis zum MVP.",
    branche: "Fitness / Health Tech",
    leistung: "Web- und Mobile-App-Entwicklung",
    technologie: "Vercel, Supabase, Health-API",
    image: [
      "/images/referenzen/push-ui-screens-1.png",
      "/images/referenzen/push-ui-challenges.png",
    ],
  },
  {
    slug: "zahnaerzte-am-inn",
    title: "Zahnärzte am Inn – Petri & Kollegen",
    kurzbeschreibung: "Moderne Praxis-Website für zwei Standorte (Mühldorf, Töging). Fokus auf Vertrauen, Leistungen, Kontakt. Responsiv, SEO, DSGVO-konform.",
    branche: "Medizin / Zahnarztpraxis",
    leistung: "Webdesign, Content-Struktur, Kontaktformular",
    technologie: "Next.js, TypeScript, Tailwind, Resend, Vercel",
    image: "/images/referenzen/zai_hero.png",
  },
];

export const metadata = {
  title: "Referenzen – BonS-AI",
  description: "Ausgewählte Projekte: Webdesign, KI-Systeme & Automatisierung, Web- und Mobile-Apps, Paid Ads.",
};

export default function ReferenzenPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <FadeInOnScroll>
          <h1 className="font-primary text-3xl font-bold tracking-tight text-[var(--deep-carbon)] md:text-4xl">
            <span className="border-b-2 border-[var(--brand-accent)]">Referenzen</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--steel-graphite)]">
            Ausgewählte Projekte – von Webdesign über KI-Systeme & Apps bis Paid Ads. Filterbar nach Branche und Leistung.
          </p>
        </FadeInOnScroll>

        <StaggeredReveal className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0} childDelay={0.08}>
          {REFERENZEN.map((ref) => (
            <StaggeredRevealItem key={ref.slug} className="flex">
              <Link
                href={`/referenzen/${ref.slug}`}
                className="group block h-full w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                  <Card variant="glass" className="h-full overflow-hidden transition-shadow duration-300 group-hover:shadow-glow">
                    <div className={`aspect-video w-full overflow-hidden ${ref.image ? "" : "bg-[var(--light-industrial)]"}`}>
                      {ref.image ? (
                        Array.isArray(ref.image) ? (
                          <div className="grid h-full w-full grid-cols-2 gap-px">
                            {ref.image.map((src, i) => (
                              <div key={i} className="relative h-full min-h-0 w-full overflow-hidden">
                                <Image
                                  src={src}
                                  alt=""
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16.5vw"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="h-full w-full overflow-hidden">
                            <Image
                              src={ref.image}
                              alt=""
                              width={640}
                              height={360}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        )
                      ) : null}
                    </div>
                    <CardHeader>
                      <CardTitle className="font-primary text-[var(--deep-carbon)]">{ref.title}</CardTitle>
                      <CardDescription className="text-[var(--steel-graphite)]">{ref.kurzbeschreibung}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {ref.branche} · {ref.leistung} · {ref.technologie}
                      </p>
                      <span className="mt-4 inline-block text-sm font-medium text-[var(--brand-accent)]">Case Study ansehen →</span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredRevealItem>
            ))}
        </StaggeredReveal>
      </div>
    </main>
  );
}
