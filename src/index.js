import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './redux/store'
import App from './App'

const { store, persistor } = configureStore()
// Provider is a redux wrapper to store states in the store in the app level.
ReactDOM.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>,
   document.getElementById('root')
)
