import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { TextField, Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import {
   getCurrentWeather,
   getWeatherForecast,
} from '../../redux/actionCreator'
import { capitalize } from '../../utils'
import './ChangeLocation.scss'

function ChangeLocation({ currentCity, currentState }) {
   const dispatch = useDispatch()
   const locations = useSelector((store) => store.appReducer.locations)
   console.log('lo', locations && locations)
   const [city, setCity] = useState('')
   const [state, setState] = useState('')
   const [err, setErr] = useState('')
   const submitCityName = () => {
      dispatch({
         type: 'ADD_LOCATION',
         payload: { city: capitalize(city), state: state.toUpperCase() },
      })
      dispatch({ type: 'SET_LOCATION_NAME', payload: { city, state } })
      dispatch(getCurrentWeather(city))
      dispatch(getWeatherForecast(city))
   }
   const handleCityName = (e) => {
      setCity(e.target.value)
   }
   const handleStateName = (e) => {
      setState(e.target.value)
   }
   const updateCity = (location) => {
      dispatch({
         type: 'SET_LOCATION_NAME',
         payload: { city: location.city, state: location.state },
      })
      dispatch(getCurrentWeather(location.city))
      dispatch(getWeatherForecast(location.city))
   }
   const deleteCity = (location) => {
      dispatch({
         type: 'DELETE_LOCATION',
         payload: location.city,
      })
      dispatch({
         type: 'SET_LOCATION_NAME',
         payload: { city: locations[0].city, state: locations[0].state },
      })
   }

   return (
      <div className='location'>
         <div className='change-location'>
            ADD CITY{' '}
            <TextField
               id='standard-basic'
               label='City'
               margin='dense'
               onChange={handleCityName}
               required
               variant='outlined'
               style={{ width: 350, marginLeft: 10 }}
            />
            <TextField
               id='standard-basic'
               label='State'
               margin='dense'
               onChange={handleStateName}
               required
               variant='outlined'
               style={{ width: 80, marginLeft: 5 }}
            />
            <Button
               variant='contained'
               color='primary'
               disabled={!city || !state}
               onClick={submitCityName}
               style={{ marginLeft: 10 }}>
               Add
            </Button>
         </div>
            <h5>Current Selected Location(s)</h5>
         <div className='name-container'>
            {locations &&
               locations.map((location) => (
                  <div
                     className='name-tag'
                     onClick={() => updateCity(location)}>
                     {location.city}
                     <button onClick={()=>deleteCity(location)}>X</button>
                  </div>
               ))}{' '}
         </div>
      </div>
   )
}

export default ChangeLocation
