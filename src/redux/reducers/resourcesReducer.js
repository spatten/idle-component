import { PRODUCE_RESOURCES } from '../actionTypes'
import { calculateMaxStorage } from '../selectors'

export default function (state, action) {
  switch (action.type) {
  case PRODUCE_RESOURCES: {
    const created = action.payload
    let { resources } = { ...state }
    resources = { ...resources }
    // TODO: Refactor this
    Object.keys(created).forEach((resource) => {
      const capacity = calculateMaxStorage(state, resource)

      resources[resource] += created[resource]
      if (resources[resource] > capacity) {
        resources[resource] = capacity
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
