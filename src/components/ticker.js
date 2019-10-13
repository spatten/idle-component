import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sendTick } from '../redux/actions'

function Ticker ({ onSendTick }) {
  window.setInterval(onSendTick, 1000)
  return (<></>)
}

Ticker.propTypes = {
  onSendTick: PropTypes.func,
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSendTick: () => dispatch(sendTick(ownProps.name))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Ticker)
