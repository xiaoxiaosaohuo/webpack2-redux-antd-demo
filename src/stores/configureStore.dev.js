import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// import api from '../middleware/api'
import rootReducer from '../reducers/rootReducer'
import DevTools from '../containers/DevTools'
import { browserHistory } from 'react-router'

import { routerMiddleware } from 'react-router-redux'

const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk,routingMiddleware,createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
