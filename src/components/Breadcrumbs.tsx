import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Brotkrumen" className="text-sm text-[var(--steel-graphite)]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--brand-accent)]">
                {item.name}
              </Link>
            ) : (
              <span className="text-[var(--foreground)]">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
