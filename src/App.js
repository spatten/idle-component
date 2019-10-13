import React from 'react'

import Resource from './components/resource'
import Building from './components/building'
import Worker from './components/worker'
import Ticker from './components/ticker'
import { majorScale, Heading, Pane } from 'evergreen-ui'
import { Helmet } from 'react-helmet'

function App () {
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
      <Ticker />
      <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
        <Heading>Resources</Heading>
        <Pane display="flex" flexDirection="row">
          <Resource name="food" />
          <Resource name="wood" />
          <Resource name="iron" />
          <Resource name="oil" />
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
        <Heading>Buildings</Heading>
        <Pane display="flex" flexDirection="row">
          <Building name="hut" />
          <Building name="farm" />
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
        <Heading>Workers</Heading>
        <Pane display="flex" flexDirection="row">
          <Worker name="unassigned" />
          <Worker name="woodcutters" />
          <Worker name="farmers" />
        </Pane>
      </Pane>
    </>
  )
}

export default App
