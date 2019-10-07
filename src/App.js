import React from 'react';

import './App.css';
import Resource from './components/resource'
import { Pane } from 'evergreen-ui'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Idle Component!</title>
      </Helmet>
      <Pane display="flex" flexDirection="row">
        <Resource name="wood" />
        <Resource name="iron" />
        <Resource name="oil" />
      </Pane>
    </>
  );
}

export default App;
