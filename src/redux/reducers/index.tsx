import { combineReducers } from 'redux'
import deviceModelReducer from './deviceModelReducer'
import deviceReducer from './deviceReducer'
import dssReducer from './dssReducer'

export default combineReducers({
  deviceModelReducer,
  deviceReducer,
  dssReducer
});
