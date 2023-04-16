//Import react library
import React from 'react';

//Next Head import
import Head from 'next/head';

//Import NextSeo for different SEO functions
import { NextSeo } from 'next-seo';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//MUI5 Components import
import {
  Container,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';

import AssignmentIcon from '@mui/icons-material/Assignment';
import DownloadIcon from '@mui/icons-material/Download';

//Custom Components import
//Custom Link based on Next Link
import CustomNextLink from '../src/components/CustomNextLink';

//Files Page Component with lang Prop (which is used to dynamically import the appropriate content JSON translations based on the current locale in next-translate.)
const FilesPage = ({ lang }) => {
  //Giving the original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  // Dynamically import the appropriate content json translations based on the current locale in next-translate.
  const content = require(`../locales/${lang}/dynamic-content/content_files.json`);

  //Variables for SEO-Translations that are needed for the OpenGraph section in NextSeo.
  const openGraphURL = useNextTranslate('files:og_page_url');
  const openGraphTitle = useNextTranslate('files:og_page_title');
  const openGraphDescr = useNextTranslate('files:og_page_description');
  const openGraphImgAlt = useNextTranslate('files:og_page_img1_alt');
  const openGraphSiteName = useNextTranslate('files:og_page_sitename');

  return (
    <>
      <NextSeo
        title={useNextTranslate('files:page_title')}
        description={useNextTranslate('files:meta_description')}
        canonical={useNextTranslate('files:page_canonical')}
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
        <title>{useNextTranslate('files:page_title')}</title>
        <meta
          name="description"
          content={useNextTranslate('files:meta_description')}
        />
      </Head>

      <div className="theme-section">
        <Container maxWidth="lg">
          <div className="view-description__wrapper">
            <Fade triggerOnce>
              <Typography className="view-description__title" variant="h2">
                {useNextTranslate('files:ui_page_title')}
              </Typography>
            </Fade>
            <Fade triggerOnce>
              <Typography
                className="view-description__sub-title"
                variant="body1"
              >
                {useNextTranslate('files:ui_page_subtitle')}
              </Typography>
            </Fade>
          </div>

          <div className="file-list__wrapper">
            {content.map((fileitem) => (
              <List className="file-card" key={fileitem.file_list_item_id}>
                <Fade triggerOnce>
                  <ListItem
                    secondaryAction={
                      <IconButton
                        aria-label="Lebenslauf"
                        target="_blank"
                        component={CustomNextLink}
                        noLinkStyle
                        href={fileitem.file_list_item_download_link}
                      >
                        <DownloadIcon
                          className="file-card__download-icon"
                          sx={{ color: 'black' }}
                        />
                      </IconButton>
                    }
                  >
                    <ListItemIcon className="file-card__document-icon">
                      <AssignmentIcon />
                    </ListItemIcon>

                    <ListItemText
                      primary={fileitem.file_list_item_name}
                      secondary={fileitem.file_list_item_tag}
                    />
                  </ListItem>
                </Fade>
              </List>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default FilesPage;
