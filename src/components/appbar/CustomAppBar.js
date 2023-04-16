//Import react library
import React from 'react';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Drawer,
  Divider,
} from '@mui/material';

//Custom Components import
import AppBarLogoDark from './logo/AppBarLogoDark';
import AppBarLogoLight from './logo/AppBarLogoLight';
import DrawerLogo from './logo/DrawerLogo';
import DrawerHamburgerIcon from './buttons/DrawerHamburgerIcon';
import AppBarNavigationButtons from './buttons/AppBarNavigationButtons';
import DrawerNavigationButtons from './buttons/DrawerNavigationButtons';
import DrawerSocialButtons from './buttons/DrawerSocialButtons';
import ThemeSwitcher from './buttons/ThemeSwitcher';
import LanguageSwitcher from './buttons/LanguageSwitcher';

//Only needed if you want to use Hide on scroll function for your headbar
/*
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
*/

//Only needed if you want to use pop-up menu when you click on the appbar (header) element.
/*
//import Typography from '@mui/material/Typography';
//import MenuItem from '@mui/material/MenuItem';
//import Menu from '@mui/material/Menu';
*/

//If you want to use Hide on scroll function for your headbar
/*
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <div>{children}</div>
    </Slide>
  );
}
*/

//Header AppBar Component with props
const CustomAppBar = (props) => {
  const { lang, setLang, isDark, setDark } = props;

  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  //Drawer
  const drawerWidth = 240; //Drawer width

  //useState Hook for drawer state
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //function to open the drawer on mobile view.
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box className="appbar-wrapper" sx={{ display: 'flex' }}>
        {/* Appbar*/}
        <AppBar sx={{ position: 'fixed' }} component="nav">
          <Container>
            <Toolbar
              className="toolbar"
              sx={{ justifyContent: 'space-between' }}
            >
              {/* Hamburger Button that appears on mobile view and activates the drawer */}
              <DrawerHamburgerIcon handleDrawerToggle={handleDrawerToggle} />
              {/* Appbar logo */}
              <AppBarLogoDark />
              {/* Appbar navigation menu buttons */}
              <AppBarNavigationButtons />
              <Box sx={{ display: 'flex' }}>
                {/* Language Switcher Icon that switches languages */}
                <LanguageSwitcher
                  lang={lang}
                  setLang={setLang}
                ></LanguageSwitcher>
                {/* Theme Switcher Icon that toggles design theme modes  */}
                <ThemeSwitcher
                  isDark={isDark}
                  setDark={setDark}
                ></ThemeSwitcher>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Drawer part */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better performance on mobile devices when opening.
            }}
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              <div
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Drawer logo*/}
                <DrawerLogo />
              </div>

              <Divider />
              {/* Drawer main navigation menu buttons*/}
              <DrawerNavigationButtons />
              <Divider />
              {/* Drawer social link buttons*/}
              <DrawerSocialButtons />
            </Box>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default CustomAppBar;
