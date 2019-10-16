import React from 'react'

import Resource from './components/resource'
import Building from './components/building'
import WorkersPane from './components/workersPane'
import Ticker from './components/ticker'
import { majorScale, Card, Heading, Pane } from 'evergreen-ui'
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
      <Pane display="flex" flexDirection="row">
        <Pane width={majorScale(70)}>
          <Pane display="flex" flexDirection="column" padding={majorScale(2)} flexWrap="wrap">
            <Heading>Resources</Heading>
            <Pane display="flex" flexDirection="row" flexWrap="wrap">
              <Resource name="food" />
              <Resource name="wood" />
              <Resource name="iron" />
            </Pane>
          </Pane>
          <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
            <Heading>Buildings</Heading>
            <Pane display="flex" flexDirection="row" flexWrap="wrap">
              <Building name="hut" />
              <Building name="farm" />
              <Building name="mine" />
              <Building name="barn" />
              <Building name="shed" />
              <Building name="forge" />
            </Pane>
          </Pane>
          <WorkersPane />
        </Pane>
        <Pane width={majorScale(70)} padding={majorScale(2)}>
          <Card padding={majorScale(1)}
                elevation={1}>
            <Heading>Messages</Heading>
            <hr />
          </Card>
        </Pane>
      </Pane>
    </>
  )
}

export default App
