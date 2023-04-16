//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { List, ListItem, Button } from '@mui/material';

//Custom Components import
//Custom Link based on Next Link
import CustomNextLink from '../../CustomNextLink';

//Drawer Social Buttons Component
const DrawerSocialButtons = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <List>
        <ListItem
          disablePadding
          sx={{ textAlign: 'center', justifyContent: 'center' }}
        >
          <Button
            fullWidth={true}
            target="_blank"
            component={CustomNextLink}
            noLinkStyle
            href="https://www.linkedin.com/"
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '8px',
            }}
            variant="outlined"
          >
            LinkedIn
          </Button>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ textAlign: 'center', justifyContent: 'center' }}
        >
          <Button
            target="_blank"
            component={CustomNextLink}
            noLinkStyle
            href="https://www.xing.com/"
            fullWidth={true}
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '8px',
            }}
            variant="outlined"
          >
            Xing
          </Button>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ textAlign: 'center', justifyContent: 'center' }}
        >
          <Button
            target="_blank"
            component={CustomNextLink}
            noLinkStyle
            href="https://dribbble.com/"
            fullWidth={true}
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '8px',
            }}
            variant="outlined"
          >
            Dribbble
          </Button>
        </ListItem>
      </List>
    </>
  );
};
export default DrawerSocialButtons;
