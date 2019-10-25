const initial = {
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
      costExponential: 1.4,
    },
    mine: {
      slug: 'mine',
      name: 'Mine',
      description: 'Allows up to 4 miners to work. Each miner produces 2 iron per tick.',
      icon: 'mountain',
      count: 0,
      baseCost: {
        wood: 100,
        iron: 100
      },
      costExponential: 1.4,
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
      costExponential: 2,
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
      costExponential: 2,
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
      costExponential: 2,
    },
  },
  research: {
    fasterFarmers: {
      name: 'Faster Farmers',
      count: 0,
      icon: 'media',
      baseCost: {
        wood: 8000,
        iron: 4000,
      },
      costExponential: 4,
    },
    fasterAxes: {
      name: 'Faster Axes',
      count: 0,
      icon: 'tree',
      baseCost: {
        wood: 8000,
        iron: 4000,
      },
      costExponential: 4,
    },
    fasterMiners: {
      name: 'Faster Miners',
      count: 0,
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
      count: 0,
      capacity: 500,
      icon: 'heart',
      action: 'Gather'
    },
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
      max: null,
      name: 'Unassigned',
      visible: false,
    },
    farmers: {
      count: 0,
      max: 0,
      name: 'Farmers',
      visible: false,
    },
    woodcutters: {
      count: 0,
      max: null,
      name: 'Wood Cutters',
      visible: true,
    },
    miners: {
      count: 0,
      max: 0,
      name: 'Miners',
      visible: false,
    },
  },
}

export default function (state, action) {
  if (state === null || state === undefined || state === {}) {
    return initial
  }
  return state
}
