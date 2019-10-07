import { PRODUCE_RESOURCES, CONSUME_RESOURCES } from "../actionTypes";

const initialState = {
  wood:
  { name: 'Wood',
    count: 0,
    capacity: 500,
    icon: 'tree',
    action: 'Chop'},
  iron: {
    name: 'Iron',
    count: 0,
    capacity: 500,
    icon: 'mountain',
    action: 'Mine'},
  oil: {
    name: 'Oil',
    count: 0,
    capacity: 100,
    icon: 'oil-field',
    action: 'Pump'},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCE_RESOURCES: {
      const created = action.payload;
      const updatedResources = {...state}
      // TODO: Refactor this
      Object.keys(created).forEach((resource) => {
        updatedResources[resource].count += created[resource]
        if (updatedResources[resource].count > updatedResources[resource].capacity) {
          updatedResources[resource].count = updatedResources[resource].capacity
        }
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
