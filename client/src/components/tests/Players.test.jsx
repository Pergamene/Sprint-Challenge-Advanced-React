import React from 'react';
import ReactDOM from 'react-dom';
import Players from '../Players.jsx';

it('renders Players without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Players />, div);
  ReactDOM.unmountComponentAtNode(div);
});
