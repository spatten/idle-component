export default {
  buildings: {
    hut: {
      slug: 'hut',
      name: 'Hut',
      description: 'Provides room for 4 workers.',
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
      description: 'Allows up to 4 farmers to work. Each farmer produces 3 food per tick.',
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
  },
  resources: {
    wood: {
      name: 'Wood',
      count: 0,
      capacity: 500,
      icon: 'tree',
      action: 'Chop'
    },
    iron: {
      name: 'Iron',
      count: 0,
      capacity: 500,
      icon: 'mountain',
      action: 'Mine'
    },
    oil: {
      name: 'Oil',
      count: 0,
      capacity: 100,
      icon: 'oil-field',
      action: 'Pump'
    },
  },
  workers: {
    unassigned: {
      count: 0,
      visible: false,
    },
    farmers: {
      count: 0,
      max: 0,
      visible: false,
    },
    miners: {
      count: 0,
      max: 0,
      visible: false,
    },
  }
}
