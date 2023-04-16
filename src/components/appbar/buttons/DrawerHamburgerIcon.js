//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Container, Box, Stack, Drawer, Divider } from '@mui/material';

////Drawer Hamburger Icon Component with "props" for Header App Bar.
const DrawerHamburgerIcon = ({ handleDrawerToggle }) => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Box className="drawer__hamburger-icon-wrapper">
        <Stack>
          <IconButton
            className="drawer__hamburger-icon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                xs: 'flex',
                sm: 'flex',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};
export default DrawerHamburgerIcon;
