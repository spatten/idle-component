import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { produceResources } from '../redux/actions'
import { majorScale, Button, Text } from 'evergreen-ui'
import IdleCard from './idleCard'

function Resource ({ count, capacity, name, action, icon, handleClick }) {
  return (
    <IdleCard>
      <Text>{count} / {capacity}</Text>
      <Button onClick={handleClick}
              marginTop={majorScale(1)}
              iconBefore={icon}>
        {action} {name}
      </Button>
    </IdleCard>
  )
}

Resource.propTypes = {
  count: PropTypes.number,
  capacity: PropTypes.number,
  name: PropTypes.string,
  action: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
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
  mapDispatchToProps,
)(Resource)
