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

export { calculateCost, haveResourcesToPay }
