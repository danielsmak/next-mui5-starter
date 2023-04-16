//Import react library
import React from 'react';

//Import NextSeo for different SEO functions
import { NextSeo } from 'next-seo';

//Next Head import
import Head from 'next/head';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Container, Typography } from '@mui/material';

//Import custom components
import JobExpSection from '../src/components/resumepage/JobExpSection';
import EduSection from '../src/components/resumepage/EduSection';
import CertSection from '../src/components/resumepage/CertSection';
import UXSkills from '../src/components/resumepage/UXSkills';
import FrontendSkills from '../src/components/resumepage/FrontendSkills';
import AdditionalSkills from '../src/components/resumepage/AdditionalSkills';
import PersonalSkills from '../src/components/resumepage/PersonalSkills';
import LangSkills from '../src/components/resumepage/LangSkills';

//Resume Page Component with lang Prop (which is used to know which langauge the app has to load the appropriate  translated JSON data)
const ResumePage = ({ lang }) => {
  //Giving the original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  //Variables for SEO-Translations that are needed for the OpenGraph section in NextSeo.
  const openGraphURL = useNextTranslate('resume:og_page_url');
  const openGraphTitle = useNextTranslate('resume:og_page_title');
  const openGraphDescr = useNextTranslate('resume:og_page_description');
  const openGraphImgAlt = useNextTranslate('resume:og_page_img1_alt');
  const openGraphSiteName = useNextTranslate('resume:og_page_sitename');

  return (
    <>
      <NextSeo
        noindex={true}
        title={useNextTranslate('resume:page_title')}
        description={useNextTranslate('resume:meta_description')}
        canonical={useNextTranslate('resume:page_canonical')}
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
          content={useNextTranslate('resume:page_keywords')}
        />
      </Head>

      <div className="theme-section">
        <Container maxWidth="lg">
          <div className="view-description__wrapper">
            <Fade triggerOnce>
              <Typography className="view-description__title" variant="h2">
                {useNextTranslate('resume:ui_page_title')}
              </Typography>
            </Fade>
            <Fade triggerOnce>
              <Typography
                className="view-description__sub-title"
                variant="body1"
              >
                {useNextTranslate('resume:ui_page_subtitle')}
              </Typography>
            </Fade>
          </div>

          <JobExpSection lang={lang} />
          <EduSection lang={lang} />
          <CertSection lang={lang} />
          <UXSkills lang={lang} />
          <FrontendSkills lang={lang} />
          <AdditionalSkills lang={lang} />
          <PersonalSkills lang={lang} />
          <LangSkills lang={lang} />
        </Container>
      </div>
    </>
  );
};

export default ResumePage;
