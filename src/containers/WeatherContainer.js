import React from 'react';

import './WeatherContainer.scss';

import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import Forecast from '../components/Forecast/Forecast'
import ChangeLocation from '../components/ChangeLocation/ChangeLocation';

function WeatherContainer() {
   return (
      <div className='container'>
         <ChangeLocation/>
         <div className='subcontainer'>
         <CurrentWeather/>
         <Forecast/>
         </div>
      </div>
   )
}

export default WeatherContainer
