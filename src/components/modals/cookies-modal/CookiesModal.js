//Import react library
import React from 'react';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Import Custom Components
import CookiesSettingsModal from './CookiesModalSettings';

const cookiesAccepted = 'Cookies consent accepted';
const cookiesNotAccepted = 'Cookies consent were not accepted';

//Cookies Modal Dialogue Component
const CookiesModal = () => {
  //use State hook open state of a cookie dialog
  const [open, setOpen] = React.useState(false);
  const [cookieStatus, setCookieStatus] = React.useState(cookiesNotAccepted);
  const [showSettings, setShowSettings] = React.useState(false);

  //Giving original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  const handleClose = (status) => {
    //if status variable equal to the string "Cookies consent accepted" set the item "cookies" with the status "Cookies consent accepted"
    if (status === cookiesAccepted) {
      localStorage.setItem('cookies', status);
      setCookieStatus(status);
    }
    //Dialogue State - closed.
    setOpen(false);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  //useEffect hook for checking if cookies item from localstrage is equal to "Cookies consent accepted"
  React.useEffect(() => {
    if (localStorage.getItem('cookies') === cookiesAccepted) {
      setCookieStatus(localStorage.getItem('cookies'));
    }
    //Dialogue State - opened
    setOpen(true);
  }, []);

  return (
    <>
      {cookieStatus !== 'Cookies consent accepted' && (
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            🍪 {useNextTranslate('common:ui_cookie_title')}
          </DialogTitle>

          <div className="content">
            {showSettings ? (
              <CookiesSettingsModal onBackClick={toggleSettings} />
            ) : (
              <>
                <DialogContent>
                  <DialogContentText
                    sx={{ marginBottom: '15px' }}
                    id="alert-dialog-description"
                  >
                    {useNextTranslate('common:ui_cookie_main_text')}
                  </DialogContentText>
                  <Accordion sx={{ marginTop: '20px' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        {' '}
                        {useNextTranslate('common:ui_cookie_faq_text_1')}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {useNextTranslate('common:ui_cookie_faq_reply_1')}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        {' '}
                        {useNextTranslate('common:ui_cookie_faq_text_2')}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {useNextTranslate('common:ui_cookie_faq_reply_2')}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        {' '}
                        {useNextTranslate('common:ui_cookie_faq_text_3')}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {useNextTranslate('common:ui_cookie_faq_reply_3')}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </DialogContent>

                <DialogActions>
                  <Button onClick={() => setShowSettings(true)}>
                    {useNextTranslate('common:ui_cookie_preferences')}
                  </Button>

                  <Button
                    onClick={() => handleClose('Cookies consent accepted')}
                    autoFocus
                  >
                    {useNextTranslate('common:ui_cookie_confirm_text')}
                  </Button>
                </DialogActions>
              </>
            )}
          </div>
        </Dialog>
      )}
    </>
  );
};

export default CookiesModal;
