//Import react library
import React, { useState } from 'react';

//Next-Translate library import
import useTranslation from 'next-translate/useTranslation';

//MUI5 Components import
import {
  Typography,
  Button,
  Dialog,
  FormGroup,
  FormControlLabel,
  Switch,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Cookies Modal Dialogue Component
const CookiesSettingsModal = ({ onBackClick }) => {
  //Giving original next-translate function called "t" a better name
  const { t: useNextTranslate } = useTranslation();

  // Read the value of analyticsEnabled from local storage when the component mounts
  const [analyticsEnabled, setAnalyticsEnabled] = useState(
    localStorage.getItem('analyticsEnabled') === 'true'
  );

  return (
    <>
      <div className="content">
        <DialogContent>
          <DialogContentText
            sx={{ marginBottom: '15px' }}
            id="alert-dialog-description"
          >
            {useNextTranslate('common:ui_cookie_main_text')}
          </DialogContentText>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={analyticsEnabled}
                  onChange={(event) =>
                    setAnalyticsEnabled(event.target.checked)
                  }
                  name="analyticsEnabled"
                />
              }
              label={useNextTranslate(
                'common:ui_cookie_preferences_vercel_analytics'
              )}
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onBackClick}>
            {useNextTranslate('common:ui_cookie_preferences_back')}
          </Button>
          <Button
            onClick={() => {
              localStorage.setItem('analyticsEnabled', analyticsEnabled);
              onBackClick();
            }}
          >
            {useNextTranslate('common:ui_cookie_preferences_save')}
          </Button>
        </DialogActions>
      </div>
    </>
  );
};

export default CookiesSettingsModal;
