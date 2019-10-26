import { DO_RESEARCH } from '../actionTypes'
import { calculateCost, haveResourcesToPay, spendResources } from '../selectors'
import gameProps from '../../gameProps'

export default function (state, action) {
  switch (action.type) {
  case DO_RESEARCH: {
    let { research, resources } = { ...state }
    const techName = action.payload

    const tech = gameProps.research[techName]
    const techCount = { ...research }[techName]
    const cost = calculateCost({ ...tech, count: techCount })
    if (!haveResourcesToPay(cost, resources)) {
      return state
    }
    resources = spendResources(cost, resources)

    return {
      ...state,
      resources: { ...resources },
      research:
      {
        ...research,
        [techName]: techCount + 1,
      }
    }
  }
  default:
    return state
  }
}
