import React, { useState, useEffect } from 'react'

import WeatherContainers from './containers/WeatherContainer'

import './App.scss'

function App() {
   const [currentCity, setCurrentCity] = useState('Atlanta')
   const [currentState, setCurrentState] = useState('GA')
   const [cnt, setCurrentCnt] = useState(3)

   return (
      <div className='App'>
         <div className='App-header'>
            <WeatherContainers currentCity={currentCity} currentState={currentState}/>
         </div>
      </div>
   )
}

export default App
