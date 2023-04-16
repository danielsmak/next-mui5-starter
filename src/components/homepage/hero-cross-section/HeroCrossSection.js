//Animation Framework import
import { Fade } from 'react-awesome-reveal';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Grid, Container, Box, Typography } from '@mui/material';

//Custom Components import
import ProfilePictureDark from './images/ProfilePictureDark';
import ProfilePictureLight from './images/ProfilePictureLight';
import CalendlyLinkBtn from './buttons/CalendlyLinkBtn';
import CalendlyLinkMobileBtn from './buttons/CalendlyLinkMobileBtn';
import PortfolioLinkBtn from './buttons/PortfolioLinkBtn';
import PortfolioLinkMobileBtn from './buttons/PortfolioLinkBtnMobile';

//Home Page Component with isDark Prop (for dark / light theme switcher)
const HeroCrossSection = ({ isDark }) => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <div className="theme-section--no-bottom-padding">
        <Container maxWidth="lg">
          <Grid
            container
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
            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
              <Grid
                container
                flexWrap={{
                  xs: 'wrap-reverse',
                  sm: 'wrap-reverse',
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={7}
                  md={7}
                  lg={7}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'center!important',
                    flexDirection: 'column',
                    textAlign: 'left',
                    padding: '10px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignSelf: {
                        xl: 'normal',
                        lg: 'normal',
                        md: 'normal',
                        sm: 'normal',
                        xs: 'normal',
                      },
                      flexDirection: 'column',
                      textAlign: 'left',
                    }}
                  >
                    <Fade triggerOnce>
                      <Typography variant="h1">
                        {useNextTranslate('home:ui_cross_section_title_1')}
                      </Typography>
                    </Fade>

                    <Fade triggerOnce>
                      <Typography color="primary" variant="h1">
                        {useNextTranslate('home:ui_cross_section-title_2')}
                      </Typography>
                    </Fade>

                    <Fade triggerOnce>
                      <Typography
                        sx={{
                          marginTop: {
                            xl: '10px',
                            lg: '10px',
                            md: '10px',
                            sm: '10px',
                            xs: '10px',
                          },
                        }}
                        variant="subtitle1"
                      >
                        {useNextTranslate('home:ui_cross_section_subtitle')}
                      </Typography>
                    </Fade>

                    <Fade triggerOnce>
                      <div className="cross-section__double-btn-wrapper">
                        <CalendlyLinkBtn />
                        <PortfolioLinkBtn />
                      </div>

                      <div className="cross-section__double-btn-wrapper-mobile">
                        <CalendlyLinkMobileBtn sx={{ width: '130px' }} />
                        <PortfolioLinkMobileBtn sx={{ width: '130px' }} />
                      </div>
                    </Fade>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  md={5}
                  lg={5}
                  sx={{ padding: '10px' }}
                >
                  <Box className="cross-section__box-img-wrapper--right">
                    <Fade triggerOnce>
                      {isDark ? (
                        <ProfilePictureDark />
                      ) : (
                        <ProfilePictureLight />
                      )}
                    </Fade>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HeroCrossSection;
