//Next Head import
import Head from 'next/head';

//Import NextSeo for different SEO functions
import { NextSeo } from 'next-seo';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//MUI5 Components import
import { Container, Typography } from '@mui/material';

//Data Protection Page component
const DataProtectionPage = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  //Variables for SEO-Translations that are needed for the OpenGraph section in NextSeo.
  const openGraphURL = useNextTranslate('legalnotice:og_page_url');
  const openGraphTitle = useNextTranslate('legalnotice:og_page_title');
  const openGraphDescr = useNextTranslate('legalnotice:og_page_description');
  const openGraphImgAlt = useNextTranslate('legalnotice:og_page_img1_alt');
  const openGraphSiteName = useNextTranslate('legalnotice:og_page_sitename');

  return (
    <>
      <NextSeo
        noindex={true}
        title={useNextTranslate('dataprotection:page_title')}
        description={useNextTranslate('dataprotection:meta_description')}
        canonical={useNextTranslate('dataprotection:page_canonical')}
        openGraph={{
          url: openGraphURL,
          title: openGraphTitle,
          description: openGraphDescr,
          images: [
            {
              url: 'https://yourapp.com/img-dark.jpg',
              width: 800,
              height: 600,
              alt: openGraphImgAlt,
              type: 'image/jpeg',
            },
          ],
          siteName: openGraphSiteName,
          type: 'website',
          url: openGraphURL,
          keywords: ['', '', ''],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
          keywords: ['', '', ''],
        }}
      />
      <Head>
        <meta
          name="keywords"
          content={useNextTranslate('legalnotice:page_keywords')}
        />
      </Head>
      <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
        <Fade triggerOnce>
          <Typography
            textAlign={'left'}
            className="section-title"
            sx={{ paddingTop: '15px', paddingBottom: '30px' }}
            variant="h2"
          >
            Datenschutzerklärung
          </Typography>
        </Fade>
        <Typography variant="h4" className="data-protection-title">
          1. Allgemeine Hinweise
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </Typography>
        <Typography
          variant="h4"
          className="data-protection-title"
          sx={{ paddingTop: '20px' }}
        >
          2. Datenerfassung auf dieser Website
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Cookies
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Diese Webseite verwendet keine Third-Party-Cookies oder
          Tracking-Cookies. Wie erfassen wir Ihre Daten? <br></br> <br></br>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.<br></br> <br></br>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Wofür nutzen wir Ihre Daten?
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.<br></br>
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
          Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
          Datenschutz können Sie sich jederzeit an uns wenden.
        </Typography>
        <Typography
          variant="h4"
          className="data-protection-title"
          sx={{ paddingTop: '20px' }}
        >
          3. Hosting
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Externes Hosting
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters
          / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
          Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
          Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
          Website generiert werden, handeln. Das externe Hosting erfolgt zum
          Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
          bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
          sicheren, schnellen und effizienten Bereitstellung unseres
          Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
          lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde,
          erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
          1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
          des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
          Die Einwilligung ist jederzeit widerrufbar.
          <br></br> <br></br>
          Unsere Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten,
          wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und
          unsere Weisungen in Bezug auf diese Daten befolgen.
          <br></br> <br></br>
          Wir setzen folgenden Hoster ein:
          <br></br> <br></br>
          Der Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
          USA. Vercel ist eine Cloudplattform, über die wir unsere Webseite
          bereitstellen. Vercel hat ein DPA unterzeichnet:
          <br></br> <br></br>
          <a
            href="https://vercel.com/legal/dpa "
            target="_blank"
            className="custom-link"
          >
            https://vercel.com/legal/dpa{' '}
          </a>{' '}
        </Typography>
        <Typography
          variant="h4"
          className="data-protection-title"
          sx={{ paddingTop: '20px' }}
        >
          4. Allgemeine Hinweise und Pflichtinformationen
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Datenschutz
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.<br></br> <br></br>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht. <br></br> <br></br>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Hinweis zur verantwortlichen Stelle
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist: <br></br> <br></br>
          **********<br></br>
          **********<br></br>
          **********<br></br>
          **********<br></br>
          <br></br>
          Telefon: +**********<br></br>
          E-Mail: **********@gmail.com
          <br></br> <br></br>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Speicherdauer
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
          Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
          Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
          Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr
          Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
          die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG.
          Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs.
          1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
          ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
          1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser
          Datenschutzerklärung informiert.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA
          oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn
          diese Tools aktiv sind, können Ihre personenbezogene Daten in diese
          Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
          hin, dass in diesen Ländern kein mit der EU vergleichbares
          Datenschutzniveau garantiert werden kann. <br></br>
          <br></br>
          Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene
          Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als
          Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher
          nicht ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste)
          Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken
          verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese
          Verarbeitungstätigkeiten keinen Einfluss.
        </Typography>

        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Wenn die Datenverarbeitung auf Grundlage von art. 6 abs. 1 lit. e oder
          f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestützter Profiling. Die jeweilige
          Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
          dieser Datenschutz Erklärung. Wenn Sie Widerspruch einlegen, werden
          wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten,
          es sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen (Widerspruch nach art. 21 abs.
          1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um
          Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
          Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener
          Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
          Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
          Wenn Sie widersprechen, werden Ihre personenbezogenen Daten
          anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
          (Widerspruch nach art. 21 abs. 2 DSGVO).
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Recht auf Datenübertragbarkeit
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Auskunft, Löschung und Berichtigung
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Recht auf Einschränkung der Verarbeitung
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </Typography>

        <ul className="data-protection-body-text">
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
            um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah / geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          SSL- bzw. TLS-Verschlüsselung
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS- Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die
          SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </Typography>
        <Typography
          sx={{ paddingTop: '20px' }}
          variant="h4"
          className="data-protection-title"
        >
          5. Datenerfassung auf dieser Website
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Kontaktformular
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter. <br></br>
          <br></br> Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.
          6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
          Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
          Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf unserem berechtigten Interesse an der effektiven
          Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
          DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
          diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.{' '}
          <br></br>
          <br></br> Die von Ihnen im Kontaktformular eingegebenen Daten
          verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der Zweck für die
          Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
          Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
          Aufbewahrungsfristen – bleiben unberührt.
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Anfrage per E-Mail, Telefon oder Telefax
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.<br></br>
          <br></br>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
          <br></br>
          <br></br> Die von Ihnen an uns per Kontaktanfragen übersandten Daten
          verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der Zweck für die
          Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
          Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
          gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </Typography>

        <Typography
          sx={{ paddingTop: '20px' }}
          variant="h4"
          className="data-protection-title"
        >
          6. Plugins und Tools
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Vimeo ohne Tracking (Do-Not-Track)
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Diese Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die
          Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.
          <br></br>
          <br></br>
          Wenn Sie eine unserer mit Vimeo-Videos ausgestatteten Seiten besuchen,
          wird eine Verbindung zu den Servern von Vimeo hergestellt. Dabei wird
          dem Vimeo-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
          Zudem erlangt Vimeo Ihre IP-Adresse. Wir haben Vimeo jedoch so
          eingestellt, dass Vimeo Ihre Nutzeraktivitäten nicht nachverfolgen und
          keine Cookies setzen wird.
          <br></br>
          <br></br>
          Die Nutzung von Vimeo erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
          Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
          Einwilligung ist jederzeit widerrufbar.
          <br></br>
          <br></br>
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
          der EU-Kommission sowie nach Aussage von Vimeo auf „berechtigte
          Geschäftsinteressen“ gestützt. Details finden Sie hier:
          <br></br>
          <br></br>
          <a
            href=" https://vimeo.com/privacy"
            target="_blank"
            className="custom-link"
          >
            {' '}
            https://vimeo.com/privacy{' '}
          </a>{' '}
          <br></br>
          <br></br>
          Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von Vimeo unter:
          <br></br>
          <br></br>
          <a
            href=" https://vimeo.com/privacy"
            target="_blank"
            className="custom-link"
          >
            {' '}
            https://vimeo.com/privacy{' '}
          </a>{' '}
          <br></br>
          <br></br>
        </Typography>
        <Typography
          variant="h5"
          className="data-protection-sub-title"
          sx={{ paddingTop: '15px' }}
        >
          Calendly
        </Typography>
        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          Wir verwenden für unsere Website Calendly, ein Planungs- und
          Organisationstool. Dienstanbieter ist das amerikanische Unternehmen
          Calendly LCC, 271 17th St NW, Ste 1000, Atlanta, Georgia, 30363, USA.
          <br></br>
          <br></br>
          Calendly verarbeitet Daten u.a. auch in den USA. Wir weisen darauf
          hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein
          angemessenes Schutzniveau für den Datentransfer in die USA besteht.
          Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und
          Sicherheit der Datenverarbeitung einhergehen.
          <br></br>
          <br></br>
          Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in
          Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein,
          Norwegen, also insbesondere in den USA) oder einer Datenweitergabe
          dorthin verwendet Calendly von der EU-Kommission genehmigte
          Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Diese
          Klauseln verpflichten Calendly, das EU-Datenschutzniveau bei der
          Verarbeitung relevanter Daten auch außerhalb der EU einzuhalten. Diese
          Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission.
          Sie finden den Beschluss sowie die Klauseln u.a. hier:
          <br></br>
          <br></br>
          <a
            style={{ wordWrap: 'break-word' }}
            className="custom-link"
            target="_blank"
            href=" https://germany.representation.ec.europa.eu/index_de"
          >
            {' '}
            https://germany.representation.ec.europa.eu/index_de{' '}
          </a>{' '}
          <br></br>
          <br></br>
          Mehr über die Daten, die durch die Verwendung von Calendly verarbeitet
          werden, erfahren Sie in der Datenschutzerklärung auf:
          <br></br>
          <br></br>
          <a
            href="https://calendly.com/de/privacy"
            target="_blank"
            className="custom-link"
          >
            {' '}
            https://calendly.com/de/privacy{' '}
          </a>{' '}
          <br></br>
          <br></br>
        </Typography>

        <Typography
          sx={{ paddingTop: '20px' }}
          variant="h4"
          className="data-protection-title"
        >
          7. Datenschutzerklärung Dritte
        </Typography>

        <Typography
          variant="body2"
          className="data-protection-body-text"
          sx={{ paddingTop: '10px' }}
        >
          <br></br>
          Vercel:{' '}
          <a
            target="_blank"
            href=" https://vercel.com/legal/privacy-policy"
            className="custom-link"
          >
            {' '}
            https://vercel.com/legal/privacy-policy{' '}
          </a>{' '}
          <br></br>
          <br></br>
          Vimeo:{' '}
          <a
            href=" https://vimeo.com/privacy"
            target="_blank"
            className="custom-link"
          >
            {' '}
            https://vimeo.com/privacy{' '}
          </a>{' '}
          <br></br>
          <br></br>
          Calendly:{' '}
          <a
            href=" https://calendly.com/de/privacy"
            target="_blank"
            className="custom-link"
          >
            {' '}
            https://calendly.com/de/privacy{' '}
          </a>{' '}
          <br></br>
          <br></br>
        </Typography>
      </Container>
    </>
  );
};

export default DataProtectionPage;
