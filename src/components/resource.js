import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { produceResources } from '../redux/actions'
import { majorScale, Button, Card, Text } from 'evergreen-ui'

function Resource ({ count, capacity, name, action, icon, handleClick }) {
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
          border="muted">
      <Text>{count} / {capacity}</Text>
      <Button onClick={handleClick}
              marginTop={majorScale(1)}
              iconBefore={icon}>
        {action} {name}
      </Button>
    </Card>
  )
}

Resource.propTypes = {
  count: PropTypes.number,
  capacity: PropTypes.number,
  name: PropTypes.string,
  action: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.resources[ownProps.name]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const resources = {}
  resources[ownProps.name] = 1
  return {
    handleClick: () => dispatch(produceResources(resources))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resource)
