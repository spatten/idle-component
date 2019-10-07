import React from 'react';

import './App.css';
import Resource from './components/resource'
import { majorScale, Pane } from 'evergreen-ui'

function App() {
  return (
    <Pane display="flex" flexDirection="row">
      <Resource name="wood" />
      <Resource name="iron" />
    </Pane>
  );
}

export default App;
