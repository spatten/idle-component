import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { produceResources } from '../redux/actions'
import { majorScale, Button, Text } from 'evergreen-ui'
import IdleCard from './idleCard'
import BigNum from './bigNum'
import { calculateMaxStorage } from '../redux/selectors'

function Resource ({ count, capacity, name, action, icon, handleClick }) {
  return (
    <IdleCard>
      <Text><BigNum number={count}/> / <BigNum number={capacity} /></Text>
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
    ...state.resources[ownProps.name],
    capacity: calculateMaxStorage(state, ownProps.name)
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
