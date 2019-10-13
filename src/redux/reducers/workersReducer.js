import { ASSIGN_WORKER, RETIRE_WORKER } from '../actionTypes'

export default function (state, action) {
  switch (action.type) {
  case ASSIGN_WORKER: {
    const worker = action.payload
    const updatedWorkers = { ...state }.workers
    if (updatedWorkers.unassigned.count <= 0) {
      return
    }
    if (updatedWorkers[worker].max && updatedWorkers[worker].count >= updatedWorkers[worker].max) {
      return
    }

    updatedWorkers[worker].count += 1
    updatedWorkers.unassigned.count -= 1
    return {
      ...state,
      workers: updatedWorkers
    }
  }
  case RETIRE_WORKER: {
    const worker = action.payload
    const updatedWorkers = { ...state }.workers
    if (updatedWorkers[worker].count <= 0) {
      return
    }

    updatedWorkers[worker].count -= 1
    updatedWorkers.unassigned.count += 1
    return {
      ...state,
      workers: updatedWorkers
    }
  }
  default:
    return state
  }
}
