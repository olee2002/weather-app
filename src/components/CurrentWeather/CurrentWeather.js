import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import moment from 'moment'

import { getCurrentWeather } from '../../redux/actionCreator'
import { capitalize } from '../../utils'

import './CurrentWeather.scss'

function CurrentWeather() {
   const dispatch = useDispatch()
   const location = useSelector((store) => store.appReducer.location)
   const locations = useSelector((store) => store.appReducer.locations)
   useEffect(() => {
      dispatch(getCurrentWeather(location && location.city))
   }, [])
   const date = moment(new Date()).format('MM/DD/YY')
   const data = useSelector((store) => store.appReducer.currentData)
   const weather = data && data.weather && data.weather[0]
   const temp =
      data && data.main && (((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)
   const currentTime = moment(new Date()).format('hh:mm a')
   return weather ? (
      <div className='weather-container'>
         <h4>
            {' '}
            Current weather in{' '}
            {location && location.city && capitalize(location.city)},{' '}
            {location && location.state.toUpperCase()}{' '}
         </h4>
         <div className='current-weather'>
            <div>As of {currentTime}<small>({date})</small> </div>
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
      </div>
   ) : (
      <div className='weather-container'>
         <h4> Current Weather on {date} </h4>
         <div className='current-weather'>
            <div>As of {currentTime} </div>
            <h6>Invalid city name, Please delete & try again!</h6>
            <CircularProgress />
         </div>
      </div>
   )
}

export default CurrentWeather
