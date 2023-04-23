![Banner](/github-assets/next_mui5_starter_banner-pic.png)

### Deutsche Version: 
[Ich möchte diese Beschreibung auf Deutsch lesen](https://github.com/danielsmak/next-mui5-starter/blob/master/README-DE.md)

# Next.js 12 + MUI5 + next-translate starter

This is a Next.js 12 starter based on MUI5 with integrated translations from next-translate (i18n) plugin for the rapid start into development of your next project. 
It uses MUI5 custom theming (dark and bright modes) with conditional rendering of certain elements according to the chosen mode. Of course, it supports "lazy loading" with next/image static images out of the box and SEO-functionality from next/seo. Additionally, you also get the cookie consent component with an opportunity to adjust settings (turn on, turn off the "Vercel Analytics"), as well as the adjusted and isolated translations both for the UI and dynamic content. There are a bunch of fancy components that you can use for the rapid prototyping: appbar, footer, cards, CV page, references page, cross-sections (picture + text) and so on. Enjoy :)

## What will come soon?

I will expand the tutorial regarding the usage of this app very soon. I'm also going to add some additional functionality to the consent-manager (opportunity to revoke cookies), create a "leave confirmation dialog component" when you click on the external links and add a function checking whether you're online or offline with the fallback page if your connection has been lost. Eventually, I will probably update this starter-kit to Next.js 13. Also, I will add MDX-Plugin and the "blog" page section.

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation-and-start)
- [Customizing themes](#customizing-themes)
  - [Theme switcher](#theme-switcher)
  - [Styling](#styling)
- [What is next?](#what-is-next)

## Getting started

### Installation and start

```shell
npm install
npm run dev
```
## Customizing Themes
You can find the theme files under: src/styles/darkTheme.js or src/styles/lightTheme.js.

There will be two files: darkTheme.js and lightTheme.js - those are the main themes used in this template. 

For the proper theme functioning, you also need "ThemeProvider", "CssBaseLine", "CacheProvider" and "CreateEmotionCache" from MUI5, and the theme components themselves: "DarkTheme" and "LightTheme".

```shell
#ThemeProvider component from MUI5 to be able to give the whole app theme props from theme theme.js files
import { ThemeProvider } from '@mui/material/styles';

#Baseline from MUI5 to reset CSS
import CssBaseline from '@mui/material/CssBaseline';

#CacheProvider from MUI5 emotion library to provide a shared client-side cache for a user session
import { CacheProvider } from '@emotion/react';

#We CreateEmotionCache import to assure that MUI styles are loaded first
import CreateEmotionCache from '../src/styles/CreateEmotionCache';

#Dark theme import
import DarkTheme from '../src/styles/DarkTheme';
#Light theme import
import LightTheme from '../src/styles/LightTheme';

```
### Theme switcher

The switcher itself that "switches" the themes is located under src/components/appbar/buttons/ThemeSwitcher. 
Its function saves into the state the chosen mode and also remembers the user choice by saving that to the localStorage. 

Please take into account that the props "isDark", "setDark" should be passed down to all child components.

```shell
const { isDark, setDark } = props;
```

### Styling
Now regarding the styling itself. In the first part of the darkTheme.js or lightTheme.js file you will see a set of variables with comments, I wrote them to make the changes easier.

```shell
# Theme variables 

# Theme fonts 
'--themeMainFontFamily': '"Epilogue", sans-serif',
'--themeSecondaryFontFamily': '"Inter", sans-serif',

# Theme body/html background
'--themeBackground': '#101010',
# Main theme color (Secondary color that is applied for the components like titles, sub-titles, icons, buttons etc.)
'--themePrimary': '#4AFF9D', 
# UI background for elements like cards and so on
'--themePaperBackground': '#1e1e1e',

# Some code after ...
```
In the next part of the document you will see a very important key within the palette object which is called "mode" and its value is the string 'dark'. It comes from MUI5 and it defines whether the theme would use the standard MUI5 dark mode or light mode colors. 

**IMPORTANT**: If you haven't already manually overwritten the styles of the default MUI5 components, then the MUI5 would just pick the standard dark or light mode colors (styles). You can see this key here:

```shell
DarkTheme = createTheme({
  palette: {
    mode: 'dark', //Dark vs light default mode MUI5, please take into account that it would influence all standard values unless you have already overwritten them.
    background: {
      default: DarkMode['--themeBackground'], //Overwrite the primary body / html color
    },

    //Overwrite the primary color from MUI5
    primary: {
      main: DarkMode['--themePrimary'],
    },
  },

# Some code after ...
```
**NOTE**: You can also add more default color keys there such as "secondary" and so on. I didn't do it because I use custom variables for my components. But if you want to give "secondary" key to your default "badge" - component, keep in mind that MUI5 would just use the default color (dark or light mode) in such case.

If you would scroll down further, you will see that I have overwritten certain default values, for example h1, h2, h3, button titles and other tags from typography component: 

```shell
# Overwritting the main typography values 
typography: {
  h1: {
    fontSize: '3rem',
    fontFamily: DarkMode['--themeMainFontFamily'],
    fontWeight: DarkMode['--fontWeightBold'],
    color: DarkMode['--mainHeading'],
    [DarkTheme.breakpoints.only('xl')]: {
      fontSize: '3rem',
    },
    [DarkTheme.breakpoints.only('lg')]: {
      fontSize: '3rem',
    },
    [DarkTheme.breakpoints.only('md')]: {
      fontSize: '2.5rem',
    },
    [DarkTheme.breakpoints.only('sm')]: {
      fontSize: '2.3rem',
    },
    [DarkTheme.breakpoints.only('xs')]: {
      fontSize: '1.875rem',
    },
  },

# Some code after ...
```

Then, if you scroll down, you will come to the part where I start to overwrite certain default MUI5 components:

```shell
#Overwritting MUI5 Card Component styles
MuiCard: {
    styleOverrides: {
      root: sx({
        backgroundColor: DarkMode['--themePaperBackground'],
        backdropFilter: 'none',
        color: 'white',
        borderRadius: DarkMode['--cardBorderRadius'],
        border: 'none',
    }),
  },
},

# Some code after ...
```

**NOTE**: You don't need to overwrite every component unless you are sure you will use it. Otherwise, you can just create custom components by giving the default MUI5 component a class and that's where the last section of this block comes - here you can see the examples with custom classes:

```shell

# All our custom components including pages 
  MuiCssBaseline: {
    styleOverrides: {
      # Here are firstly the isolated custom components (that are used at any view of the app) 
      body: {
        
        # Hiding Scrollbar 
        '&::-webkit-scrollbar': {
          width: '0px',
          background: 'transparent',
        },

        # All "a" tags (links) styles 
        '& a': {
          textDecoration: 'none',
        },
        '& a:link': {
          textDecoration: 'none',
        },
        '& a:hover': {
          textDecoration: 'none',
        },

        # Appbar component 
        '& .appbar-wrapper': {
          height: '64px!important',
          [DarkTheme.breakpoints.only('xs')]: {
            height: '56px!important',
          },
        },

        '& nav': {
          zIndex: '10!important',
        },

        '& .toolbar': {
          paddingLeft: '0px',
          paddingRight: '0px',
        },

# Some code after ...
```
Also, you probably wonder how to use **breakpoints** for different devices while using MUI5 theme? It's quite easy, we have **"xl"** for very big screen, **"lg"** for desktop, **"md"** for laptop size, **"sm"** for tablets and **"xs"** for mobile, so you can use it this way:

```shell
'& .appbar__nav-btn-wrapper': {
    [DarkTheme.breakpoints.only('xl')]: {
      display: 'block',
    },
    [DarkTheme.breakpoints.only('lg')]: {
      display: 'block',
    },
    [DarkTheme.breakpoints.only('md')]: {
      display: 'block',
    },
    [DarkTheme.breakpoints.only('sm')]: {
      display: 'none',
    },
    [DarkTheme.breakpoints.only('xs')]: {
      display: 'none',
    },
},

# Some code after ...
```

## What is next?
Further documentation is coming soon.