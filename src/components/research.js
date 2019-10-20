import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { doResearch } from '../redux/actions'
import { majorScale, Button } from 'evergreen-ui'
import IdleCard from './idleCard'

function haveResourcesToPay (cost, resources) {
  const res = Object.keys(cost).every((resource) => {
    return (cost[resource] <= resources[resource].count)
  })
  return res
}

function Research ({ name, icon, handleClick, cost, resources }) {
  return (
    <IdleCard width={majorScale(36)}>
      <Button onClick={handleClick}
              marginTop={majorScale(1)}
              iconBefore={icon}
              disabled={!haveResourcesToPay(cost, resources)}>
        Build {name}
      </Button>
    </IdleCard>

  )
}

Research.propTypes = {
  cost: PropTypes.object,
  name: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
  resources: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  const { resources, research } = state
  return {
    ...research[ownProps.name],
    resources: { ...resources }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(doResearch(ownProps.name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Research)
