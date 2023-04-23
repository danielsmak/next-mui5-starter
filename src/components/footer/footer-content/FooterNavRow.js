//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Import Next Link
import Link from 'next/link';

//Import MUI5 Components
import { Grid, Typography } from '@mui/material';

//Footer Navigation Component
const FooterNavRow = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={2} sx={{ padding: '10px' }}>
        <div className="footer-grid-wrapper">
          <Typography className="footer-link__section-title" variant="h4">
            {useNextTranslate('common:ui_footer_column_title_1')}
          </Typography>
          <Link href="/">
            <Typography
              className="footer-link"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              {useNextTranslate('common:ui_footer_nav_1')}
            </Typography>
          </Link>

          <Link href="/resume">
            <Typography
              className="footer-link"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              {useNextTranslate('common:ui_footer_nav_3')}
            </Typography>
          </Link>

          <Link href="/references">
            <Typography
              className="footer-link"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              {useNextTranslate('common:ui_footer_nav_4')}
            </Typography>
          </Link>

          <Link href="/files">
            <Typography
              className="footer-link"
              sx={{ textAlign: 'left' }}
              variant="body2"
            >
              {useNextTranslate('common:ui_footer_nav_5')}
            </Typography>
          </Link>
        </div>
      </Grid>
    </>
  );
};
export default FooterNavRow;
