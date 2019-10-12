import reduceReducers from 'reduce-reducers'
import resourcesReducer from './resourcesReducer'
import buildingsReducer from './buildingsReducer'
import initialState from './initialState'

export default reduceReducers(initialState, resourcesReducer, buildingsReducer)
