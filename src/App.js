import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentWeather, getWeatherForecast } from './redux/actionCreator'

import WeatherContainers from './containers/WeatherContainer'

import './App.scss'

function App() {
   const dispatch = useDispatch()
   const [currentCity, setCurrentCity] = useState('Atlanta')
   const [currentState, setCurrentState] = useState('GA')
   const [cnt, setCurrentCnt] = useState(3)

   useEffect(() => {
     // dispatch(getWeatherForecast(currentCity))
      dispatch(getCurrentWeather(currentCity))
   }, [])

   return (
      <div className='App'>
         <div className='App-header'>
            <WeatherContainers currentCity={currentCity} currentState={currentState}/>
         </div>
      </div>
   )
}

export default App
