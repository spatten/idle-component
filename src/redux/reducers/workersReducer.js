import { ASSIGN_WORKER, FIRE_WORKER } from '../actionTypes'

export default function (state, action) {
  switch (action.type) {
  case ASSIGN_WORKER: {
    const updatedWorkers = { ...state }.workers
    updatedWorkers[action.worker] += 1
    return {
      ...state,
      workers: updatedWorkers
    }
  }
  case FIRE_WORKER: {
    const updatedWorkers = { ...state }.workers
    updatedWorkers[action.worker] -= 1
    return {
      ...state,
      workers: updatedWorkers
    }
  }
  default:
    return state
  }
}
