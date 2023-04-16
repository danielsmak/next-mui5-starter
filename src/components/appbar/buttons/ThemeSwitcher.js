//Import react library
import React from 'react';
//MUI5 Components import
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { LightMode } from '@mui/icons-material';
import { DarkMode } from '@mui/icons-material';

//Theme Switcher Component
const ThemeSwitcher = (props) => {
  const { isDark, setDark } = props;

  const toggleTheme = () => {
    setDark(!isDark);
    localStorage.setItem('is_dark_theme', !isDark);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconButton onClick={() => toggleTheme()}>
          {isDark ? (
            <LightMode className="appbar__language-switcher"></LightMode>
          ) : (
            <DarkMode className="appbar__language-switcher"></DarkMode>
          )}
        </IconButton>
      </Stack>
    </>
  );
};
export default ThemeSwitcher;
