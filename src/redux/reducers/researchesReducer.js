import { DO_RESEARCH } from '../actionTypes'
import { calculateCost, haveResourcesToPay, spendResources } from '../selectors'

export default function (state, action) {
  switch (action.type) {
  case DO_RESEARCH: {
    let { research, resources } = { ...state }
    const techName = action.payload

    const tech = { ...research }[techName]
    const cost = calculateCost(tech)
    if (!haveResourcesToPay(cost, resources)) {
      return state
    }
    tech.count += 1
    resources = spendResources(cost, resources)

    return {
      ...state,
      resources: { ...resources },
      research:
      {
        ...research,
        [techName]: { ...tech },
      }
    }
  }
  default:
    return state
  }
}
