import { CREATE_BUILDING } from '../actionTypes'
import { calculateCost, haveResourcesToPay, spendResources } from '../selectors'
import gameProps from '../../gameProps'

export default function (state, action) {
  switch (action.type) {
  case CREATE_BUILDING: {
    let { buildings, resources, workers } = { ...state }
    const building = gameProps.buildings[action.payload]
    const buildingCount = buildings[action.payload]

    const cost = calculateCost({ ...building, count: buildingCount })
    console.log(`building: ${JSON.stringify(building)}, cost: ${JSON.stringify(cost)}`)
    if (!haveResourcesToPay(cost, resources, true)) {
      console.log(`Nope, not enough. cost = ${JSON.stringify(cost)}, resources = ${JSON.stringify(resources)}`)
      return state
    }
    console.log('Yep, I can pay')

    buildings = {
      ...buildings,
      [action.payload]: buildings[action.payload] + 1
    }
    resources = spendResources(cost, resources)
    switch (action.payload) {
    case 'hut': {
      workers = {
        ...workers,
        unassigned: workers.unassigned + 4,
      }
      break
    }
    default: {
      // NO-OP
    }
    }

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
