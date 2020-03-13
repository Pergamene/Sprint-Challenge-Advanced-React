import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import GetRequest from '../services/GetRequest.js';
import Player from './Player.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  h1: {
    width: '100%',
    textAlign: 'center',
  },
}

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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1 className={classes.h1} >Players</h1>
        {this.state.players.map(player => {
          return <Player className={classes.player} player={player} key={player.id} /> 
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Players);
