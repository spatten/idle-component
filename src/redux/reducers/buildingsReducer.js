import { CREATE_BUILDING } from '../actionTypes'

const haveResourcesToPay = (cost, resources) => {
  return Object.keys(cost).every((resource) => {
    return (cost[resource] <= resources[resource].count)
  })
}

const calculateCost = ({ baseCost, count, costExponential }) => {
  const cost = {}
  Object.keys(baseCost).forEach((resource) => {
    cost[resource] = Math.ceil(baseCost[resource] * (count + 1) ** costExponential)
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
  case CREATE_BUILDING: {
    const { buildings, resources, workers } = { ...state }
    const building = buildings[action.payload]

    const cost = building.cost
    if (!haveResourcesToPay(cost, resources)) {
      return state
    }

    building.count = building.count + 1
    building.cost = calculateCost(building)
    spendResources(cost, resources)
    switch (action.payload) {
    case 'hut': {
      workers.unassigned.visible = true
      workers.unassigned.count += 4
      workers.woodcutters.visible = true
      break
    }
    case 'farm': {
      workers.farmers.visible = true
      workers.farmers.max += 4
      break
    }
    }

    const result = {
      ...state,
      resources: resources,
      workers: workers,
    }
    result.buildings[action.payload] = building
    return result
  }
  default:
    return state
  }
}
