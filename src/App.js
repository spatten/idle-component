import React from 'react';

import './App.css';
import Resource from './components/resource'
import Building from './components/building'
import { majorScale, Heading, Pane } from 'evergreen-ui'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Idle Component!</title>
        {/* This style and the following meta tag prevent zooming in on mobile, which is really annoying when you're just clicking on buttons */}
        <style type="text/css">{`
          body {
            touch-action: manipulation;
          }
        `}</style>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
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
          <Building name="hut" />
        </Pane>
      </Pane>
    </>
  );
}

export default App;
