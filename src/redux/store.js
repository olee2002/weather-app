import { createStore, applyMiddleware, compose } from 'redux'
// Thunk middleware is added to handle asynchronous actions.
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers'

// pass middlewares in the array
const middleware = [ReduxThunk];

export default function configureStore() {
   return createStore(rootReducer, 
      compose(
          applyMiddleware(...middleware),
          window.devToolsExtension ? window.devToolsExtension() : f => f
      ))
};