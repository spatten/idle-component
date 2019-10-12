import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createBuilding } from '../redux/actions'
import { majorScale, Button, Card, Icon, Paragraph, Text, Tooltip } from 'evergreen-ui'

function haveResourcesToPay (cost, resources) {
  const res = Object.keys(cost).every((resource) => {
    return (cost[resource] <= resources[resource].count)
  })
  return res
}

function tooltipContent (name, cost, resources) {
  const costItems = Object.keys(cost).map((resource) => <li key={resource}>{cost[resource]} {resources[resource].name}</li>)
  return (
    <Paragraph margin={majorScale(1)}>
      Your next {name} will cost
      <ul>
        {costItems}
      </ul>
    </Paragraph>
  )
}

function Building ({ count, name, icon, handleClick, cost, resources }) {
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
      <Text>{count}</Text>
      <Tooltip content={tooltipContent(name, cost, resources)}
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
    </Card>

  )
}

Building.propTypes = {
  count: PropTypes.number,
  name: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
  cost: PropTypes.object,
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
