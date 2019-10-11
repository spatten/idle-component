import { CREATE_BUILDING } from "../actionTypes";
import { consumeResources } from "../actions"

const initialState = {
  hut: {
    slug: 'hut',
    name: 'Hut',
    count: 0,
    cost: {
      wood: 100
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
  case CREATE_BUILDING: {
    console.log(`building! ${JSON.stringify(action)}`)
    console.log(`state = ${JSON.stringify(state)}`)
    const buildings = {...state}
    const building = buildings[action.payload]
    console.log(`building: ${JSON.stringify(building)}`)
    console.log(`buildings: ${JSON.stringify(buildings)}`)
    console.log(`consuming resources ${JSON.stringify(building.cost)}`)
    consumeResources(building.cost)
    building.count = building.count + 1
    const result = {
      ...buildings
    }
    result[action.payload] = building
    return buildings
  }
  default:
    return state;
  }
}
