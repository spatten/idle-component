import reduceReducers from 'reduce-reducers'
import initialState from './initialState'
import resourcesReducer from './resourcesReducer'
import researchesReducer from './researchesReducer'
import buildingsReducer from './buildingsReducer'
import workersReducer from './workersReducer'
import ticksReducer from './ticksReducer'

export default reduceReducers(initialState, resourcesReducer, buildingsReducer, researchesReducer, workersReducer, ticksReducer)
