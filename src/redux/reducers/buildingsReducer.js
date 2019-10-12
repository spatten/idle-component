import { CREATE_BUILDING } from "../actionTypes";


export default function(state, action) {
  switch (action.type) {
  case CREATE_BUILDING: {
    const buildings = {...state}.buildings
    const building = buildings[action.payload]
    building.count = building.count + 1
    const result = {
      ...state,
    }
    result.buildings[action.payload] = building
    return result
  }
  default:
    return state;
  }
}
