export default {
  buildings: {
    hut: {
      slug: 'hut',
      name: 'Hut',
      description: 'Provides room for 4 workers.',
      icon: 'home',
      baseCost: {
        wood: 10
      },
      costExponential: 1.2,
    },
    farm: {
      slug: 'farm',
      name: 'Farm',
      description: 'Allows up to 4 farmers to work. Each farmer produces 3 food per tick.',
      icon: 'media',
      baseCost: {
        wood: 15,
        iron: 10
      },
      providesWorkers: {
        farmers: 4,
      },
      costExponential: 1.4,
    },
    mine: {
      slug: 'mine',
      name: 'Mine',
      description: 'Allows up to 4 miners to work. Each miner produces 2 iron per tick.',
      icon: 'mountain',
      baseCost: {
        wood: 100,
        iron: 100
      },
      providesWorkers: {
        miners: 4,
      },
      costExponential: 1.4,
    },
    barn: {
      slug: 'barn',
      name: 'Barn',
      description: 'Doubles the amount of food you can store',
      baseCost: {
        food: 400,
        wood: 250
      },
      providesStorage: 'food',
      costExponential: 2,
    },
    shed: {
      slug: 'shed',
      name: 'Shed',
      description: 'Doubles the amount of wood you can store',
      baseCost: {
        wood: 400,
        iron: 250
      },
      providesStorage: 'wood',
      costExponential: 2,
    },
    forge: {
      slug: 'forge',
      name: 'Forge',
      description: 'Doubles the amount of iron you can store',
      baseCost: {
        wood: 800,
        iron: 400,
      },
      providesStorage: 'iron',
      costExponential: 2,
    },
  },
  research: {
    fasterFarmers: {
      name: 'Faster Farmers',
      icon: 'media',
      baseCost: {
        wood: 8000,
        iron: 4000,
      },
      costExponential: 4,
    },
    fasterAxes: {
      name: 'Faster Axes',
      icon: 'tree',
      baseCost: {
        wood: 8000,
        iron: 4000,
      },
      costExponential: 4,
    },
    fasterMiners: {
      name: 'Faster Miners',
      icon: 'mountain',
      baseCost: {
        wood: 8000,
        iron: 4000,
      },
      costExponential: 4,
    }
  },
  resources: {
    food: {
      name: 'Food',
      initialCapacity: 500,
      icon: 'heart',
      action: 'Gather'
    },
    wood: {
      name: 'Wood',
      initialCapacity: 500,
      icon: 'tree',
      action: 'Chop'
    },
    iron: {
      name: 'Iron',
      initialCapacity: 500,
      icon: 'mountain',
      action: 'Mine'
    },
    oil: {
      name: 'Oil',
      initialCapacity: 100,
      icon: 'oil-field',
      action: 'Pump'
    },
  },
  workers: {
    unassigned: {
      hasMax: false,
      name: 'Unassigned',
      visible: false,
    },
    farmers: {
      hasMax: true,
      name: 'Farmers',
      visible: false,
    },
    woodcutters: {
      hasMax: false,
      name: 'Wood Cutters',
      visible: true,
    },
    miners: {
      hasMax: true,
      name: 'Miners',
      visible: false,
    },
  },
}
