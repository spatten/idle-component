import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { majorScale, Card } from 'evergreen-ui'

function IdleCard (props) {
  return (
    <Card width={majorScale(20)}
          height={majorScale(10)}
          padding={majorScale(1)}
          elevation={1}
          margin={majorScale(1)}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          userSelect="none"
          position="relative"
          border="muted">
      {props.children}
    </Card>
  )
}

IdleCard.propTypes = {
  children: PropTypes.node,
}

export default connect(
  null,
  null,
)(IdleCard)
