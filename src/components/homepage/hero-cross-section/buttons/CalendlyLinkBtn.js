//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Button } from '@mui/material';

//Custom Components import
//Custom Link based on Next Link
import CustomNextLink from '../../../CustomNextLink';

//Calendly Appointement Button Component
const CalendlyLinkBtn = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Button
        sx={{ width: '130px' }}
        target="_blank"
        component={CustomNextLink}
        noLinkStyle
        href="https://calendly.com/"
        className="cross-section-btn--contained"
        variant="contained"
      >
        {useNextTranslate('home:ui_cross_section_calendly_btn')}
      </Button>
    </>
  );
};

export default CalendlyLinkBtn;
