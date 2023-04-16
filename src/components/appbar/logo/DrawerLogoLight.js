//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Custom Components
//Custom Link based on Next Link
import CustomNextLink from '../../CustomNextLink';

//Drawer Logo Component
const DrawerLogoLight = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <CustomNextLink href="/">
        <img
          className="drawer-logo-img"
          src="your-logo-light.png"
          alt={useNextTranslate('common:ui_drawer_logo_alt')}
        />
      </CustomNextLink>
    </>
  );
};

export default DrawerLogoLight;
