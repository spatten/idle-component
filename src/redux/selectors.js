function haveResourcesToPay (cost, resources) {
  return Object.keys(cost).every((resource) => {
    return (cost[resource] <= resources[resource].count)
  })
}

export { haveResourcesToPay }
