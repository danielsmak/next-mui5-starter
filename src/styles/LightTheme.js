import { createTheme } from '@mui/material/styles';
import { experimental_sx as sx } from '@mui/material/styles';

//Defining LightMode variable with an empty object
let LightTheme = createTheme({});

const LightMode = {
  /* Theme variables */

  //Theme fonts
  '--themeMainFontFamily': '"Epilogue", sans-serif',
  '--themeSecondaryFontFamily': '"Inter", sans-serif',

  //Theme body/html background
  '--themeBackground': '#f1efef',
  // Main theme color (Secondary color that is applied for the components like titles, sub-titles, icons, buttons etc.)
  '--themePrimary': '#626add',
  //UI background for elements like cards and so on
  '--themePaperBackground': '#FFFFFF',

  //Appbar (header) background color and blur effect
  '--navbarBackground': '#ffffffcc',
  '--navbarBackdropFilter': 'blur(15px)',
  '--navbarShadows': '0px 10px 17px -14px rgba(0, 0, 0, 0.20)!important',

  //Footer background color
  '--footerBackground': '#ffffff',

  //Cards border radius
  '--cardBorderRadius': '5px!important',
  //Buttons border radius
  '--buttonBorderRadius': '5px!important',
  //Image border radius
  '--imageBorderRadius': '5px!important',

  //Shadows for images
  '--imageShadows': '0px 10px 25px -14px rgba(0, 0, 0, 0.25)!important',
  //Shadows for cards and other forms like that
  '--paperCardShadows': '0px 10px 25px -14px rgba(0, 0, 0, 0.25)!important',

  //Color of the main headings
  '--mainHeading': '#414141',
  //Color of the sub headings
  '--subHeading': '#696969',
  //Color of labels
  '--labelHeading': '#8C64FF',

  //Color of button texts / labes
  '--buttonText': '#ffffff',

  //Color of body texts
  '--bodyText': '#414141',
  //Color of body text which is a bit pale
  '--bodyTextPaled': '#656565',

  //Different font-weight values
  '--fontWeightBlack': '900',
  '--fontWeightExtraBold': '800',
  '--fontWeightBold': '700',
  '--fontWeightSemiBold': '600',
  '--fontWeightMediumBold': '500',
  '--fontWeightRegular': '400',
  '--fontWeightLight': '300',
  '--fontWeightExtraLight': '200',
  '--fontWeightThin': '100',
};

/* We are creating dark theme here and overwrite some standard values */
LightTheme = createTheme({
  palette: {
    mode: 'light', //Dark vs light default mode MUI5, please take into account that it would influence all standard values unless you have already overwritten them.
    background: {
      default: LightMode['--themeBackground'], //Overwrite the primary body / html color
    },

    //Overwrite the primary color from MUI5
    primary: {
      main: LightMode['--themePrimary'],
    },
  },

  /* Overwritting the main typography values */
  typography: {
    h1: {
      fontSize: '3rem',
      fontFamily: LightMode['--themeMainFontFamily'],
      fontWeight: LightMode['--fontWeightBold'],
      color: LightMode['--mainHeading'],
      [LightTheme.breakpoints.only('xl')]: {
        fontSize: '3rem',
      },
      [LightTheme.breakpoints.only('lg')]: {
        fontSize: '3rem',
      },
      [LightTheme.breakpoints.only('md')]: {
        fontSize: '2.5rem',
      },
      [LightTheme.breakpoints.only('sm')]: {
        fontSize: '2.3rem',
      },
      [LightTheme.breakpoints.only('xs')]: {
        fontSize: '1.875rem',
      },
    },
    h2: {
      fontFamily: LightMode['--themeMainFontFamily'],
      fontSize: '2rem',
      fontWeight: LightMode['--fontWeightSemiBold'],
      color: LightMode['--SubHeading'],
    },
    h3: {
      fontFamily: LightMode['--themeMainFontFamily'],
      fontSize: '1.6rem',
      fontWeight: LightMode['--fontWeightSemiBold'],
      color: LightMode['--mainHeading'],
    },
    h4: {
      fontFamily: LightMode['--themeMainFontFamily'],
      fontSize: '1.2rem',
      fontWeight: LightMode['--fontWeightSemiBold'],
      color: LightMode['--mainHeading'],
    },
    h5: {
      fontFamily: LightMode['--themeMainFontFamily'],
      fontSize: '1rem',
      fontWeight: LightMode['--fontWeightSemiBold'],
      color: LightMode['--mainHeading'],
    },
    h6: {
      fontSize: '0.9rem',
      fontFamily: LightMode['--themeSecondaryFontFamily'],
      fontWeight: LightMode['--fontWeightSemiBold'],
      color: LightMode['--mainHeading'],
      lineHeight: '20px!important',
      marginBottom: '0px',
      [LightTheme.breakpoints.only('xl')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('lg')]: {
        lineHeight: '20px!important',
      },
      [LightTheme.breakpoints.only('md')]: {
        lineHeight: '20px!important',
      },
      [LightTheme.breakpoints.only('sm')]: {
        lineHeight: '20px!important',
      },
      [LightTheme.breakpoints.only('xs')]: {
        lineHeight: '20px!important',
      },
    },
    subtitle1: {
      color: LightMode['--subHeading'],
      fontFamily: LightMode['--themeMainFontFamily'],
      fontWeight: LightMode['--fontWeightMediumBold'],
      fontSize: '1rem',
      lineHeight: '25px!important',
      marginTop: '10px',
      marginBottom: '0px',
      [LightTheme.breakpoints.only('xl')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('lg')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('md')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('sm')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('xs')]: {
        lineHeight: '20px!important',
      },
    },
    subtitle2: {
      color: LightMode['--subHeading'],
      fontFamily: LightMode['--themeMainFontFamily'],
      fontWeight: LightMode['--fontWeightMediumBold'],
      fontSize: '1.2rem',
      lineHeight: '25px!important',
      marginTop: '10px',
      marginBottom: '0px',
      [LightTheme.breakpoints.only('xl')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('lg')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('md')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('sm')]: {
        lineHeight: '23px!important',
      },
      [LightTheme.breakpoints.only('xs')]: {
        lineHeight: '23px!important',
      },
    },
    body1: {
      fontFamily: LightMode['--themeSecondaryFontFamily'],
      color: LightMode['--bodyText'],
      fontSize: '0.875rem',
      fontWeigh: LightMode['--fontWeightRegular'],
      lineHeight: '20px',
    },
    body2: {
      fontFamily: LightMode['--themeSecondaryFontFamily'],
      color: LightMode['--bodyTextPaled'],
      fontSize: '0.875rem',
      fontWeigh: LightMode['--fontWeightRegular'],
      lineHeight: '20px',
    },
    button: {
      fontFamily: LightMode['--themeSecondaryFontFamily'],
      color: LightMode['--bodyText'],
    },
    caption: {
      color: 'white',
    },
    overline: {
      color: 'white',
    },
  },

  /* Overwritting some default components of MUI5 */
  components: {
    MuiCard: {
      styleOverrides: {
        root: sx({
          backgroundColor: LightMode['--themePaperBackground'],
          backdropFilter: 'none',
          color: 'white',
          borderRadius: LightMode['--cardBorderRadius'],
          border: 'none',
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: sx({
          backgroundColor: LightMode['--navbarBackground'],
          backdropFilter: LightMode['--navbarBackdropFilter'],
          boxShadow: LightMode['--navbarShadows'],
        }),
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: sx({
          backgroundColor: LightMode['--themePaperBackground'],
          backgroundImage: 'none!important',
        }),
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: sx({
          borderRadius: LightMode['--cardBorderRadius'],
        }),
      },
    },

    /* All our custom components including pages */
    MuiCssBaseline: {
      styleOverrides: {

        /* Here are firstly the isolated custom components (that are used at any view of the app) */
        body: {
          
          /* Hiding Scrollbar */
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },

          /* All "a" tags (links) styles */
          '& a': {
            textDecoration: 'none',
          },
          '& a:link': {
            textDecoration: 'none',
          },
          '& a:hover': {
            textDecoration: 'none',
          },

          /* Appbar component */
          '& .appbar-wrapper': {
            height: '64px!important',
            [LightTheme.breakpoints.only('xs')]: {
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

          '& .appbar__nav-btn-wrapper': {
            [LightTheme.breakpoints.only('xl')]: {
              display: 'block',
            },
            [LightTheme.breakpoints.only('lg')]: {
              display: 'block',
            },
            [LightTheme.breakpoints.only('md')]: {
              display: 'block',
            },
            [LightTheme.breakpoints.only('sm')]: {
              display: 'none',
            },
            [LightTheme.breakpoints.only('xs')]: {
              display: 'none',
            },
          },

          '& .appbar__nav-btn': {
            color: LightMode['--mainHeading'],
            textTransform: 'capitalize!important',
          },
          '& .appbar__nav-btn-active': {
            color: LightMode['--themePrimary'],
            textTransform: 'capitalize!important',
          },
          '& .appbar__language-switcher': {
            color: LightMode['--themePrimary'],
          },

          /* Appbar test logo */
          '& .appbar-logo': {
            color: LightMode['--themePrimary'],
            fontWeight: LightMode['--fontWeightSemiBold'],
          },

          /* Appbar image logo */
          '& .appbar-logo-img': {
            maxHeight: '64px',
            padding: '0px',
            fontWeight: LightMode['--fontWeightSemiBold'],
            [LightTheme.breakpoints.only('xl')]: {
              display: 'block',
              marginLeft: '0px',
            },
            [LightTheme.breakpoints.only('lg')]: {
              display: 'block',

              marginLeft: '0px',
            },
            [LightTheme.breakpoints.only('md')]: {
              display: 'block',

              marginLeft: '0px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              display: 'block',

              marginLeft: '40px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              maxHeight: '56px',
              marginLeft: '40px',

              display: 'block',
            },
          },

          /* Drawer component */
          '& .drawer__hamburger-icon-wrapper': {
            [LightTheme.breakpoints.only('xl')]: {
              display: 'none',
            },
            [LightTheme.breakpoints.only('lg')]: {
              display: 'none',
            },
            [LightTheme.breakpoints.only('md')]: {
              display: 'none',
            },
            [LightTheme.breakpoints.only('sm')]: {
              display: 'block',
            },
            [LightTheme.breakpoints.only('xs')]: {
              display: 'block',
            },
          },
          /* Drawer image logo */
          '& .drawer-logo-img': {
            maxHeight: '64px',
            padding: '0px',
            fontWeight: LightMode['--fontWeightSemiBold'],
            [LightTheme.breakpoints.only('xl')]: {
              display: 'block',
              marginLeft: '0px',
            },
            [LightTheme.breakpoints.only('lg')]: {
              display: 'block',

              marginLeft: '0px',
            },
            [LightTheme.breakpoints.only('md')]: {
              display: 'block',

              marginLeft: '0px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              display: 'block',

              marginLeft: '0px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              maxHeight: '56px',
              marginLeft: '0px',

              display: 'block',
            },
          },

          '& .drawer__hamburger-icon': {
            color: LightMode['--themePrimary'],
            marginRight: '0px',
            marginLeft: '0px',
          },

          '& .drawer-logo': {
            color: LightMode['--themePrimary'],
            fontWeight: 700,
          },
          '& .drawer-nav-link': {
            color: LightMode['--mainHeading'],
            fontWeight: LightMode['--fontWeightSemiBold'],
            textAlign: 'center',
            justifyContent: 'center',
          },

          /* Footer component */
          '& .custom-footer': {
            backgroundColor: LightMode['--footerBackground'],
            marginTop: '30px',
            [LightTheme.breakpoints.only('xs')]: {
              marginTop: '30px',
            },
          },

          '& .custom-footer__wrapper': {
            paddingTop: '40px',
            paddingBottom: '20px',
            [LightTheme.breakpoints.only('md')]: {
              paddingTop: '20px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              paddingTop: '20px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              paddingTop: '20px',
            },
          },

          '& .footer__logo-wrapper': {
            [LightTheme.breakpoints.only('md')]: {
              marginBottom: '15px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              marginBottom: '15px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              marginBottom: '15px',
            },
          },
          '& .footer__logo-sub-text': {
            color: LightMode['--bodyTextPaled'],
            marginTop: '10px',
            textAlign: 'left',

            [LightTheme.breakpoints.only('xs')]: {
              textAlign: 'center',
            },
          },

          '& .footer-link__section-title': {
            textAlign: 'left',
            marginBottom: '20px',
            fontSize: '1.1rem',
            [LightTheme.breakpoints.only('xs')]: {
              textAlign: 'center',
              marginBottom: '5px',
              fontSize: '1.2rem',
            },
          },
          '& .footer-link': {
            color: LightMode['--bodyTextPaled'],

            cursor: 'pointer',
            marginTop: '10px',
            [LightTheme.breakpoints.only('xs')]: {
              textAlign: 'center',
            },
          },
          '& .footer-link:hover': {
            color: LightMode['--themePrimary'],
          },
          '& .footer-grid-wrapper': {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            [LightTheme.breakpoints.only('xs')]: {
              textAlign: 'center',
            },
          },
          //Footer text logo
          '& .footer-logo': {
            color: LightMode['--themePrimary'],
            fontWeight: LightMode['--fontWeightSemiBold'],
          },

          //Footer image logo
          '& .footer-logo-img-wrapper': {
            [LightTheme.breakpoints.only('xl')]: {
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'left',
            },
            [LightTheme.breakpoints.only('lg')]: {
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'left',
            },
            [LightTheme.breakpoints.only('md')]: {
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'left',
            },
            [LightTheme.breakpoints.only('sm')]: {
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'left',
            },
            [LightTheme.breakpoints.only('xs')]: {
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },

          '& .footer-logo-img': {
            cursor: 'pointer',
            color: LightMode['--themePrimary'],
            maxHeight: '70px',
            padding: '',
            fontWeight: LightMode['--fontWeightSemiBold'],
            [LightTheme.breakpoints.only('xl')]: {
              display: 'block',
            },
            [LightTheme.breakpoints.only('lg')]: {
              display: 'block',
            },
            [LightTheme.breakpoints.only('md')]: {
              display: 'block',
            },
            [LightTheme.breakpoints.only('sm')]: {
              display: 'block',
              padding: '10px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              maxHeight: '100px',
              padding: '0px',
              display: 'block',
            },
          },

          // Footer signature
          '& .custom-footer__signature': {
            color: LightMode['--bodyTextPaled'],
            textAlign: 'center',
          },

          /* Custom card component */
          '& .custom-card': {
            borderRadius: LightMode['--cardBorderRadius'],
          },

          /* Custom link component */
          '& .custom-link': {
            color: LightMode['--themePrimary'],
            fontWeight: '500!important',
            textDecoration: 'underline!important',
          },

          /* Custom Scroll-Up button component */
          '& .scroll-up-btn': {
            backgroundColor: LightMode['--themePaperBackground'],
            color: LightMode['--themePrimary'],
            fontWeight: LightMode['--fontWeightSemiBold'],
            position: 'fixed',
            bottom: 10,
            right: 10,
          },

          /* Page or view titles - use it when you want that your view has a title like "My portoflio" */
          '& .view-description__wrapper': {
            marginBottom: '10px',
            padding: '10px',
          },
          '& .view-description__title': {
            color: LightMode['--themePrimary'],
            fontWeight: '800',
            marginBottom: '5px',
            textAlign: 'left',
            [LightTheme.breakpoints.only('xs')]: {},
          },

          '& .view-description__sub-title': {
            color: LightMode['--bodyText'],
            fontWeight: '500',
            fontSize: '1rem',
            lineHeight: '20px!important',
            [LightTheme.breakpoints.only('xs')]: {
              fontSize: '0,9375rem',
            },
            textAlign: 'left',
          },

          /* Different theme sections that you can use in any page / view */
          /* First theme section with some bigger padding top above */
          '& .theme-section--first': {
            [LightTheme.breakpoints.only('lg')]: {
              paddingTop: '0px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('xl')]: {
              paddingTop: '0px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              paddingTop: '35px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              paddingTop: '35px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              paddingTop: '30px!important',
              paddingBottom: '30px!important',
            },
          },

          /* Theme section */
          '& .theme-section': {
            [LightTheme.breakpoints.only('lg')]: {
              paddingTop: '35px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('xl')]: {
              paddingTop: '35px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              paddingTop: '35px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              paddingTop: '35px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              paddingTop: '30px!important',
              paddingBottom: '30px!important',
            },
          },

          /* Theme section with no bottom padding */
          '& .theme-section--no-bottom-padding': {
            [LightTheme.breakpoints.only('xl')]: {
              paddingTop: '15px!important',
              paddingBottom: '0px!important',
            },
            [LightTheme.breakpoints.only('lg')]: {
              paddingTop: '15px!important',
              paddingBottom: '0px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              paddingTop: '35px!important',
              paddingBottom: '15px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              paddingTop: '35px!important',
              paddingBottom: '15px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              paddingTop: '15px!important',
              paddingBottom: '15px!important',
            },
          },

          /* Theme section with no top padding */
          '& .theme-section--no-top-padding': {
            [LightTheme.breakpoints.only('lg')]: {
              paddingTop: '0px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('xl')]: {
              paddingTop: '0px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              paddingTop: '0px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              paddingTop: '0px!important',
              paddingBottom: '35px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              paddingTop: '0px!important',
              paddingBottom: '30px!important',
            },
          },

          /* Cross section with text and picture (it's the wrapper with no padding on the right side so that picture has no padding on the right side) */
          '& .cross-section__box-img-wrapper--right': {
            borderRadius: LightMode['--imageBorderRadius'],

            [LightTheme.breakpoints.only('xl')]: {
              margin: '40px 0px 40px 40px',
            },
            [LightTheme.breakpoints.only('lg')]: {
              margin: '40px 0px 40px 40px',
            },
            [LightTheme.breakpoints.only('md')]: {
              margin: '0px',
            },

            [LightTheme.breakpoints.only('sm')]: {
              margin: '0px',
            },

            [LightTheme.breakpoints.only('xs')]: {
              margin: '0px',
            },
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'column',
          },

          /* Cross section with text and picture (it's the wrapper with no padding on the left side so that picture has no padding on the left side */
          '& .cross-section__box-img-wrapper--left': {
            borderRadius: LightMode['--imageBorderRadius'],

            [LightTheme.breakpoints.only('xl')]: {
              margin: '40px 40px 40px 0px',
            },
            [LightTheme.breakpoints.only('lg')]: {
              margin: '40px 40px 40px 0px',
            },
            [LightTheme.breakpoints.only('md')]: {
              margin: '0px',
            },

            [LightTheme.breakpoints.only('sm')]: {
              margin: '0px',
            },

            [LightTheme.breakpoints.only('xs')]: {
              margin: '0px',
            },
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'column',
          },

          /* Cross section box for image */
          '& .cross-section__box-img': {
            borderRadius: LightMode['--imageBorderRadius'],
          },

          /* Cross section wrapper with double buttons like you usually see on the first section of any landing page */
          '& .cross-section__double-btn-wrapper': {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '25px',
            [LightTheme.breakpoints.only('lg')]: {
              flexDirection: 'row!important',

              marginTop: '25px',
            },
            [LightTheme.breakpoints.only('xl')]: {
              flexDirection: 'row!important',
              marginTop: '25px',
            },
            [LightTheme.breakpoints.only('md')]: {
              flexDirection: 'row!important',
              marginTop: '25px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              flexDirection: 'row!important',
              display: 'none',
              marginTop: '20px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              flexDirection: 'column!important',
              display: 'flex',
              marginTop: '20px',
            },
          },

          /* Cross section wrapper with double buttons but for mobile 
        (use it to show buttons with shorter names on the mobile screens and so that the buttons are located not in row like on desktop) */
          '& .cross-section__double-btn-wrapper-mobile': {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '25px',
            [LightTheme.breakpoints.only('lg')]: {
              flexDirection: 'row!important',
              display: 'none',
              marginTop: '25px',
            },
            [LightTheme.breakpoints.only('xl')]: {
              flexDirection: 'row!important',
              display: 'none',
              marginTop: '25px',
            },
            [LightTheme.breakpoints.only('md')]: {
              flexDirection: 'row!important',
              display: 'none',
              marginTop: '25px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              flexDirection: 'row!important',

              marginTop: '20px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              flexDirection: 'column!important',
              display: 'none',
              marginTop: '20px',
            },
          },

          /* Cross section "contained" button */
          '& .cross-section-btn--contained': {
            color: LightMode['--buttonText'],
            padding: '13px 0px 13px 0px',
            backgroundColor: LightMode['--themePrimary'],
            borderRadius: LightMode['--buttonBorderRadius'],
            textTransform: 'inherit',
            [LightTheme.breakpoints.only('xl')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('lg')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              width: 'auto!important',
            },
          },

          /* Cross section "outlined" button */
          '& .cross-section-btn--outlined': {
            color: LightMode['--themePrimary'],
            borderRadius: LightMode['--buttonBorderRadius'],
            padding: '13px 0px 13px 0px',
            textTransform: 'inherit',
            [LightTheme.breakpoints.only('xl')]: {
              width: '200px!important',
              marginLeft: '10px',
            },

            [LightTheme.breakpoints.only('lg')]: {
              marginLeft: '10px',
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              marginLeft: '5px',
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              marginLeft: '5px',

              width: '200px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              marginTop: '10px',
              width: 'auto!important',
            },
          },

          /* Here are the page components with components that are used only in the certain page or view */
          /* 404 Error Page Component */
          '& .error-message__title': {
            fontSize: '2rem',
            color: LightMode['--mainHeading'],
            fontWeight: LightMode['--fontWeightSemiBold'],
            [LightTheme.breakpoints.only('xs')]: {
              fontSize: '1.3rem!important',
              textAlign: 'center',
            },
          },
          '& .error-message-btn-wrapper': {
            marginTop: '25px',

            [LightTheme.breakpoints.only('xs')]: {
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
            },
          },
          '& .error-btn': {
            color: LightMode['--buttonText'],
            padding: '13px 0px 13px 0px',
            backgroundColor: LightMode['--themePrimary'],
            borderRadius: LightMode['--buttonBorderRadius'],
            textTransform: 'inherit',
            [LightTheme.breakpoints.only('xl')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('lg')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              width: 'auto!important',
            },
          },

          /* Home page component */

          //Service card for home page where you can see all provided services (like I do web-design, ux, web-dev and so on)
          '& .service-card': {
            backgroundColor: LightMode['--themePaperBackground'],
            backgroundImage: 'none',
            borderRadius: LightMode['--cardBorderRadius'],
            padding: '25px',
            textAlign: 'left',
            boxShadow: LightMode['--paperCardShadows'],
          },
          '& .service-card__box': {
            display: 'flex',
            marginBottom: '14px',
          },
          '& .service-card__label': {
            color: LightMode['--themePrimary'],
            fontFamily: LightMode['--themeSecondaryFontFamily'],
            textAlign: 'left',
            fontWeight: LightMode['--fontWeightMediumBold'],
            marginTop: '15px',
          },

          '& .service-card__title': {
            color: LightMode['--mainHeading'],
            textAlign: 'left',
            fontWeight: LightMode['--fontWeightSemiBold'],
            marginTop: '10px',
            marginBottom: '10px',
          },
          '& .service-card__text-wrapper': {
            lineHeight: '20px!important',
            textAlign: 'left',
          },
          '& .service-card__bodytext': {
            color: LightMode['--bodyTextPaled'],
            fontSize: '0.75rem',
            marginBottom: '15px',
            fontWeight: LightMode['--fontWeightMediumBold'],
            [LightTheme.breakpoints.only('xs')]: {
              fontSize: '0.75rem',
            },
          },
          '& .social-btn': {
            backgroundColor: '#323232!important',
            marginRight: '5px',
            [LightTheme.breakpoints.only('xs')]: {
              padding: '3px!important',
            },
          },
          '& .social-btn__icon': {
            color: LightMode['--themePrimary'],
          },

          //Service card for home page with the button that is linked to another page.
          '& .service-download-card__right-wrapper': {
            [LightTheme.breakpoints.only('xl')]: {
              paddingLeft: '15px',
            },

            [LightTheme.breakpoints.only('lg')]: {
              paddingLeft: '15px',
            },
            [LightTheme.breakpoints.only('md')]: {
              paddingLeft: '15px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              padding: '15px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              paddingTop: '15px',
            },
          },
          '& .service-download-card__btn-wrapper--content-left': {
            display: 'flex',
            justifyContent: 'left',
            alignContent: 'center',
            [LightTheme.breakpoints.only('sm')]: {
              justifyContent: 'right',
            },
            [LightTheme.breakpoints.only('xs')]: {
              justifyContent: 'center',
              flexDirection: 'column',
            },
          },
          '& .service-download-card__right-wrapper--content-right': {
            display: 'flex',
            justifyContent: 'right',
            alignContent: 'center',
            [LightTheme.breakpoints.only('sm')]: {
              justifyContent: 'right',
            },

            [LightTheme.breakpoints.only('xs')]: {
              justifyContent: 'center',
              flexDirection: 'column',
            },
          },

          '& .service-download-card__btn--contained': {
            color: LightMode['--buttonText'],
            padding: '13px 0px 13px 0px',
            backgroundColor: LightMode['--themePrimary'],
            borderRadius: LightMode['--buttonBorderRadius'],
            textTransform: 'inherit',

            [LightTheme.breakpoints.only('xl')]: {
              width: '200px!important',
            },

            [LightTheme.breakpoints.only('lg')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              marginTop: '10px',
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              marginTop: '15px',
              width: 'auto!important',
            },
          },
          '& .service-calendly-card__btn--contained': {
            color: '#101010',
            backgroundColor: LightMode['--themePrimary'],
            marginTop: '15px',

            borderRadius: LightMode['--cardBorderRadius'],
            textTransform: 'inherit',
            [LightTheme.breakpoints.only('xl')]: {
              width: '200px!important',
            },

            [LightTheme.breakpoints.only('lg')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              marginTop: '10px',
              width: '200px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              marginTop: '15px',
              width: 'auto!important',
            },
          },

          /* Portofolio page component */

          //Portfolio card
          '& .portfolio-card-title': {
            default: LightMode['--themeBackground'],
            fontWeight: '500!important',
          },
          '& .portfolio-card-sub-title': {
            color: LightMode['--themePrimary'],
            fontWeight: '500!important',
          },

          // Portoflio Content image
          '& .content-image': {
            borderRadius: LightMode['--imageBorderRadius'],
            pointer: 'cursor',
          },

          /* Resume Page */

          //Resume experience card
          '& .resume-work-exp-card': {
            borderRadius: LightMode['--cardBorderRadius'],
            padding: '5px',
            boxShadow: LightMode['--paperCardShadows'],
          },
          '& .resume-work-exp-card__text-wrapper': {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
          },

          '& .resume-work-exp-card__date-title': {
            color: LightMode['--themePrimary'],
            fontWeight: '500',
            fontSize: '13px',
            textAlign: 'left',
            lineHeight: '1.5',
          },
          '& .resume-work-exp-card__job-title': {
            color: LightMode['--bodyText'],
            fontWeight: '500',
            fontSize: '20px',
            textAlign: 'left',
            lineHeight: '1.5',
            [LightTheme.breakpoints.only('xs')]: {
              marginTop: '5px',
              marginBottom: '5px',
              lineHeight: '1.3',
            },
          },
          '& .resume-work-exp-card__firm-title': {
            color: LightMode['--bodyTextPaled'],
            fontWeight: '400',
            fontSize: '0.875rem',
            textAlign: 'left',
            lineHeight: '1.5',
          },
          '& .resume-work-exp-card__firm-title--feature-color': {
            color: LightMode['--themePrimary'],
            fontWeight: '400',
            fontSize: '0.875rem',
            textAlign: 'left',
          },
          '& .resume-work-exp-card__task-description': {
            color: LightMode['--bodyText'],
            fontWeight: '400',
            fontSize: '0.875rem',
            textAlign: 'left',
          },

          '& .resume-card-grid': {
            padding: '5px 5px 5px 5px',
            [LightTheme.breakpoints.only('xl')]: {
              padding: '5px 5px 5px 5px',
            },
            [LightTheme.breakpoints.only('lg')]: {
              padding: '5px 5px 5px 5px',
            },
            [LightTheme.breakpoints.only('md')]: {
              padding: '5px 5px 5px 5px',
            },
            [LightTheme.breakpoints.only('sm')]: {
              padding: '0px 5px 5px 5px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              padding: '0px 5px 5px 5px',
            },
          },

          //Resume Block Description
          '& .resume-block-description__wrapper': {
            padding: '10px 10px 5px 10px',

            [LightTheme.breakpoints.only('sm')]: {
              padding: '10px 10px 10px 10px',
            },
            [LightTheme.breakpoints.only('xs')]: {
              padding: '10px 10px 10px 10px',
            },
          },

          '& .resume-block-description__title': {
            fontSize: '18px',
            fontWeight: LightMode['--fontWeightSemiBold'],
            marginBottom: '5px',
          },

          //Resume chip component
          '& .resume-chip': {
            backgroundColor: LightMode['--themePaperBackground'],
            margin: '0px 5px 5px 0px',
            fontWeight: LightMode['--fontWeightMediumBold'],
          },

          /* Files page component */

          //Filelist wrapper
          '& .file-list__wrapper': {
            padding: '10px',
            minHeight: '70vh',
          },

          //File item - document-icon
          '& .file-card': {
            backgroundColor: LightMode['--themePaperBackground'],
            borderRadius: LightMode['--cardBorderRadius'],
            marginTop: '5px',
          },

          //File item - document-icon
          '& .file-card__document-icon': {
            color: LightMode['--themePrimary'],
          },

          //File item - download icon
          '& .file-card__download-icon': {
            color: LightMode['--themePrimary'],
          },

          /* Contact page component */

          /* Contact page motto heading */
          '& .cross-section-motto__title': {
            color: LightMode['--mainHeading'],
            fontWeight: LightMode['--fontWeightBold'],
            [LightTheme.breakpoints.only('xl')]: {
              fontSize: '3rem',
            },
            [LightTheme.breakpoints.only('lg')]: {
              fontSize: '3rem',
            },
            [LightTheme.breakpoints.only('md')]: {
              fontSize: '2.5rem',
            },
            [LightTheme.breakpoints.only('sm')]: {
              fontSize: '2.0rem',
            },
            [LightTheme.breakpoints.only('xs')]: {
              marginTop: '15px',
              fontSize: '1.875rem',
              textAlign: 'center',
            },
          },
          /* Contact page motto heading with the main theme color (to hightlight a certain sentence) */
          '& .cross-section__motto--theme-color': {
            color: LightMode['--themePrimary'],
            fontWeight: LightMode['--fontWeightBold'],
            [LightTheme.breakpoints.only('xl')]: {
              fontSize: '3rem',
            },
            [LightTheme.breakpoints.only('lg')]: {
              fontSize: '3rem',
            },
            [LightTheme.breakpoints.only('md')]: {
              fontSize: '2.5rem',
            },
            [LightTheme.breakpoints.only('sm')]: {
              fontSize: '2.0rem',
            },
            [LightTheme.breakpoints.only('xs')]: {
              fontSize: '1.875rem',
              textAlign: 'center',
            },
          },

          //Social card with contact (Discord, Facebook, Insta and so on)
          '& .social-contact-card': {
            borderRadius: LightMode['--cardBorderRadius'],
            backgroundColor: LightMode['--themePaperBackground'],
            boxShadow: LightMode['--paperCardShadows'],
            marginTop: '10px!important',
            marginLeft: '10px!important',
            marginRight: '10px!important',
            marginButtom: '10px!important',
            [LightTheme.breakpoints.only('xl')]: {
              margin: '10px!important',
            },
            [LightTheme.breakpoints.only('lg')]: {
              margin: '10px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              margin: '10px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              margin: '5px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              margin: '5px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              margin: '5px!important',
            },
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'column',
          },

          '& .social-contact-card__card-action-area': {
            borderRadius: LightMode['--cardBorderRadius'],
          },

          '& .social-contact-card__img-wrapper': {
            padding: '15px!important',
            [LightTheme.breakpoints.only('xl')]: {
              padding: '15px!important',
            },
            [LightTheme.breakpoints.only('lg')]: {
              padding: '15px!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              padding: '10px!important',
            },
            [LightTheme.breakpoints.only('sm')]: {
              padding: '20px!important',
            },
            [LightTheme.breakpoints.only('xs')]: {
              padding: '20px!important',
            },
          },
          '& .social-contact-card__img': {
            borderRadius: LightMode['--imageBorderRadius'],
          },

          '& .social-contact-card__title': {
            fontSize: '13px!important',
            [LightTheme.breakpoints.only('xs')]: {
              fontSize: '0.875rem!important',
            },
            [LightTheme.breakpoints.only('md')]: {
              fontSize: '13px!important',
            },
            color: LightMode['--themePrimary'],
            fontWeight: '500!important',
          },

          '& .social-contact-card__title-wrapper': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          },
        },

        /* Portfolio Project page component */

        //Project content component styles
        '& .project-content-title': {
          default: LightMode['--themeBackground'],
          fontWeight: '700!important',
        },
        '& .project-content-sub-title': {
          fontWeight: '700!important',
          default: LightMode['--themeBackground'],
        },

        '& .project-content__body-text': {
          color: LightMode['--bodyTextPaled'],
          fontWeight: '400!important',
          fontSize: '0.875rem',
          lineHeight: '20px',
          whiteSpace: 'pre-wrap',
        },
        '& .project-info-block-card__wrapper': {
          marginTop: '20px',
          marginBottom: '0px',
          [LightTheme.breakpoints.only('xs')]: {
            marginTop: '20px',
            marginBottom: '0px',
          },
        },
        '& .project-info-block-card': {
          width: '100%',
          fontSize: '0.875rem',
          lineHeight: '20px',
          height: '100%',
          backgroundColor: 'black',
          justifyContent: 'left',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          padding: '18px',
          marginTop: '10px',
          marginBottom: '10px',
          borderRadius: LightMode['--cardBorderRadius'],
          [LightTheme.breakpoints.only('xs')]: {
            marginTop: '10px',
            marginBottom: '10px',
          },
        },
      },
    },
  },
});
export default LightTheme;
