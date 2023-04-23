//Import react library
import React from 'react';
//Import Prop-Types as useful package to add to any vanilla React app that does not use TypeScript to check the types of React components’ props at run-time
import PropTypes from 'prop-types';
//Import Head from next.js
import Head from 'next/head';
//ThemeProvider component from MUI5 to be able to give the whole app theme props from theme theme.js files
import { ThemeProvider } from '@mui/material/styles';
//Baseline from MUI5 to reset CSS
import CssBaseline from '@mui/material/CssBaseline';
//CacheProvider from MUI5 emotion library to provide a shared client-side cache for a user session
import { CacheProvider } from '@emotion/react';

//Custom components
//We CreateEmotionCache import to assure that MUI styles are loaded first
import CreateEmotionCache from '../src/styles/CreateEmotionCache';
import DarkTheme from '../src/styles/DarkTheme';
import LightTheme from '../src/styles/LightTheme';
import CookiesModal from '../src/components/modals/cookies-modal/CookiesModal';
import CustomAppBar from '../src/components/appbar/CustomAppBar';
import AppFooter from '../src/components/footer/AppFooter';
import ScrollUpButton from '../src/components/ScrollUpButton';

//Import Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

//Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = CreateEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  //use State hook for translation variables
  const [lang, setLang] = React.useState('de');
  //use State hook for theme mode variables
  const [isDark, setDark] = React.useState(true);

  //Define setAnalyticsEnabled function
  const setAnalyticsEnabled = (value) => {
    localStorage.setItem('analyticsEnabled', value);
  };

  //Analytics
  React.useEffect(() => {
    let is_dark_theme = localStorage.getItem('is_dark_theme');
    if (is_dark_theme === null) {
      localStorage.setItem('is_dark_theme', true);
    }
    setDark(localStorage.getItem('is_dark_theme') === 'true');

    let analytics_enabled = localStorage.getItem('analyticsEnabled');
    if (analytics_enabled === null) {
      localStorage.setItem('analyticsEnabled', false);
    }
    setAnalyticsEnabled(localStorage.getItem('analyticsEnabled') === 'true');
  }, []);

  //useEffect hook for checking if dark them is saved to the localstorage
  React.useEffect(() => {
    let is_dark_theme = localStorage.getItem('is_dark_theme');
    if (is_dark_theme === null) {
      localStorage.setItem('is_dark_theme', true);
    }
    setDark(localStorage.getItem('is_dark_theme') === 'true');
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      {' '}
      {/* Cache Provider Component */}
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* MUI5 Theme Provider Component to apply theme styles for the entire app */}
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        {/* MUI5 reset styles component. */}
        <CssBaseline />
        {/* Cookies Modal (Dialogue) that will appear on every router unless you accept this */}
        <CookiesModal />

        {/* Appbar (Header) with props for the language and theme switch */}
        <CustomAppBar
          lang={lang}
          setLang={setLang}
          isDark={isDark}
          setDark={setDark}
        />
        {/* Scroll Button that appears when you scroll down and want to go up the window */}
        <ScrollUpButton />
        {/* Main app component with props */}
        <Component {...pageProps} lang={lang} isDark={isDark} />
        {/* Vercel analytics component, remove if you don't want anyltics to be enabled */}
        {typeof window !== 'undefined' &&
          localStorage.getItem('analyticsEnabled') === 'true' && <Analytics />}
        {/* App Footer */}
        <AppFooter isDark={isDark} setDark={setDark}></AppFooter>
      </ThemeProvider>
    </CacheProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
