//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import { Button } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

//Custom Components import
//Custom Link based on Next Link
import CustomNextLink from '../../../CustomNextLink';

//Portfolio Link page Button Component
const PortfolioLinkMobileBtn = () => {
  //Giving the original next-translate function (called "t") a better name
  const { t: useNextTranslate } = useTranslation();

  return (
    <>
      <Button
        component={CustomNextLink}
        noLinkStyle
        target="_blank"
        href="https://dribbble.com/"
        className="cross-section-btn--outlined"
        variant="outlined"
        endIcon={<NorthEastIcon />}
      >
        {useNextTranslate('home:ui_cross_section_portfolio_btn-mobile')}
      </Button>
    </>
  );
};

export default PortfolioLinkMobileBtn;
