import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { majorScale, Card, Icon, Pane, Paragraph, Text, Tooltip } from 'evergreen-ui'

const countString = (count, max) => {
  if (max === null) {
    return count
  } else {
    return `${count} / ${max}`
  }
}

function Worker ({ count, max, name, icon, visible }) {

  if (visible === false) {
    return null
  }

  return (
    <Pane margin={majorScale(1)}>
      <Paragraph>{ name }</Paragraph>
      <Paragraph>{ countString(count, max) }</Paragraph>
    </Pane>
  )
}

Worker.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.string,
  max: PropTypes.number,
  name: PropTypes.string,
  visible: PropTypes.bool,
}

const mapStateToProps = (state, ownProps) => {
  const { workers } = state
  return {
    ...workers[ownProps.name],
  }
}

export default connect(
  mapStateToProps,
  null,
)(Worker)
