//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
//MUI5 Components import
import { Box, Button } from '@mui/material';

//Custom Components import
//Custom Link based on Next Link
import CustomNextLink from '../../CustomNextLink';

//Appbar Navigation Buttons Component
const AppBarNavigationButtons = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <div className="appbar__nav-btn-wrapper">
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
          }}
        >
          <Button
            className="appbar__nav-btn"
            component={CustomNextLink}
            noLinkStyle
            href="/"
          >
            {useNextTranslate('common:ui_appbar_nav_1')}
          </Button>

          <Button
            className="appbar__nav-btn"
            component={CustomNextLink}
            noLinkStyle
            href="/resume"
          >
            {useNextTranslate('common:ui_appbar_nav_3')}
          </Button>

          <Button
            className="appbar__nav-btn"
            component={CustomNextLink}
            noLinkStyle
            href="/references"
          >
            {useNextTranslate('common:ui_appbar_nav_4')}
          </Button>

          <Button
            className="appbar__nav-btn"
            component={CustomNextLink}
            noLinkStyle
            href="/files"
          >
            {useNextTranslate('common:ui_appbar_nav_5')}
          </Button>

        
        </Box>
      </div>
    </>
  );
};
export default AppBarNavigationButtons;
