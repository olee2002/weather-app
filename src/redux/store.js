// configureStore

import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Thunk middleware is added to handle asynchronous actions.
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers'

const persistConfig = {
   key: 'root',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// pass middlewares in the array
const middleware = [ReduxThunk]

export default function configureStore() {
   let store = createStore(
      persistedReducer,
      compose(applyMiddleware(...middleware))
   )
   let persistor = persistStore(store)
   return { store, persistor }
}
