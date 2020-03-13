import React from 'react';

const Player = props => {
  const { name, country, searches } = props.player;
  return (
    <div>
      <h2>{name}</h2>
      <p>Country: {country}</p>
      <p>Searches: {searches}</p>
    </div>
  );
}

export default Player;
