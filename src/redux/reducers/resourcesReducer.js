import { PRODUCE_RESOURCES } from '../actionTypes';

export default function (state, action) {
  switch (action.type) {
  case PRODUCE_RESOURCES: {
    const created = action.payload
    const { resources } = { ...state }
    // TODO: Refactor this
    Object.keys(created).forEach((resource) => {
      resources[resource].count += created[resource]
      if (resources[resource].count > resources[resource].capacity) {
        resources[resource].count = resources[resource].capacity
      }
    })
    return {
      ...state,
      resources: { ...resources }
    }
  }
  default:
    return state
  }
}
