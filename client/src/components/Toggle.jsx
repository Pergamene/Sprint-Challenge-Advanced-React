import React from 'react';

import { useStyles } from '../hooks/useStyles.js';

const Toggle = props => {
  const classes = useStyles();
  const {darkMode, setDarkMode} = props;
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? classes.darkModeToggled : classes.darkModeToggle}>
      <div
        onClick={toggleMode}
        className={darkMode ? classes.toggled : classes.toggle}
      />
    </div>
  );
}

export default Toggle;
