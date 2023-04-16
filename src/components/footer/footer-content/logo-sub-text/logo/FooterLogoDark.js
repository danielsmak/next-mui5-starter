//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Next Link import
import Link from 'next/link';

//Social Card Icons for Dark Mode
const FooterLogoDark = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <div className="footer-logo-img-wrapper">
        <Link href="/">
          <img
            className="footer-logo-img"
            src="/your-logo-dark.png"
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
};
export default FooterLogoDark;
