import gameProps from '../../gameProps'
export default function (state, action) {
  if (state === null || state === undefined || state === {}) {
    state = {
      buildings: {},
      research: {},
      resources: {},
      workers: {},
    }
    state.buildings = {}
    Object.keys(gameProps.buildings).forEach((key) => state.buildings[key] = 0)
    Object.keys(gameProps.research).forEach((key) => state.research[key] = 0)
    Object.keys(gameProps.resources).forEach((key) => state.resources[key] = 0)
    Object.keys(gameProps.workers).forEach((key) => state.workers[key] = 0)
    return state
  }
  return state
}
