import { CREATE_BUILDING } from "../actionTypes";

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

export default function(state, action) {
  switch (action.type) {
  case CREATE_BUILDING: {
    const { buildings, resources } = {...state}
    const building = buildings[action.payload]

    const cost = building.cost
    if (!haveResourcesToPay(cost, resources)) {
      return state;
    }

    building.count = building.count + 1
    spendResources(cost, resources)
    const result = {
      ...state,
      resources: resources
    }
    result.buildings[action.payload] = building
    return result
  }
  default:
    return state;
  }
}
