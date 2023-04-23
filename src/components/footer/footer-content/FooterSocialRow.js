//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Import MUI5 Components
import { Grid, Typography } from '@mui/material';

//Import custom components
import CustomNextLink from '../../CustomNextLink';

//Footer Social Links Component
const FooterSocialRow = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={2} sx={{ padding: '10px' }}>
        <div className="footer-grid-wrapper">
          <Typography className="footer-link__section-title" variant="h4">
            {useNextTranslate('common:ui_footer_column_title_3')}
          </Typography>
          <CustomNextLink target="_blank" href="https://www.linkedin.com/">
            <Typography
              className="footer-link"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              LinkedIn
            </Typography>
          </CustomNextLink>
          <CustomNextLink target="_blank" href="https://www.xing.com/">
            <Typography
              className="footer-link"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              Xing
            </Typography>
          </CustomNextLink>
          <CustomNextLink target="_blank" href="https://dribbble.com/">
            <Typography
              className="footer-link"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              Dribbble
            </Typography>
          </CustomNextLink>
        </div>
      </Grid>
    </>
  );
};
export default FooterSocialRow;
