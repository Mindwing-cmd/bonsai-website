export const PROJEKT_WEBSITES = {
  "innovation-mvp": {
    href: "https://push-waitlist.vercel.app",
    label: "push-waitlist.vercel.app",
  },
  "zahnaerzte-am-inn": {
    href: "https://www.zahnaerzte-am-inn.de",
    label: "zahnaerzte-am-inn.de",
  },
  "lindora-home": {
    href: "https://www.lindora-home.de",
    label: "lindora-home.de",
  },
  "naturverbunden-jena": {
    href: "https://www.naturverbunden-jena.de",
    label: "naturverbunden-jena.de",
  },
} as const;

export type ProjektSlug = keyof typeof PROJEKT_WEBSITES;
