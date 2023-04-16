//Import react library
import React from 'react';

//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Certificates Section Component with lang Prop (which is used to know which langauge the app has to load the appropriate  translated JSON data)
const CertSection = ({ lang }) => {
  //Giving the original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  // Dynamically import the appropriate content json translations based on the current locale in next-translate.

  const content = require(`../../../locales/${lang}/dynamic-content/certificates_content.json`);

  return (
    <>
      <div className="resume-block-description__wrapper">
        <Fade triggerOnce>
          <Typography className="resume-block-description__title" variant="h6">
            {useNextTranslate('resume:ui_resume-block-title-3')}
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
            {content.map((certificatecard) => (
              <Grid
                item
                key={certificatecard.certificate_card_id}
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
                      <div className="resume-work-exp-card__text-wrapper">
                        <Typography className="resume-work-exp-card__date-title">
                          {certificatecard.certificate_card_date}
                        </Typography>
                        <Typography className="resume-work-exp-card__job-title">
                          {certificatecard.certificate_card_name}
                        </Typography>
                        <Typography className="resume-work-exp-card__firm-title">
                          {certificatecard.certificate_card_edu_type}
                        </Typography>
                        <Typography className="resume-work-exp-card__firm-title">
                          {certificatecard.certificate_card_place}
                        </Typography>
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
                          {certificatecard.certificate_card_description}
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
    </>
  );
};

export default CertSection;
