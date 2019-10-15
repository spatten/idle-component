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
    mine: {
      slug: 'mine',
      name: 'Mine',
      description: 'Allows up to 4 miners to work. Each miner produces 2 iron per tick.',
      icon: 'mountain',
      count: 0,
      baseCost: {
        wood: 150,
        iron: 150
      },
      costExponential: 1.2,
      cost: {
        wood: 150,
        iron: 150
      }
    },
    barn: {
      slug: 'barn',
      name: 'Barn',
      description: 'Doubles the amount of food you can store',
      count: 0,
      baseCost: {
        food: 400,
        wood: 250
      },
      costExponential: 1.3,
      cost: {
        food: 400,
        wood: 250
      }
    },
    shed: {
      slug: 'shed',
      name: 'Shed',
      description: 'Doubles the amount of wood you can store',
      count: 0,
      baseCost: {
        wood: 400,
        iron: 250
      },
      costExponential: 1.3,
      cost: {
        wood: 400,
        iron: 250
      }
    },
    forge: {
      slug: 'forge',
      name: 'Forge',
      description: 'Doubles the amount of iron you can store',
      count: 0,
      baseCost: {
        wood: 800,
        iron: 400,
      },
      costExponential: 1.3,
      cost: {
        wood: 800,
        iron: 400,
      }
    },
  },
  resources: {
    food: {
      name: 'Food',
      count: 100,
      capacity: 500,
      icon: 'heart',
      action: 'Gather'
    },
    wood: {
      name: 'Wood',
      count: 300,
      capacity: 500,
      icon: 'tree',
      action: 'Chop'
    },
    iron: {
      name: 'Iron',
      count: 300,
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
      max: null,
      visible: false,
    },
    farmers: {
      count: 0,
      max: 0,
      visible: false,
    },
    woodcutters: {
      count: 0,
      max: null,
      visible: false,
    },
    miners: {
      count: 0,
      max: 0,
      visible: false,
    },
  }
}
