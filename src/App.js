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
          button:focus { box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06) !important }
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
          <Building name="mine" />
          <Building name="barn" />
          <Building name="shed" />
          <Building name="forge" />
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
        <Heading>Workers</Heading>
        <Pane display="flex" flexDirection="row">
          <Worker name="unassigned" />
          <Worker name="farmers" />
          <Worker name="woodcutters" />
          <Worker name="miners" />
        </Pane>
      </Pane>
    </>
  )
}

export default App
