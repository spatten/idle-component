import reduceReducers from "reduce-reducers";
import resourcesReducer from "./resourcesReducer"
import buildingsReducer from "./buildingsReducer"

const initialState = {
  buildings: {
    hut: {
      slug: 'hut',
      name: 'Hut',
      count: 0,
      cost: {
        wood: 10
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

export default reduceReducers(initialState, resourcesReducer, buildingsReducer);
