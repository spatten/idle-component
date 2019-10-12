import { PRODUCE_RESOURCES } from "../actionTypes";

export default function(state, action) {
  switch (action.type) {
    case PRODUCE_RESOURCES: {
      const created = action.payload;
      const updatedResources = {...state}.resources
      // TODO: Refactor this
      Object.keys(created).forEach((resource) => {
        updatedResources[resource].count += created[resource]
        if (updatedResources[resource].count > updatedResources[resource].capacity) {
          updatedResources[resource].count = updatedResources[resource].capacity
        }
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
