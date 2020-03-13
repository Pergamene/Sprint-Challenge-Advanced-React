import React from 'react';

import { useStyles } from '../hooks/useStyles.js';

const Player = props => {
  const classes = useStyles();
  const { darkMode } = props;
  const { name, country, searches } = props.player;
  return (
    <div className={darkMode ? classes.cardDM : classes.card} >
      <h2 className={darkMode ? classes.h2DM : classes.h2} >{name}</h2>
      <p className={darkMode ? classes.pDM : classes.p} >Country: {country}</p>
      <p className={darkMode ? classes.pDM : classes.p} >Searches: {searches}</p>
    </div>
  );
}

export default Player;
