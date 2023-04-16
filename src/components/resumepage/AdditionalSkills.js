//Import react library
import React from 'react';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Typography, Stack, Chip } from '@mui/material';

//Additional Skills Section Component with lang Prop (which is used to know which langauge the app has to load the appropriate  translated JSON data)
const AdditionalSkills = ({ lang }) => {
  //Giving the original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  // Dynamically import the appropriate content json translations based on the current locale in next-translate.
  const content = require(`../../../locales/${lang}/dynamic-content/additionalskills_content.json`);

  return (
    <>
      <div className="resume-block-description__wrapper">
        <Fade triggerOnce>
          <Typography className="resume-block-description__title" variant="h6">
            {useNextTranslate('resume:ui_resume-block-title-7')}
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
          {content.map((additionalskills) => (
            <div
              key={additionalskills.additionalskills_chip_id}
              style={{ padding: '3px' }}
            >
              <Chip
                className="resume-chip"
                label={additionalskills.additionalskills_chip_name}
              />
            </div>
          ))}
        </Stack>
      </Fade>
    </>
  );
};

export default AdditionalSkills;
