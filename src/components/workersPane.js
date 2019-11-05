import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { majorScale, Heading, Pane, Text } from 'evergreen-ui'
import Worker from './worker'
import BigNum from './bigNum'

function WorkersPane ({ workers }) {
  const workersCount = Object.keys(workers).reduce((s, w) => s + workers[w], 0)
  return (
    <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
    <Heading>Workers <Text>(total: <BigNum number={workersCount} />, unassigned: <BigNum number={workers.unassigned} />)</Text></Heading>
      <Pane display="flex" flexDirection="row" flexWrap="wrap">
        <Worker slug="farmers" />
        <Worker slug="woodcutters" />
        <Worker slug="miners" />
      </Pane>
    </Pane>
  )
}

WorkersPane.propTypes = {
  workers: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  const { workers } = state
  return {
    workers
  }
}

export default connect(
  mapStateToProps,
)(WorkersPane)
