import { TICK } from '../actionTypes'

export default function (state, action) {
  switch (action.type) {
  case TICK: {
    const { workers, resources, lastTick } = { ...state }
    let foodConsumed = 0
    let foodCreated = 0
    const currentTime = Math.floor(Date.now() / 1000)
    const ticksElapsed = lastTick ? currentTime - lastTick : 1

    Object.keys(workers).forEach((workerType) => {
      const worker = workers[workerType]
      console.log(`workerType: ${workerType}, count: ${worker.count}`)
      if (worker.count === 0) {
        return
      }
      foodConsumed += worker.count * ticksElapsed
      switch (workerType) {
      case 'farmers': {
        foodCreated += 3 * worker.count * ticksElapsed
      }
      }
    })
    resources.food.count += foodCreated - foodConsumed
    if (resources.food.count < 0) resources.food.count = 0
    if (resources.food.count > resources.food.capacity) resources.food.count = resources.food.capacity

    const res = {
      ...state,
      resources,
      lastTick: currentTime
    }
    return res
  }
  default:
    return state
  }
}
