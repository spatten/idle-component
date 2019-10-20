import { ASSIGN_WORKER, DO_RESEARCH, CREATE_BUILDING, PRODUCE_RESOURCES, RETIRE_WORKER, TICK } from './actionTypes'

export const assignWorker = worker => ({
  type: ASSIGN_WORKER,
  payload: worker
})

export const createBuilding = building => ({
  type: CREATE_BUILDING,
  payload: building
})

export const doResearch = research => ({
  type: DO_RESEARCH,
  payload: research
})

export const produceResources = resources => ({
  type: PRODUCE_RESOURCES,
  payload: resources
})

export const retireWorker = worker => ({
  type: RETIRE_WORKER,
  payload: worker
})

export const sendTick = () => ({
  type: TICK,
  payload: null
})
