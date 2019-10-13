import { PRODUCE_RESOURCES, CREATE_BUILDING, ASSIGN_WORKER, RETIRE_WORKER, TICK } from './actionTypes'

export const produceResources = resources => ({
  type: PRODUCE_RESOURCES,
  payload: resources
})

export const createBuilding = building => ({
  type: CREATE_BUILDING,
  payload: building
})

export const assignWorker = worker => ({
  type: ASSIGN_WORKER,
  payload: worker
})

export const retireWorker = worker => ({
  type: RETIRE_WORKER,
  payload: worker
})

export const sendTick = () => ({
  type: TICK,
  payload: null
})
