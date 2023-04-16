//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

//Custom Components import
//Custom Link based on Next Link
import CustomNextLink from '../../CustomNextLink';

//Drawer Navigation Buttons Component
const DrawerNavigationButtons = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <List>
        <ListItem
          disablePadding
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: '5px',
          }}
        >
          <ListItemButton
            className="drawer-nav-link"
            sx={{
              textAlign: 'center',
              justifyContent: 'center',
              marginTop: '5px',
            }}
            component={CustomNextLink}
            noLinkStyle
            href="/"
          >
            <ListItemText sx={{ flexGrow: 'unset' }} />
            {useNextTranslate('common:ui_appbar_nav_1')}
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: '5px',
          }}
        ></ListItem>
        <ListItem
          disablePadding
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: '5px',
          }}
        >
          <ListItemButton
            className="drawer-nav-link"
            sx={{ textAlign: 'center', justifyContent: 'center' }}
            component={CustomNextLink}
            noLinkStyle
            href="/resume"
          >
            <ListItemText sx={{ flexGrow: 'unset' }} />
            {useNextTranslate('common:ui_appbar_nav_3')}
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: '5px',
          }}
        >
          <ListItemButton
            className="drawer-nav-link"
            sx={{ textAlign: 'center', justifyContent: 'center' }}
            component={CustomNextLink}
            noLinkStyle
            href="/references"
          >
            <ListItemText sx={{ flexGrow: 'unset' }} />
            {useNextTranslate('common:ui_appbar_nav_4')}
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: '5px',
          }}
        >
          <ListItemButton
            className="drawer-nav-link"
            sx={{ textAlign: 'center', justifyContent: 'center' }}
            component={CustomNextLink}
            noLinkStyle
            href="/files"
          >
            <ListItemText sx={{ flexGrow: 'unset' }} />
            {useNextTranslate('common:ui_appbar_nav_5')}
          </ListItemButton>
        </ListItem>
      
      </List>
    </>
  );
};
export default DrawerNavigationButtons;
