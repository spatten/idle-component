import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createBuilding } from '../redux/actions'
import { haveResourcesToPay } from '../redux/selectors'
import { majorScale, Button, Icon, Pane, Paragraph, Text, Tooltip } from 'evergreen-ui'
import IdleCard from './idleCard'
import BigNum from './bigNum'

function tooltipContent (name, cost, resources, description) {
  const costItems = Object.keys(cost).map((resource) => {
    const color = cost[resource] <= resources[resource].count ? 'success' : 'danger'
    return <li key={resource}><Text color={color}><BigNum number={cost[resource]} /> {resources[resource].name}</Text></li>
  })

  return (
    <Pane margin={majorScale(1)}>
      <Paragraph>{ description }</Paragraph>
      <Paragraph>
        Your next {name} will cost:
      </Paragraph>
      <ul style={ { marginTop: majorScale(1), paddingLeft: majorScale(2) } }>
        {costItems}
      </ul>
    </Pane>
  )
}

function Building ({ count, name, icon, handleClick, cost, resources, description }) {
  return (
    <IdleCard>
      <Text>{count}</Text>
      <Tooltip content={tooltipContent(name, cost, resources, description)}
               appearance="card">
        <Icon icon="info-sign"
              position="absolute"
              display="inline-block"
              line-height="20px"
              right={majorScale(1)}
              top={10}/>
      </Tooltip>
      <Button onClick={handleClick}
              marginTop={majorScale(1)}
              iconBefore={icon}
              disabled={!haveResourcesToPay(cost, resources)}>
        Build {name}
      </Button>
    </IdleCard>

  )
}

Building.propTypes = {
  cost: PropTypes.object,
  count: PropTypes.number,
  description: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
  resources: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  const { resources, buildings } = state
  return {
    ...buildings[ownProps.name],
    resources: { ...resources }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(createBuilding(ownProps.name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Building)
