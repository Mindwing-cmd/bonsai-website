/**
 * Zentrale rechtliche und Unternehmensangaben für Impressum, Datenschutz und Schema.
 */
export const LEGAL = {
  /** Marke / Website-Name */
  companyName: "BonS-AI",
  /** Anbieter (natürliche Person / Inhaber) */
  anbieter: "Bastian Schwinger",
  strasse: "Nelkenweg 6",
  postalCode: "99326",
  city: "Stadtilm",
  /** PLZ und Ort (Anzeige) */
  plzOrt: "99326 Stadtilm",
  /** Vollständige Anschrift für Fließtext (Datenschutz) */
  anschrift: "Nelkenweg 6, 99326 Stadtilm",
  /** Umsatzsteuer-ID – leer lassen, wenn nicht vorhanden */
  ustIdNr: "" as string,
  /** Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV / § 5 TMG */
  verantwortlich: "Bastian Schwinger, Nelkenweg 6, 99326 Stadtilm",
  email: "bonsai.schwinger@gmail.com",
  /** Anzeige im Impressum */
  telefon: "015156197764",
  /** Für tel:-Links und strukturierte Daten (E.164) */
  telefonInternational: "+4915156197764",
  region: "Thüringen",
  datenschutzAufsicht: {
    name: "Thüringer Landesbeauftragter für den Datenschutz und die Informationsfreiheit",
    url: "https://datenschutz.thueringen.de/",
  },
} as const;
