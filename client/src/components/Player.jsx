import React from 'react';

import { useStyles } from '../hooks/useStyles.js';

const Player = props => {
  const classes = useStyles();
  const { name, country, searches } = props.player;
  return (
    <div className={classes.card} >
      <h2 className={classes.h2} >{name}</h2>
      <p className={classes.p} >Country: {country}</p>
      <p className={classes.p} >Searches: {searches}</p>
    </div>
  );
}

export default Player;
