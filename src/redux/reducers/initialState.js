import gameProps from '../../gameProps'
export default function (state, action) {
  if (state === null || state === undefined || state === {}) {
    return gameProps
  }
  return state
}
