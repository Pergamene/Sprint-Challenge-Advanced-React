import React from 'react';
import * as rtl from '@testing-library/react';
import Players from '../Players.jsx';

test('renders Players without crashing', () => {
  rtl.render(<Players />);
});
