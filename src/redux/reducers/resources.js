import { PRODUCE_RESOURCES, CONSUME_RESOURCES } from "../actionTypes";

const initialState = {
  wood: 0,
  iron: 0,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCE_RESOURCES: {
      const created = action.payload;
      const updatedResources = {...state}
      Object.keys(created).forEach((resource) => {
        updatedResources[resource] += created[resource]
      })
      return {
        ...updatedResources
      };
    }
    case CONSUME_RESOURCES: {
      const consumed = action.payload
      const updatedResources = {...state.resources}
      Object.keys(consumed).forEach((resource) => {
        updatedResources[resource] -= consumed[resource]
      })
      return {
        ...state,
        resources: updatedResources
      };
    }
    default:
      return state;
  }
}
