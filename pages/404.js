//Next Head import
import Head from 'next/head';

//Import NextSeo for different SEO functions
import { NextSeo } from 'next-seo';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//MUI5 Components import
import { Container, Typography, Box, Button } from '@mui/material';

//Custom Components
//Custom Link based on Next Link
import CustomNextLink from '../src/components/CustomNextLink';

//404 Page Component
const ErrorPage = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  //Variables for SEO-Translations that are needed for the OpenGraph section in NextSeo.
  const openGraphURL = useNextTranslate('404:og_page_url');
  const openGraphTitle = useNextTranslate('404:og_page_title');
  const openGraphDescr = useNextTranslate('404:og_page_description');
  const openGraphImgAlt = useNextTranslate('404:og_page_img1_alt');
  const openGraphSiteName = useNextTranslate('404:og_page_sitename');

  return (
    <>
      <NextSeo
        noindex={true}
        title={useNextTranslate('404:page_title')}
        description={useNextTranslate('404:meta_description')}
        canonical={useNextTranslate('404:page_canonical')}
        openGraph={{
          url: openGraphURL,
          title: openGraphTitle,
          description: openGraphDescr,
          images: [
            {
              url: 'https://yourapp.com/img-dark.jpg',
              width: 800,
              height: 600,
              alt: openGraphImgAlt,
              type: 'image/jpeg',
            },
          ],
          siteName: openGraphSiteName,
          type: 'website',
          url: openGraphURL,
          keywords: ['', '', ''],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
          keywords: ['', '', ''],
        }}
      />

      <Head>
        <title>{useNextTranslate('404:page_title')}</title>
        <meta
          name="description"
          content={useNextTranslate('404:meta_description')}
        />
      </Head>

      <Container
        maxWidth="sm"
        sx={{
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ my: 4 }}>
          <Fade triggerOnce>
            <Typography
              variant="h4"
              className="error-message__title"
              component="h1"
              gutterBottom
            >
              {useNextTranslate('404:ui_error_msg')}
            </Typography>
            <div className="error-message-btn-wrapper">
              <Button
                variant="contained"
                className="error-btn"
                component={CustomNextLink}
                noLinkStyle
                href="/"
              >
                {useNextTranslate('404:ui_btn_backhome')}
              </Button>
            </div>
          </Fade>
        </Box>
      </Container>
    </>
  );
};

export default ErrorPage;
