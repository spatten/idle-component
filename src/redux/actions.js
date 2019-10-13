import { PRODUCE_RESOURCES, CREATE_BUILDING, PRODUCE_WORKERS, ASSIGN_WORKER, FIRE_WORKER } from './actionTypes'

export const produceResources = resources => ({
  type: PRODUCE_RESOURCES,
  payload: resources
})

export const createBuilding = building => ({
  type: CREATE_BUILDING,
  payload: building
})

export const assignWorkers = worker => ({
  type: ASSIGN_WORKER,
  payload: worker
})

export const retireWorkers = worker => ({
  type: FIRE_WORKER,
  payload: worker
})
