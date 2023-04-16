//Import react library
import React from 'react';

//Importing the setLanguage function from the next-translate
import setLanguage from 'next-translate/setLanguage';

//MUI5 Components import
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';

//Language Switcher component
const LanguageSwitcher = ({ lang, setLang }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [lang, setLang] = React.useState("en");
  const open = Boolean(anchorEl);

  const handleClose = (status) => {
    if (status !== 'blank') {
      localStorage.setItem('language', status);
      setLang(status);
    }
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const load_language = localStorage.getItem('language');
    if (
      load_language === 'en' ||
      load_language === 'de' // ||
      /* load_language === 'no' */
    ) {
      setLanguage(load_language);
      setLang(load_language);
    } else {
      setLanguage('de');
    }
  }, []);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconButton
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <LanguageIcon className="appbar__language-switcher"></LanguageIcon>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose('blank')}
          id="composition-menu"
          aria-labelledby="composition-button"
        >
          <MenuItem onClick={() => (setLanguage('en'), handleClose('en'))}>
            English
          </MenuItem>
          <MenuItem onClick={() => (setLanguage('de'), handleClose('de'))}>
            Deutsch
          </MenuItem>
        </Menu>
      </Stack>
    </>
  );
};

export default LanguageSwitcher;
