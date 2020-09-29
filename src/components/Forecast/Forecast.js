import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { getWeatherForecast } from '../../redux/actionCreator'

import './Forecast.scss'

function Forecast() {
   const dispatch = useDispatch()
   const location = useSelector((store) => store.appReducer.location);
   useEffect(() => {
      dispatch(getWeatherForecast(location.city))
   }, [])
   const data = useSelector((store) => store.appReducer.forecastData)
   const dates =
      data && data.list && data.list.slice(7, 26).filter((d, i) => i % 8 === 0) // filter data to get next 3 days
   console.log('dates', dates)
   return (
      <div className='forecast'>
         <h4> Forecast for next 3 days </h4>
         {dates &&
            dates.map((date, i) => {
               const weather = date && date.weather && date.weather[0]
               return (
                  <div key={i} className='forecast-item'>
                    <h6> {moment(date.dt_txt.split(' ')[0]).format('MM/DD/YY')}</h6>
                     <div>
                        <img
                           src={`http://openweathermap.org/img/wn/${
                              weather && weather.icon
                           }@4x.png`}
                        />
                     </div>
                     <h6>{weather && weather.description}</h6>
                  </div>
               )
            })}
      </div>
   )
}

export default Forecast
