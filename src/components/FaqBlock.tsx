export function FaqBlock({ items }: { items?: { q: string; a: string }[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-primary text-2xl font-bold text-[var(--foreground)]">
        Häufige Fragen
      </h2>
      <div className="mt-8 space-y-8">
        {items.map((item) => (
          <article key={item.q}>
            <h3 className="font-primary text-lg font-semibold text-[var(--foreground)]">{item.q}</h3>
            <p className="mt-2 text-[var(--steel-graphite)]">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
