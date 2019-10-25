import gameProps from '../gameProps'

function haveResourcesToPay (cost, resources) {
  return Object.keys(cost).every((resource) => {
    return (cost[resource] <= resources[resource].count)
  })
}

const calculateCost = ({ baseCost, count, costExponential }) => {
  const cost = {}
  Object.keys(baseCost).forEach((resource) => {
    cost[resource] = Math.ceil(baseCost[resource] * costExponential ** (count))
  })
  return cost
}

const calculateMaxWorkers = (state, workerSlug) => {
  const worker = gameProps.workers[workerSlug]
  if (worker.hasMax === false) {
    return null
  }
  const buildings = Object.keys(gameProps.buildings).filter(
    (building) => gameProps.buildings[building].providesWorkers
  )
  return buildings.reduce((sum, building) => {
    const provides = gameProps.buildings[building].providesWorkers[workerSlug] || 0
    return sum + provides * state.buildings[building].count
  }, 0)
}

const calculateMaxStorage = (state, resourceSlug) => {
  const buildingSlug = Object.keys(gameProps.buildings).find(
    (building) => gameProps.buildings[building].providesStorage === resourceSlug
  )
  const initialCapacity = gameProps.resources[resourceSlug].initialCapacity
  const buildingCount = state.buildings[buildingSlug].count
  console.log(`cap = ${initialCapacity}, count = ${buildingCount}`)
  return initialCapacity * 2 ** buildingCount
}

export { calculateCost, calculateMaxStorage, calculateMaxWorkers, haveResourcesToPay }
