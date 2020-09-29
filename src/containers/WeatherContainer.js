import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import './WeatherContainer.scss';

import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import Forecast from '../components/Forecast/Forecast'
import ChangeLocation from '../components/ChangeLocation/ChangeLocation';

function WeatherContainer() {
   const [currentCity, setCurrentCity] = useState('San antonio')
   const [currentState, setCurrentState] = useState('NY')
   return (
      <div className='container'>
         <ChangeLocation/>

         <div className='subcontainer'>
         <CurrentWeather
            currentCity={currentCity}
            currentState={currentState}
         />
         <Forecast currentCity={currentCity} />
         </div>
      </div>
   )
}

export default WeatherContainer
