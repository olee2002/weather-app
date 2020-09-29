import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import './WeatherContainer.scss'

import CurrentWeather from '../components/CurrentWeather/CurrentWeather'
import Forecast from '../components/Forecast/Forecast'

function WeatherContainer() {
   const [currentCity, setCurrentCity] = useState('San antonio')
   const [currentState, setCurrentState] = useState('NY')
   return (
      <div className='container'>
         <CurrentWeather currentCity={currentCity} currentState={currentState}/>
         <Forecast currentCity={currentCity}/>  
      </div>
   )
}

export default WeatherContainer
