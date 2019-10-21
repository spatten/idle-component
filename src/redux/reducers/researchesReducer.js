import { DO_RESEARCH } from '../actionTypes'

const haveResourcesToPay = (cost, resources) => {
  return Object.keys(cost).every((resource) => {
    return (cost[resource] <= resources[resource].count)
  })
}

const calculateCost = ({ baseCost, count, costExponential }) => {
  const cost = {}
  Object.keys(baseCost).forEach((resource) => {
    cost[resource] = Math.ceil(baseCost[resource] * costExponential ** (count))
  })
  return cost
}

const spendResources = (cost, resources) => {
  Object.keys(cost).forEach((resource) => {
    resources[resource].count -= cost[resource]
  })
  return resources
}

export default function (state, action) {
  switch (action.type) {
  case DO_RESEARCH: {
    const { research, resources } = { ...state }
    const techName = action.payload

    const tech = { ...research }[techName]
    const cost = tech.cost
    if (!haveResourcesToPay(cost, resources)) {
      return state
    }
    tech.count += 1
    tech.cost = calculateCost(tech)
    spendResources(cost, resources)

    return {
      ...state,
      resources: { ...resources },
      research:
      {
        ...research,
        [techName]: { ...tech },
      }
    }
  }
  default:
    return state
  }
}
