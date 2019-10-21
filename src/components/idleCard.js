import React from 'react'
import PropTypes from 'prop-types'
import { majorScale, Card } from 'evergreen-ui'

function IdleCard (props) {
  return (
    <Card width={props.width}
          height={props.height}
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
  height: PropTypes.number,
  width: PropTypes.number
}

IdleCard.defaultProps = {
  width: majorScale(18),
  height: majorScale(10),
}

export default IdleCard
