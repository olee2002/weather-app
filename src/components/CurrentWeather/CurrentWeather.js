import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getCurrentWeather } from '../../redux/actionCreator';
import { capitalize } from '../../utils';

import './CurrentWeather.scss';

function CurrentWeather() {
   const dispatch = useDispatch()
   const location = useSelector((store) => store.appReducer.location);
   useEffect(() => {
      dispatch(getCurrentWeather(location.city))
   }, [])
   const date = moment(new Date()).format('MM/DD/YY')
   const data = useSelector((store) => store.appReducer.currentData);
   const weather = data && data.weather && data.weather[0]
   console.log('haha', weather)
   const temp =
      data && data.main && (((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)
   const currentTime = moment(new Date()).format('hh:mm a')
   return (
      <div className='weather-container'>
         <h4> Current Weather on {date} </h4>
         <div className='current-weather'>
            <div>As of {currentTime} </div>
            <div className='temp'>{temp}°</div>
            <div>
               <img
                  src={`http://openweathermap.org/img/wn/${
                     weather && weather.icon
                  }@4x.png`}
               />
            </div>
            <div>{weather && weather.description}</div>
         </div>
         <h5>
            Your current location is {location && location.city && capitalize(location.city)}, {location && location.state.toUpperCase()}
         </h5>
      </div>
   )
}

export default CurrentWeather
