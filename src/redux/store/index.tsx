import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import * as History from 'history'

export const history = History.createBrowserHistory()

const middlewares = [thunk]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
  )
)

export default store
