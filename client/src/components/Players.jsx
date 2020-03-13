import React from 'react';

import GetRequest from '../services/GetRequest.js';
import Player from './Player.jsx';

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    const getData = async () => {
      const result = await GetRequest.getRequest();
      this.setState({players: result.players});
    }
    getData();
  }

  render() {
    return (
      <div>
        <h1>Players</h1>
        {this.state.players.map(player => {
          return <Player player={player} key={player.id} /> 
        })}
      </div>
    );
  }
}

export default Players;
