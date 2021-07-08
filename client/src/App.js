import React from 'react';

import Players from './components/Players.jsx';
import Counter from './components/Counter.jsx';
import { useStyles } from './hooks/useStyles.js';
import { useDarkMode } from './hooks/useDarkMode.jsx';

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className={`App ${darkMode ? classes.appDM : classes.app}`}>
      <Players darkMode={darkMode} setDarkMode={setDarkMode} />
      <Counter />
    </div>
  );
}

export default App;
