//Import react library
import React from 'react';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Typography, Stack, Chip, Avatar } from '@mui/material';

//Language Skills Section Component with lang Prop (which is used to know which langauge the app has to load the appropriate  translated JSON data)
const LangSkills = ({ lang }) => {
  //Giving the original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  // Dynamically import the appropriate content json translations based on the current locale in next-translate.

  const content = require(`../../../locales/${lang}/dynamic-content/languageskills_content.json`);

  return (
    <>
      <div className="resume-block-description__wrapper">
        <Fade triggerOnce>
          <Typography className="resume-block-description__title" variant="h6">
            {useNextTranslate('resume:ui_resume-block-title-8')}
          </Typography>
        </Fade>
      </div>

      <Fade triggerOnce>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0',
            padding: '5px',
          }}
        >
          {content.map((languageskills) => (
            <div
              key={languageskills.languageskills_chip_id}
              style={{ padding: '3px' }}
            >
              <Chip
                avatar={
                  <Avatar
                    alt={languageskills.languageskills_chip_image_alt_name}
                    src={languageskills.languageskills_chip_image}
                  />
                }
                className="resume-chip"
                variant="contained"
                label={languageskills.languageskills_chip_name}
              />
            </div>
          ))}
        </Stack>
      </Fade>
    </>
  );
};

export default LangSkills;
