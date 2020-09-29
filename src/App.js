import React from 'react'

import WeatherContainers from './containers/WeatherContainer'

import './App.scss'

function App() {
   return (
      <div className='App'>
         <div className='App-header'>
            <WeatherContainers />
         </div>
      </div>
   )
}

export default App
