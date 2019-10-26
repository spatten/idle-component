import { ASSIGN_WORKER, RETIRE_WORKER } from '../actionTypes'
import { calculateMaxWorkers } from '../selectors'

export default function (state, action) {
  switch (action.type) {
  case ASSIGN_WORKER: {
    const worker = action.payload
    const { workers } = { ...state }
    const maxWorkers = calculateMaxWorkers(state, worker)
    if (workers.unassigned <= 0) {
      return state
    }
    if (maxWorkers && workers[worker] >= maxWorkers) {
      return state
    }

    workers.unassigned -= 1
    workers[worker] += 1
    return {
      ...state,
      workers: { ...workers }
    }
  }
  case RETIRE_WORKER: {
    const worker = action.payload
    const { workers } = { ...state }
    if (workers[worker] <= 0) {
      return state
    }

    workers.unassigned += 1
    workers[worker] -= 1
    return {
      ...state,
      workers: { ...workers }
    }
  }
  default:
    return state
  }
}
