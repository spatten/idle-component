import { CREATE_BUILDING } from '../actionTypes'
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
  case CREATE_BUILDING: {
    let { buildings, resources, workers } = { ...state }
    const building = buildings[action.payload]

    const cost = calculateCost(building)
    if (!haveResourcesToPay(cost, resources)) {
      return state
    }

    building.count = building.count + 1
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
      workers = {
        ...workers,
        farmers: { ...farmers },
      }
      break
    }
    case 'mine': {
      const { miners } = workers
      miners.visible = true
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
    default: {
      // NO-OP
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
