//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Grid, Typography } from '@mui/material';

//Custom Components import
import FooterLogoDark from './logo/FooterLogoDark';
import FooterLogoLight from './logo/FooterLogoLight';

//Logo with Subtext Component
const FooterLogoSubText = ({ isDark }) => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={6} sx={{ padding: '10px' }}>
        <div className="footer-grid-wrapper">
          <div className="footer__logo-wrapper">
            {isDark ? <FooterLogoDark /> : <FooterLogoLight />}
            <Typography
              className="footer__logo-sub-text"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              {useNextTranslate('common:ui_footer_sublogo_text')}
            </Typography>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default FooterLogoSubText;
