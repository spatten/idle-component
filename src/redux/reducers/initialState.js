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
      costExponential: 1.4,
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
        wood: 100,
        iron: 100
      },
      costExponential: 1.4,
      cost: {
        wood: 100,
        iron: 100
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
      costExponential: 2,
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
      costExponential: 2,
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
      costExponential: 2,
      cost: {
        wood: 800,
        iron: 400,
      }
    },
  },
  research: {
    fasterMiners: {
      name: 'Faster Miners',
      count: 0,
      icon: 'mountain',
      baseCost: {
        wood: 800,
        iron: 400
      },
      costExponential: 2,
      cost: {
        wood: 800,
        iron: 400,
      }

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
  },
}

export default function (state, action) {
  console.log(`initialState. state = ${JSON.stringify(state)}`)
  if (state === null || state === undefined || state === {}) {
    console.log('no state found. Loading initial default state')
    return initial
  }
  console.log('saved state found. Loading it...')
  return state
}
