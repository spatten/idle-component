import { PRODUCE_RESOURCES, CREATE_BUILDING, PRODUCE_WORKERS, ASSIGN_WORKERS, RETIRE_WORKERS } from './actionTypes'

export const produceResources = resources => ({
  type: PRODUCE_RESOURCES,
  payload: resources
})

export const createBuilding = building => ({
  type: CREATE_BUILDING,
  payload: building
})

export const produceWorkers = workers => ({
  type: PRODUCE_WORKERS,
  payload: workers
})

export const assignWorkers = workers => ({
  type: ASSIGN_WORKERS,
  payload: workers
})

export const retireWorkers = workers => ({
  type: RETIRE_WORKERS,
  payload: workers
})
