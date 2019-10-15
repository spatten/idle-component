import { ASSIGN_WORKER, RETIRE_WORKER } from '../actionTypes'

export default function (state, action) {
  switch (action.type) {
  case ASSIGN_WORKER: {
    const worker = action.payload
    const { workers } = state
    const { unassigned } = workers
    const updatedWorkers = workers[worker]
    if (unassigned.count <= 0) {
      return state
    }
    if (updatedWorkers.max && updatedWorkers.count >= updatedWorkers.max) {
      return state
    }

    updatedWorkers.count += 1
    unassigned.count -= 1
    workers.unassigned = { ...unassigned }
    workers[worker] = { ...updatedWorkers }
    return {
      ...state,
      workers: { ...workers }
    }
  }
  case RETIRE_WORKER: {
    const worker = action.payload
    const { workers } = state
    const { unassigned } = workers
    const updatedWorkers = workers[worker]
    if (updatedWorkers.count <= 0) {
      return state
    }

    updatedWorkers.count -= 1
    unassigned.count += 1
    workers.unassigned = { ...unassigned }
    workers[worker] = { ...updatedWorkers }
    return {
      ...state,
      workers: { ...workers }
    }
  }
  default:
    return state
  }
}
