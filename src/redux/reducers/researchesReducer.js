import { DO_RESEARCH } from '../actionTypes'
import { calculateCost } from '../selectors'

const haveResourcesToPay = (cost, resources) => {
  return Object.keys(cost).every((resource) => {
    return (cost[resource] <= resources[resource].count)
  })
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
    const cost = calculateCost(tech)
    if (!haveResourcesToPay(cost, resources)) {
      return state
    }
    tech.count += 1
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
