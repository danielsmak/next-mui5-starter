//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Custom Components
//Custom Link based on Next Link
import CustomNextLink from '../../CustomNextLink';

//Appbar Logo for dark mode
const AppBarLogoDark = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <div className="appbar-logo-img-wrapper">
        <CustomNextLink href="/">
          <img
            className="appbar-logo-img"
            src="/your-logo-dark.png"
            alt={useNextTranslate('common:ui_appbar_logo_alt')}
          />
        </CustomNextLink>
      </div>
    </>
  );
};

export default AppBarLogoDark;
