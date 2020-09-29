import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import './CurrentWeather.scss';

function City() {
   const data = useSelector((store) => store.appReducer.currentData);
   const weather = data && data.weather && data.weather[0];
   const temp = data && data.main && ((( data.main.temp - 273.15) * 9/5) + 32).toFixed(0);
   const currentTime = moment(new Date()).format('hh:mm a');
   console.log(data, weather)
   return (
      <div className='current-weather'>
         <div>As of {currentTime} </div>
         <div className='temp'>{temp}°</div>
         <div><img src={`http://openweathermap.org/img/wn/${weather && weather.icon}@4x.png`}/></div>
         <div>{weather && weather.description}</div>
      </div>
   )
}

export default City
