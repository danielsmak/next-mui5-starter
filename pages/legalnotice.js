//Next Head import
import Head from 'next/head';

//Import NextSeo for different SEO functions
import { NextSeo } from 'next-seo';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//MUI5 Components import
import { Container, Typography } from '@mui/material';

//Legal Notice Page not found Component
const LegalNotice = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation('legalnotice');

  //Variables for SEO-Translations that are needed for the OpenGraph section in NextSeo.
  const openGraphURL = useNextTranslate('legalnotice:og_page_url');
  const openGraphTitle = useNextTranslate('legalnotice:og_page_title');
  const openGraphDescr = useNextTranslate('legalnotice:og_page_description');
  const openGraphImgAlt = useNextTranslate('legalnotice:og_page_img1_alt');
  const openGraphSiteName = useNextTranslate('legalnotice:og_page_sitename');

  return (
    <>
      <NextSeo
        noindex={true}
        title={useNextTranslate('legalnotice:page_title')}
        description={useNextTranslate('legalnotice:meta_description')}
        canonical={useNextTranslate('legalnotice:page_canonical')}
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
        <meta
          name="keywords"
          content={useNextTranslate('legalnotice:page_keywords')}
        />
      </Head>

      <Container
        maxWidth="lg"
        sx={{ paddingTop: '40px', paddingBottom: '40px' }}
      >
        <Fade triggerOnce>
          <Typography
            textAlign={'left'}
            className="section-title"
            sx={{ paddingTop: '15px', paddingBottom: '20px' }}
            variant="h2"
          >
            {useNextTranslate('legalnotice:ui_page_title')}
          </Typography>
        </Fade>

        <Fade triggerOnce>
          <Typography variant="h4" className="legal-notice-title">
            {useNextTranslate('legalnotice:ui_block_title_1')}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="body2"
            className="legal-notice-sub-title"
            sx={{ paddingTop: '10px' }}
          >
            {useNextTranslate('legalnotice:ui_block_text_1')
              .split('\n')
              .map((text, index) => (
                <span style={{ display: 'block' }} key={index}>
                  {text}
                </span>
              ))}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="h4"
            sx={{ paddingTop: '20px' }}
            className="legal-notice-title"
          >
            {useNextTranslate('legalnotice:ui_block_title_2')}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="body2"
            className="legal-notice-sub-title"
            sx={{ paddingTop: '10px' }}
          >
            {useNextTranslate('legalnotice:ui_block_text_2')
              .split('\n')
              .map((text, index) => (
                <span style={{ display: 'block' }} key={index}>
                  {text}
                </span>
              ))}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="h4"
            sx={{ paddingTop: '20px' }}
            className="legal-notice-title"
          >
            {useNextTranslate('legalnotice:ui_block_title_3')}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="body2"
            className="legal-notice-sub-title"
            sx={{ paddingTop: '10px' }}
          >
            {useNextTranslate('legalnotice:ui_block_text_3')
              .split('\n')
              .map((text, index) => (
                <span style={{ display: 'block' }} key={index}>
                  {text}
                </span>
              ))}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="h4"
            sx={{ paddingTop: '20px' }}
            className="legal-notice-title"
          >
            {useNextTranslate('legalnotice:ui_block_title_4')}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="body2"
            className="legal-notice-sub-title"
            sx={{ paddingTop: '10px' }}
          >
            {useNextTranslate('legalnotice:ui_block_text_4')
              .split('\n')
              .map((text, index) => (
                <span style={{ display: 'block' }} key={index}>
                  {text}
                </span>
              ))}
            <br></br>
            {useNextTranslate('legalnotice:ui_block_text_5')
              .split('\n')
              .map((text, index) => (
                <span style={{ display: 'block' }} key={index}>
                  {text}
                </span>
              ))}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="h4"
            sx={{ paddingTop: '20px' }}
            className="legal-notice-title"
          >
            {useNextTranslate('legalnotice:ui_block_title_5')}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="body2"
            className="legal-notice-sub-title"
            sx={{ paddingTop: '10px' }}
          >
            {useNextTranslate('legalnotice:ui_block_text_d_6')}
            <br></br>
            <a
              target="_blank"
              href=" https://ec.europa.eu/consumers/odr/ "
              className="custom-link"
            >
              {useNextTranslate('legalnotice:ui_block_text_d_link_6')}
            </a>
            <br></br>
            {useNextTranslate('legalnotice:ui_block_text_d_7')}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="h4"
            sx={{ paddingTop: '20px' }}
            className="legal-notice-title"
          >
            {useNextTranslate('legalnotice:ui_block_title_6')}
          </Typography>
        </Fade>
        <Fade triggerOnce>
          <Typography
            variant="body2"
            className="legal-notice-sub-title"
            sx={{ paddingTop: '10px' }}
          >
            {useNextTranslate('legalnotice:ui_block_text_8')}
          </Typography>
        </Fade>
      </Container>
    </>
  );
};

export default LegalNotice;
