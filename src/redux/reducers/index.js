import reduceReducers from 'reduce-reducers'
import initialState from './initialState'
import resourcesReducer from './resourcesReducer'
import buildingsReducer from './buildingsReducer'
import workersReducer from './workersReducer'

export default reduceReducers(initialState, resourcesReducer, buildingsReducer, workersReducer)
