import { TICK } from '../actionTypes'
import { calculateMaxStorage } from '../selectors'

export default function (state, action) {
  switch (action.type) {
  case TICK: {
    let { workers, resources, research, lastTick } = { ...state }
    const { food, wood, iron } = { ...resources }
    let foodConsumed = 0
    let foodCreated = 0
    const currentTime = Math.floor(Date.now() / 1000)
    const ticksElapsed = lastTick ? currentTime - lastTick : 1

    Object.keys(workers).forEach((workerType) => {
      const worker = workers[workerType]
      if (worker.count === 0) {
        return
      }
      foodConsumed += worker.count * ticksElapsed
      switch (workerType) {
      case 'farmers': {
        const { fasterFarmers } = research
        foodCreated += 3 * worker.count * (2 ** fasterFarmers.count) * ticksElapsed
        break
      }
      case 'woodcutters': {
        const { fasterAxes } = research
        const capacity = calculateMaxStorage(state, 'wood')
        wood.count += 4 * worker.count * (2 ** fasterAxes.count) * ticksElapsed

        if (wood.count > capacity) wood.count = capacity
        break
      }
      case 'miners': {
        const { fasterMiners } = research
        const capacity = calculateMaxStorage(state, 'iron')
        iron.count += 2 * worker.count * (2 ** fasterMiners.count) * ticksElapsed
        if (iron.count > capacity) iron.count = capacity
        break
      }
      default:
        // NO-OP
      }
    })
    food.count += foodCreated - foodConsumed
    const capacity = calculateMaxStorage(state, 'food')
    if (food.count < 0) { food.count = 0 }
    if (food.count > capacity) { food.count = capacity }

    resources = {
      ...resources,
      food: { ...food },
      wood: { ...wood },
      iron: { ...iron },
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
