import React from 'react';

import './App.css';
import Resource from './components/resource'
import { majorScale, Heading, Pane } from 'evergreen-ui'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Idle Component!</title>
      </Helmet>
      <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
        <Heading>Resources</Heading>
        <Pane display="flex" flexDirection="row">
          <Resource name="wood" />
          <Resource name="iron" />
          <Resource name="oil" />
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
        <Heading>Buildings</Heading>
        <Pane display="flex" flexDirection="row">
          <Resource name="wood" />
          <Resource name="iron" />
          <Resource name="oil" />
        </Pane>
      </Pane>
    </>
  );
}

export default App;
