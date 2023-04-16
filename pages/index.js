//Next Head import
import Head from 'next/head';

//Import NextSeo for different SEO functions
import { NextSeo } from 'next-seo';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Custom Components import
import HeroCrossSection from '../src/components/homepage/hero-cross-section/HeroCrossSection';
import ServiceCardsSection from '../src/components/homepage/service-cards-section/ServiceCardsSection';

//Home Page Component with isDark Prop (for dark / light theme switcher)
const Home = ({ isDark }) => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  //Variables for SEO-Translations that are needed for the OpenGraph section in NextSeo.
  const openGraphURL = useNextTranslate('home:og_page_url');
  const openGraphTitle = useNextTranslate('home:og_page_title');
  const openGraphDescr = useNextTranslate('home:og_page_description');
  const openGraphImgAlt = useNextTranslate('home:og_page_img1_alt');
  const openGraphSiteName = useNextTranslate('home:og_page_sitename');

  return (
    <>
      <NextSeo
        title={useNextTranslate('pages/home:page_title')}
        description={useNextTranslate('pages/home:meta_description')}
        canonical={useNextTranslate('pages/home:page_canonical')}
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
        <title>{useNextTranslate('home:page_title')}</title>
        <meta
          name="description"
          content={useNextTranslate('home:meta_description')}
        />
      </Head>
      <HeroCrossSection isDark={isDark} />
      <ServiceCardsSection isDark={isDark} />
    </>
  );
};

export default Home;
