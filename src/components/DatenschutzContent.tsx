import type { ReactNode } from "react";
import { LEGAL } from "@/data/legal";

const link = "text-[var(--brand-accent)] underline-offset-2 hover:underline";

/** Externe Links mit konsistentem Styling */
function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
      {children}
    </a>
  );
}

export function DatenschutzContent() {
  return (
    <div className="space-y-12 text-[var(--steel-graphite)]">
      <section className="space-y-6">
        <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">1. Datenschutz auf einen Blick</h2>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Allgemeine Hinweise</h3>
          <p className="leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Datenerfassung auf dieser Website</h3>

          <p className="font-medium text-[var(--foreground)]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
          <p className="leading-relaxed">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
            können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
          </p>

          <p className="font-medium text-[var(--foreground)]">Wie erfassen wir Ihre Daten?</p>
          <p className="leading-relaxed">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
            Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
            erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
            Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <p className="font-medium text-[var(--foreground)]">Wofür nutzen wir Ihre Daten?</p>
          <p className="leading-relaxed">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
            Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <p className="font-medium text-[var(--foreground)]">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
          <p className="leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
            bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Analyse-Tools und Tools von Drittanbietern</h3>
          <p className="leading-relaxed">
            Beim Besuch dieser Website kann Ihr Surfverhalten statistisch ausgewertet werden. Das geschieht vor
            allem mit sogenannten Analyseprogrammen.
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
            Datenschutzerklärung.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">2. Hosting</h2>
        <p className="leading-relaxed">
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>

        <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Externes Hosting</h3>
        <p className="leading-relaxed">
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
          Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
          und sonstige Daten, die über eine Website generiert werden, handeln.
        </p>
        <p className="leading-relaxed">
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
          bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
          von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
          Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="leading-relaxed">
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
          Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
        </p>
        <p className="leading-relaxed">
          <strong className="text-[var(--foreground)]">Wir setzen folgenden Hoster ein:</strong>
        </p>
        <p className="leading-relaxed">
          <strong className="text-[var(--foreground)]">Vercel Inc.</strong>, USA
          <br />
          Website: <ExtLink href="https://vercel.com">vercel.com</ExtLink> – Datenschutz:{" "}
          <ExtLink href="https://vercel.com/legal/privacy-policy">vercel.com/legal/privacy-policy</ExtLink>
        </p>

        <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Auftragsverarbeitung</h3>
        <p className="leading-relaxed">
          Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
          geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
          gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
          Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Datenschutz</h3>
          <p className="leading-relaxed">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
            dieser Datenschutzerklärung.
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
            und zu welchem Zweck das geschieht.
          </p>
          <p className="leading-relaxed">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Hinweis zur verantwortlichen Stelle</h3>
          <p className="leading-relaxed">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="leading-relaxed text-[var(--foreground)]">
            {LEGAL.companyName} / {LEGAL.anbieter}
            <br />
            {LEGAL.strasse}
            <br />
            {LEGAL.plzOrt}
            <br />
            Telefon:{" "}
            <a href={`tel:${LEGAL.telefonInternational}`} className={link}>
              {LEGAL.telefon}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${LEGAL.email}`} className={link}>
              {LEGAL.email}
            </a>
          </p>
          <p className="leading-relaxed">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
            die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
            entscheidet.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Speicherdauer</h3>
          <p className="leading-relaxed">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
            personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
          </h3>
          <p className="leading-relaxed">
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
            Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
            nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
            personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
            49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
            Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
            auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
            Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
            Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
            zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
            Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
            DSGVO erfolgen. Über die im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
            Absätzen dieser Datenschutzerklärung informiert.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">
            Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere Drittstaaten sowie
            die Weitergabe an US-Unternehmen, die nicht DPF-zertifiziert sind
          </h3>
          <p className="leading-relaxed">
            Wir verwenden unter anderem Tools von Unternehmen mit Sitz in datenschutzrechtlich nicht sicheren
            Drittstaaten sowie US-Tools, deren Anbieter nicht nach dem EU-US-Data-Privacy-Framework (DPF)
            zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre personenbezogenen Daten in diese Staaten
            übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in datenschutzrechtlich unsicheren
            Drittstaaten kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
            Wir weisen darauf hin, dass die USA als sicherer Drittstaat grundsätzlich ein mit der EU vergleichbares
            Datenschutzniveau aufweisen. Eine Datenübertragung in die USA ist danach zulässig, wenn der Empfänger
            eine Zertifizierung unter dem „EU-US Data Privacy Framework“ (DPF) besitzt oder über geeignete
            zusätzliche Garantien verfügt. Informationen zu Übermittlungen an Drittstaaten einschließlich der
            Datenempfänger finden Sie in dieser Datenschutzerklärung.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Empfänger von personenbezogenen Daten</h3>
          <p className="leading-relaxed">
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
            ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
            Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
            Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
            an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
            haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
            Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
            Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
            gemeinsame Verarbeitung geschlossen.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="leading-relaxed">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
          </h3>
          <p className="leading-relaxed">
            Sofern die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
            jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung
            Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
            gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
            dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen
            Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
            nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
          </p>
          <p className="leading-relaxed">
            Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht,
            jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke
            derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
            Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr
            zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p className="leading-relaxed">
            Im Falle von Verstößen gegen die DSGVO steht dem Betroffenen ein Beschwerderecht bei einer
            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
            verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>
          <p className="leading-relaxed">
            Zuständig für Thüringen ist der{" "}
            <a href={LEGAL.datenschutzAufsicht.url} target="_blank" rel="noopener noreferrer" className={link}>
              {LEGAL.datenschutzAufsicht.name}
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Recht auf Datenübertragbarkeit</h3>
          <p className="leading-relaxed">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Auskunft, Berichtigung und Löschung</h3>
          <p className="leading-relaxed">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
            Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
            Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
            zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Recht auf Einschränkung der Verarbeitung</h3>
          <p className="leading-relaxed">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
            folgenden Fällen:
          </p>
          <ul className="list-disc space-y-1 pl-6 leading-relaxed">
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
              in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
              statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
              Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
              Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
              Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
              überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </li>
          </ul>
          <p className="leading-relaxed">
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
            ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
            juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
            eines Mitgliedstaats verarbeitet werden.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">SSL- bzw. TLS-Verschlüsselung</h3>
          <p className="leading-relaxed">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
            Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
            „http://“ auf „https://“ wechselt und an das Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
            TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
            von Dritten mitgelesen werden.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">4. Datenerfassung auf dieser Website</h2>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Cookies</h3>
          <p className="leading-relaxed">
            Unsere Internetseiten verwenden sogenannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
            Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
            werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
            gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-
            Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
            Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className="leading-relaxed">
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
            Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
            von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken
            verwendet werden.
          </p>
          <p className="leading-relaxed">
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs zur Bereitstellung
            bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der
            Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
            Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
            technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
            Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
            Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
            TTDSG); die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="leading-relaxed">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden,
            Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
            sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
            Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser
            Datenschutzerklärung entnehmen.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Kontaktformular</h3>
          <p className="leading-relaxed">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
            und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter.
          </p>
          <p className="leading-relaxed">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
            der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
            effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit
            widerrufbar. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
            (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
            insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p className="leading-relaxed">
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
            bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="leading-relaxed">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
            der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
            effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung ist jederzeit
            widerrufbar.
          </p>
          <p className="leading-relaxed">
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
            (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
            insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">5. Soziale Medien</h2>
        <p className="leading-relaxed text-sm text-[var(--steel-graphite)]">Die folgenden Hinweise gelten, sofern entsprechende Funktionen auf dieser Website eingebunden sind.</p>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">X (ehemals Twitter)</h3>
          <p className="leading-relaxed">
            Auf dieser Website können Funktionen des Dienstes X (ehemals Twitter) eingebunden sein. Diese Funktionen
            werden angeboten durch den Mutterkonzern X Corp., 1355 Market Street, Suite 900, San Francisco, CA
            94103, USA. Für die Datenverarbeitung von außerhalb der USA lebenden Personen ist die Niederlassung
            Twitter International Unlimited Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07,
            Irland, verantwortlich.
          </p>
          <p className="leading-relaxed">
            Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem X-Server
            hergestellt. X (ehemals Twitter) erhält dadurch Informationen über den Besuch dieser Website durch
            Sie. Durch das Benutzen von X (ehemals Twitter) und der Funktion „Re-Tweet“ bzw. „Repost“ werden die von
            Ihnen besuchten Websites mit Ihrem X (ehemals Twitter)-Account verknüpft und anderen Nutzern bekannt
            gegeben. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
            übermittelten Daten sowie deren Nutzung durch X (ehemals Twitter) erhalten. Weitere Informationen
            hierzu finden Sie in der Datenschutzerklärung von X (ehemals Twitter) unter:{" "}
            <ExtLink href="https://twitter.com/de/privacy">twitter.com/de/privacy</ExtLink>.
          </p>
          <p className="leading-relaxed">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §
            25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Die Datenübertragung in die USA wird auf die
            Standardvertragsklausel der EU-Kommission gestützt. Details finden Sie hier:{" "}
            <ExtLink href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html">gdpr.twitter.com</ExtLink>.
            Ihre Datenschutzeinstellungen bei X (ehemals Twitter) können Sie in den Konto-Einstellungen unter{" "}
            <ExtLink href="https://twitter.com/account/settings">twitter.com/account/settings</ExtLink> ändern.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Instagram</h3>
          <p className="leading-relaxed">
            Auf dieser Website können Funktionen des Dienstes Instagram eingebunden sein. Diese Funktionen werden
            angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
          </p>
          <p className="leading-relaxed">
            Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem
            Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website
            durch Sie.
            Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons
            die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser
            Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine
            Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
          </p>
          <p className="leading-relaxed">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §
            25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an
            Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand
            Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung
            verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich
            auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung
            erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung.
            Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame
            Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{" "}
            <ExtLink href="https://www.facebook.com/legal/controller_addendum">facebook.com/legal/controller_addendum</ExtLink>.
            Laut dieser Vereinbarung sind wir für die Erteilung
            der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die
            datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die
            Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte
            (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie
            direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir
            verpflichtet, diese an Facebook weiterzuleiten.
          </p>
          <p className="leading-relaxed">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
            Details finden Sie hier:{" "}
            <ExtLink href="https://www.facebook.com/legal/EU_data_transfer_addendum">EU Data Transfer Addendum</ExtLink>,{" "}
            <ExtLink href="https://privacycenter.instagram.com/policy/">privacycenter.instagram.com</ExtLink> und{" "}
            <ExtLink href="https://de-de.facebook.com/help/566994660333381">Facebook Help</ExtLink>.
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram:{" "}
            <ExtLink href="https://privacycenter.instagram.com/policy/">privacycenter.instagram.com/policy</ExtLink>.
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Weitere
            Informationen hierzu erhalten Sie vom Anbieter unter{" "}
            <ExtLink href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&amp;id=a2zt0000000GnywAAC&amp;status=Active">dataprivacyframework.gov</ExtLink>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">6. Newsletter</h2>
        <p className="leading-relaxed text-sm text-[var(--steel-graphite)]">Sofern wir einen Newsletter anbieten, gelten folgende Hinweise.</p>
        <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Newsletterdaten</h3>
        <p className="leading-relaxed">
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse
          sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere
          Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für
          den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter. Diese
          Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf
          Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
          Daten der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
          widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
          Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </p>
        <p className="leading-relaxed">
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
          Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
          Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir
          behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen
          unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
          Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.
        </p>
        <p className="leading-relaxed">
          Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
          Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger
          Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit
          anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der
          Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des
          Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-primary text-xl font-semibold text-[var(--deep-carbon)]">7. Plugins und Tools</h2>
        <p className="leading-relaxed text-sm text-[var(--steel-graphite)]">Die folgenden Hinweise gelten, sofern entsprechende Funktionen auf dieser Website eingebunden sind.</p>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Vimeo</h3>
          <p className="leading-relaxed">
            Diese Website kann Plugins des Videoportals Vimeo nutzen. Anbieter ist die Vimeo Inc., 555 West 18th Street, New
            York, New York 10011, USA.
            Wenn Sie eine unserer mit einem Video ausgestatteten Seiten besuchen, wird eine Verbindung zu
            den Servern von Vimeo hergestellt. Dabei wird dem Vimeo-Server mitgeteilt, welche unserer Seiten Sie
            besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt auch dann, wenn Sie nicht bei Vimeo
            eingeloggt sind oder keinen Account bei Vimeo besitzen. Die von Vimeo erfassten Informationen werden an
            den Vimeo-Server in den USA übermittelt.
          </p>
          <p className="leading-relaxed">
            Wenn Sie in Ihrem Vimeo-Account eingeloggt sind, ermöglichen Sie Vimeo, Ihr Surfverhalten direkt Ihrem
            persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account
            ausloggen.
            Zur Wiedererkennung der Websitebesucher verwendet Vimeo Cookies bzw. vergleichbare
            Wiedererkennungstechnologien (z. B. Device-Fingerprinting).
          </p>
          <p className="leading-relaxed">
            Die Nutzung von Vimeo erfolgt im Interesse einer ansprechenden Darstellung unserer Onlineangebote.
            Dies stellt ein berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
            Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
            Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
            Einwilligung ist jederzeit widerrufbar.
            Die Datenübertragung in die USA wird auf die Standardvertragsklausel der EU-Kommission sowie nach Aussage von Vimeo auf „berechtigte Geschäftsinteressen“ gestützt. Details finden Sie hier:{" "}
            <ExtLink href="https://vimeo.com/privacy">vimeo.com/privacy</ExtLink>.
          </p>
          <p className="leading-relaxed">
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Weitere
            Informationen hierzu erhalten Sie vom Anbieter unter{" "}
            <ExtLink href="https://www.dataprivacyframework.gov/list">dataprivacyframework.gov/list</ExtLink>.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-primary text-lg font-semibold text-[var(--deep-carbon)]">Google Maps</h3>
          <p className="leading-relaxed">
            Diese Seite kann den Kartendienst Google Maps einbinden. Anbieter ist die Google Ireland Limited („Google“), Gordon
            House, Barrow Street, Dublin 4, Irland. Mit Hilfe dieses Dienstes können wir Kartenmaterial auf unserer
            Website einbinden.
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
            Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist,
            kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim
            Aufruf von Google Maps lädt Ihr Browser die benötigten Webfonts in den Browsercache, um Texte und
            Schriftarten korrekt anzuzeigen.
          </p>
          <p className="leading-relaxed">
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-
            Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt
            ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
            Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
            Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
            Einwilligung ist jederzeit widerrufbar.
            Die Datenübertragung in die USA wird auf die Standardvertragsklausel der EU-Kommission gestützt.
            Details finden Sie hier:{" "}
            <ExtLink href="https://privacy.google.com/businesses/gdprcontrollerterms/">privacy.google.com</ExtLink> und{" "}
            <ExtLink href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/">SCCs</ExtLink>.
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
            <ExtLink href="https://policies.google.com/privacy?hl=de">policies.google.com/privacy</ExtLink>.
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Weitere
            Informationen hierzu erhalten Sie vom Anbieter unter{" "}
            <ExtLink href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&amp;id=a2zt000000001L5AAI&amp;status=Active">dataprivacyframework.gov</ExtLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--light-industrial)] pt-8 text-xs text-[var(--steel-graphite)]">
        <p>
          Quelle:{" "}
          <ExtLink href="https://www.e-recht24.de">e-recht24.de</ExtLink>
        </p>
      </section>
    </div>
  );
}
