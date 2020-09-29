import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './WeatherContainer.scss'

import City from '../components/CurrentWeather/CurrentWeather'

function WeatherContainer({currentCity, currentState}) {
   return (
      <div className='container'>
         <h4>Your current location is {currentCity},{currentState}</h4>
         <City/>
      </div>
   )
}

export default WeatherContainer
