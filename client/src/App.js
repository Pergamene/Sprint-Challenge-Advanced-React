import React from 'react';

import Players from './components/Players.jsx';
import { useStyles } from './hooks/useStyles.js';

function App() {
  const classes = useStyles();
  return (
    <div className={`App ${classes.app}`}>
      <Players />
    </div>
  );
}

export default App;
