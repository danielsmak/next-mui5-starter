//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Grid, Container, Divider } from '@mui/material';

//Custom Components import
import FooterLogoSubText from './footer-content/logo-sub-text/FooterLogoSubText';
import FooterNavRow from './footer-content/FooterNavRow';
import FooterInfoRow from './footer-content/FooterInfoRow';
import FooterSocialRow from './footer-content/FooterSocialRow';
import FooterSignature from './signature/FooterSignature';

//AppFooter Component with "isDark Prop" (for dark / light theme switcher)
const AppFooter = ({ isDark }) => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <div className="custom-footer">
      <Container className="custom-footer__wrapper">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container>
            <FooterLogoSubText isDark={isDark} />
            <FooterNavRow />
            <FooterInfoRow />
            <FooterSocialRow />
          </Grid>
        </Grid>
      </Container>
      <Divider></Divider>
      <Grid>
        <Container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ paddingTop: '20px', paddingBottom: '20px' }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6}></Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ padding: '10px' }}
              >
                <FooterSignature></FooterSignature>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default AppFooter;
