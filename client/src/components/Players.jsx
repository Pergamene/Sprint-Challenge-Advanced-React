import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import GetRequest from '../services/GetRequest.js';
import Player from './Player.jsx';
import Toggle from './Toggle.jsx';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  players: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  h1: {
    textAlign: 'center',
    margin: '20px 0',
    paddingLeft: '20px',
  },
  h1DM: {
    textAlign: 'center',
    margin: '20px 0',
    paddingLeft: '20px',
    color: '#eee',
  }
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
    const { classes, darkMode } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <h1 className={darkMode ? classes.h1DM : classes.h1} >Players</h1>
          <Toggle darkMode={this.props.darkMode} setDarkMode={this.props.setDarkMode} />
        </div>
        <div className={classes.players}>
          {this.state.players.map(player => {
            return <Player player={player} key={player.id} darkMode={this.props.darkMode} />
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Players);
