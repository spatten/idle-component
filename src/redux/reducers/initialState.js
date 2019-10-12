export default {
  buildings: {
    hut: {
      slug: 'hut',
      name: 'Hut',
      icon: 'home',
      count: 0,
      baseCost: {
        wood: 10
      },
      costExponential: 1.2,
      cost: {
        wood: 10
      }
    },
    farm: {
      slug: 'farm',
      name: 'Farm',
      icon: 'media',
      count: 0,
      baseCost: {
        wood: 15,
        iron: 10
      },
      costExponential: 1.2,
      cost: {
        wood: 15,
        iron: 10
      }
    },
    mine: {
      slug: 'mine',
      name: 'Mine',
      icon: 'mountain',
      count: 0,
      cost: {
        wood: 15,
        iron: 10
      }
    }
  },
  resources: {
    wood:
    { name: 'Wood',
      count: 0,
      capacity: 500,
      icon: 'tree',
      action: 'Chop'},
    iron: {
      name: 'Iron',
      count: 0,
      capacity: 500,
      icon: 'mountain',
      action: 'Mine'},
    oil: {
      name: 'Oil',
      count: 0,
      capacity: 100,
      icon: 'oil-field',
      action: 'Pump'},
  }
}
