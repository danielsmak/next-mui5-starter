//Import react library
import React, { useState, useEffect } from 'react';

//Import MUI5 Components
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

//Scroll Up Button Component
const ScrollUpButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <Fab
          className="scroll-up-btn"
          color="themePaperColor"
          onClick={goToTop}
        >
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </Fab>
      )}
    </div>
  );
};

export default ScrollUpButton;
