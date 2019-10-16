import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { majorScale, Heading, Pane, Text } from 'evergreen-ui'
import Worker from './worker'

function WorkersPane ({ workers }) {
  return (
    <Pane display="flex" flexDirection="column" padding={majorScale(2)}>
      <Heading>Workers <Text>(unassigned: {workers.unassigned.count})</Text></Heading>
      <Pane display="flex" flexDirection="row" flexWrap="wrap">
        <Worker name="farmers" />
        <Worker name="woodcutters" />
        <Worker name="miners" />
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