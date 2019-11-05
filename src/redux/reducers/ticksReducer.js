import { TICK } from '../actionTypes'
import { calculateMaxStorage } from '../selectors'

export default function (state, action) {
  switch (action.type) {
  case TICK: {
    let { workers, resources, research, lastTick } = { ...state }
    let { food, wood, iron } = resources
    let foodConsumed = 0
    let foodCreated = 0
    const currentTime = Math.floor(Date.now() / 1000)
    const ticksElapsed = lastTick ? currentTime - lastTick : 1

    Object.keys(workers).forEach((workerType) => {
      const worker = workers[workerType]
      if (worker === 0) {
        return
      }
      foodConsumed += worker * ticksElapsed
      switch (workerType) {
      case 'farmers': {
        const { fasterFarmers } = research
        foodCreated += 3 * worker * (2 ** fasterFarmers) * ticksElapsed
        break
      }
      case 'woodcutters': {
        const { fasterAxes } = research
        const capacity = calculateMaxStorage(state, 'wood')
        wood += 4 * worker * (2 ** fasterAxes) * ticksElapsed

        if (wood > capacity) wood = capacity
        break
      }
      case 'miners': {
        const { fasterMiners } = research
        const capacity = calculateMaxStorage(state, 'iron')
        iron += 2 * worker * (2 ** fasterMiners) * ticksElapsed
        if (iron > capacity) iron = capacity
        break
      }
      default:
        // NO-OP
      }
    })
    food += foodCreated - foodConsumed
    const capacity = calculateMaxStorage(state, 'food')
    if (food < 0) { food = 0 }
    if (food > capacity) { food = capacity }

    resources = {
      ...resources,
      food: food,
      wood: wood,
      iron: iron,
    }
    const res = {
      ...state,
      resources: { ...resources },
      lastTick: currentTime
    }
    return res
  }
  default:
    return state
  }
}
