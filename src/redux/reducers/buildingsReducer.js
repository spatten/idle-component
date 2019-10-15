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
    let { buildings, resources, workers } = { ...state }
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
      const { unassigned, woodcutters } = workers
      unassigned.visible = true
      unassigned.count += 4
      woodcutters.visible = true
      workers = {
        ...workers,
        unassigned: { ...unassigned },
        woodcutters: { ...woodcutters },
      }
      break
    }
    case 'farm': {
      const { farmers } = workers
      farmers.visible = true
      farmers.max += 4
      workers = {
        ...workers,
        farmers: { ...farmers },
      }
      break
    }
    case 'mine': {
      const { miners } = workers
      miners.visible = true
      miners.max += 4
      workers = {
        ...workers,
        miners: { ...miners },
      }
      break
    }
    case 'barn': {
      const { food } = resources
      food.capacity *= 2

      resources = {
        ...resources,
        food: { ...food },
      }
      break
    }
    case 'shed': {
      const { wood } = resources
      wood.capacity *= 2

      resources = {
        ...resources,
        wood: { ...wood },
      }
      break
    }
    case 'forge': {
      const { iron } = resources
      iron.capacity *= 2

      resources = {
        ...resources,
        iron: { ...iron },
      }
      break
    }
    }

    buildings[action.payload] = { ...building }
    const result = {
      ...state,
      resources: { ...resources },
      workers: { ...workers },
      buildings: { ...buildings },
    }
    return result
  }
  default:
    return state
  }
}
