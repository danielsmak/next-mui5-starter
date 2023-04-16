//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//Import MUI5 Components
import { Typography } from '@mui/material';

//Footer Signature Component
const FooterSignature = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Typography className="custom-footer__signature" variant="body2">
        {useNextTranslate('common:ui_footer_signature')}{' '}
        {new Date().getFullYear()}{' '}
      </Typography>
    </>
  );
};
export default FooterSignature;
