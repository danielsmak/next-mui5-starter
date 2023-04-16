//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Grid, Container, Typography, Paper } from '@mui/material';

//Services Section with "isDark Prop" (for dark / light theme switcher)
const ServiceCardsSection = ({ isDark }) => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <div className="top-to-btm">
        <div className="theme-section--no-top-padding">
          <Container maxWidth="lg">
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
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      padding: {
                        xl: '10px',
                        lg: '10px',
                        md: '10px',
                        sm: '5px',
                        xs: '5px',
                      },
                    }}
                  >
                    <Fade triggerOnce>
                      <Paper className="service-card">
                        <Typography
                          className="service-card__label"
                          variant="label"
                        >
                          {useNextTranslate(
                            'home:ui_services_block_subtitle_1'
                          )}
                        </Typography>
                        <Typography
                          className="service-card__title"
                          variant="h4"
                        >
                          {useNextTranslate('home:ui_services_block_title_1')}
                        </Typography>

                        <div className="service-card__text-wrapper">
                          <Typography
                            className="service-card__bodytext"
                            variant="body2"
                          >
                            {useNextTranslate(
                              'home:ui_services_block_description_1'
                            )}
                          </Typography>
                        </div>
                      </Paper>
                    </Fade>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      padding: {
                        xl: '10px',
                        lg: '10px',
                        md: '10px',
                        sm: '5px',
                        xs: '5px',
                      },
                    }}
                  >
                    <Fade triggerOnce>
                      <Paper className="service-card">
                        <Typography
                          className="service-card__label"
                          variant="label"
                        >
                          {useNextTranslate(
                            'home:ui_services_block_subtitle_2'
                          )}
                        </Typography>
                        <Typography
                          className="service-card__title"
                          variant="h4"
                        >
                          {useNextTranslate('home:ui_services_block_title_2')}
                        </Typography>
                        <div className="service-card__text-wrapper">
                          <Typography
                            className="service-card__bodytext"
                            variant="body2"
                          >
                            {useNextTranslate(
                              'home:ui_services_block_description_2'
                            )}
                          </Typography>
                        </div>
                      </Paper>
                    </Fade>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      padding: {
                        xl: '10px',
                        lg: '10px',
                        md: '10px',
                        sm: '5px',
                        xs: '5px',
                      },
                    }}
                  >
                    <Fade triggerOnce>
                      <Paper className="service-card">
                        <Typography
                          className="service-card__label"
                          variant="label"
                        >
                          {useNextTranslate(
                            'home:ui_services_block_subtitle_2'
                          )}
                        </Typography>
                        <Typography
                          className="service-card__title"
                          variant="h4"
                        >
                          {useNextTranslate('home:ui_services_block_title_3')}
                        </Typography>
                        <div className="service-card__text-wrapper">
                          <Typography
                            className="service-card__bodytext"
                            variant="body2"
                          >
                            {useNextTranslate(
                              'home:ui_services_block_description_3'
                            )}
                          </Typography>
                        </div>
                      </Paper>
                    </Fade>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      padding: {
                        xl: '10px',
                        lg: '10px',
                        md: '10px',
                        sm: '5px',
                        xs: '5px',
                      },
                    }}
                  >
                    <Fade triggerOnce>
                      <Paper className="service-card">
                        <Typography
                          className="service-card__label"
                          variant="label"
                        >
                          {useNextTranslate(
                            'home:ui_services_block_subtitle_3'
                          )}
                        </Typography>
                        <Typography
                          className="service-card__title"
                          variant="h4"
                        >
                          {useNextTranslate('home:ui_services_block_title_4')}
                        </Typography>
                        <div className="service-card__text-wrapper">
                          <Typography
                            className="service-card__bodytext"
                            variant="body2"
                          >
                            {useNextTranslate(
                              'home:ui_services_block_description_4'
                            )}
                          </Typography>
                        </div>
                      </Paper>
                    </Fade>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      padding: {
                        xl: '10px',
                        lg: '10px',
                        md: '10px',
                        sm: '5px',
                        xs: '5px',
                      },
                    }}
                  >
                    <Fade triggerOnce>
                      <Paper className="service-card">
                        <Typography
                          className="service-card__label"
                          variant="label"
                        >
                          {useNextTranslate(
                            'home:ui_services_block_subtitle_1'
                          )}
                        </Typography>
                        <Typography
                          className="service-card__title"
                          variant="h4"
                        >
                          {useNextTranslate('home:ui_services_block_title_5')}
                        </Typography>
                        <div className="service-card__text-wrapper">
                          <Typography
                            className="service-card__bodytext"
                            variant="body2"
                          >
                            {useNextTranslate(
                              'home:ui_services_block_description_5'
                            )}
                          </Typography>
                        </div>
                      </Paper>
                    </Fade>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      padding: {
                        xl: '10px',
                        lg: '10px',
                        md: '10px',
                        sm: '5px',
                        xs: '5px',
                      },
                    }}
                  >
                    <Fade triggerOnce>
                      <Paper className="service-card">
                        <Typography
                          className="service-card__label"
                          variant="label"
                        >
                          {useNextTranslate(
                            'home:ui_services_block_subtitle_4'
                          )}
                        </Typography>
                        <Typography
                          className="service-card__title"
                          variant="h4"
                        >
                          {useNextTranslate('home:ui_services_block_title_6')}
                        </Typography>
                        <div className="service-card__text-wrapper">
                          <Typography
                            className="service-card__bodytext"
                            variant="body2"
                          >
                            {useNextTranslate(
                              'home:ui_services_block_description_6'
                            )}
                          </Typography>
                        </div>
                      </Paper>
                    </Fade>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};
export default ServiceCardsSection;
