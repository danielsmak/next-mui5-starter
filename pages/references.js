//Import react library
import React from 'react';

//Import NextSeo for different SEO functions
import { NextSeo } from 'next-seo';

//Next Head import
import Head from 'next/head';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//MUI5 Components import
import {
  Grid,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useTranslation from 'next-translate/useTranslation';

//Refences Page Component with lang Prop
const ReferencesPage = ({ lang }) => {
  //Giving the original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  // Dynamically import the appropriate content json translations based on the current locale in next-translate.
  const content = require(`../locales/${lang}/dynamic-content/references_content.json`);

  //Variables for SEO-Translations that are needed for the OpenGraph section in NextSeo.
  const openGraphURL = useNextTranslate('references:og_page_url');
  const openGraphTitle = useNextTranslate('references:og_page_title');
  const openGraphDescr = useNextTranslate('references:og_page_description');
  const openGraphImgAlt = useNextTranslate('references:og_page_img1_alt');
  const openGraphSiteName = useNextTranslate('references:og_page_sitename');

  return (
    <>
      <NextSeo
        noindex={true}
        title={useNextTranslate('references:page_title')}
        description={useNextTranslate('references:meta_description')}
        canonical={useNextTranslate('references:page_canonical')}
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
          content={useNextTranslate('references:page_keywords')}
        />
      </Head>
      <div className="theme-section">
        <Container maxWidth="lg" sx={{ minHeight: '75vh' }}>
          <div className="view-description__wrapper">
            <Fade triggerOnce>
              <Typography className="view-description__title" variant="h2">
                {useNextTranslate('references:ui_page_title')}
              </Typography>
            </Fade>
            <Fade triggerOnce>
              <Typography
                className="view-description__sub-title"
                variant="body1"
              >
                {useNextTranslate('references:ui_page_subtitle')}
              </Typography>
            </Fade>
          </div>

          <Grid
            textAlign={{
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
            }}
            alignContent={{
              xs: 'normal',
              sm: 'normal',
              md: 'center',
              lg: 'center',
            }}
            justifyContent={{
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              justifyContent="center"
            >
              <Grid container>
                {content.map((reference) => (
                  <Grid
                    key={reference.reference_card_id}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className="resume-card-grid"
                  >
                    <Fade triggerOnce>
                      <Accordion
                        className="resume-work-exp-card"
                        sx={{ borderRadius: '15px!important' }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="resume-work-exp-card__header"
                          id="resume-work-exp-card__header"
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignContent: 'center',
                              alignSelf: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Avatar
                              sx={{
                                width: 60,
                                height: 60,
                                marginRight: '15px',
                              }}
                              src={reference.reference_card_image}
                            ></Avatar>
                            <div className="resume-work-exp-card__text-wrapper">
                              <Typography className="resume-work-exp-card__job-title">
                                {reference.reference_card_name}
                              </Typography>
                              <Typography className="resume-work-exp-card__firm-title">
                                {reference.reference_card_job_title}
                              </Typography>
                            </div>
                          </div>
                        </AccordionSummary>

                        <AccordionDetails>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              textAlign: 'left',
                              whiteSpace: 'pre-wrap',
                            }}
                          >
                            <Typography className="resume-work-exp-card__task-description">
                              {reference.reference_card_description}
                              <br></br>
                            </Typography>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ReferencesPage;
