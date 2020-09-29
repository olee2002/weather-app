import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button, MenuItem } from '@material-ui/core'

import {
   getCurrentWeather,
   getWeatherForecast,
} from '../../redux/actionCreator'
import { capitalize } from '../../utils'
import states from './stateList'
import './ChangeLocation.scss'

function ChangeLocation() {
   const dispatch = useDispatch()
   const locations = useSelector((store) => store.appReducer.locations)
   const errMsg = useSelector((store) => store.appReducer.error)
   const [city, setCity] = useState('')
   const [state, setState] = useState('')
   const [width, setWidth] = useState(window.innerWidth)
   const updateDimensions = () => {
      setWidth(window.innerWidth)
   }
   useEffect(() => {
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
   }, [])
   const addCityName = async () => {
      await dispatch(getCurrentWeather(city))

      if (errMsg && errMsg.includes('404')) {
         setCity('')
         setState('')
         alert('Invalid city name. Please try again!')
      } else {
         await dispatch(getWeatherForecast(city))
         await dispatch({
            type: 'ADD_LOCATION',
            payload: { city: capitalize(city), state: state.toUpperCase() },
         })
         await dispatch({ type: 'SET_LOCATION_NAME', payload: { city, state } })
         setCity('')
         setState('')
      }
   }
   const handleCityName = (e) => {
      setCity(e.target.value)
   }
   const handleStateName = (e) => {
      setState(e.target.value)
   }
   const updateCity = (location) => {
      dispatch(getCurrentWeather(location.city))
      dispatch(getWeatherForecast(location.city))
      dispatch({
         type: 'SET_LOCATION_NAME',
         payload: { city: location.city, state: location.state },
      })
   }
   const deleteCity = (location) => {
      if (location.city === 'Atlanta') {
         alert("Can't delete the default location. Please add a location.")
      } else {
         dispatch({
            type: 'DELETE_LOCATION',
            payload: location.city,
         })
         dispatch({
            type: 'SET_LOCATION_NAME',
            payload: {
               city: locations && locations[0].city,
               state: locations && locations[0].state,
            },
         })
         dispatch(getCurrentWeather(locations && locations[0].city))
         dispatch(getWeatherForecast(locations && locations[0].city))
      }
   }

   return (
      <div className='location'>
         <div className='change-location'>
            {width > 1000 ? 'Add Location' : ''}
            <TextField
               id='city'
               label='City'
               margin='dense'
               onChange={handleCityName}
               required
               variant='outlined'
               style={{ width: width === 700 ? '35%' : '45%', marginLeft: 10 }}
               value={city || ''}
            />
            <TextField
               helperText=''
               id='state'
               label='State'
               margin='dense'
               onChange={handleStateName}
               required
               select
               style={{ width: 95, marginLeft: 5 }}
               variant='outlined'
               value={state || ''}>
               {states.map((option) => (
                  <MenuItem
                     key={option.abbreviation}
                     value={option.abbreviation}>
                     {option.abbreviation}
                  </MenuItem>
               ))}
            </TextField>
            {width > 700 ? (
               <Button
                  variant='contained'
                  color='primary'
                  disabled={!city || !state}
                  onClick={addCityName}
                  style={{ marginLeft: 10 }}>
                  Add
               </Button>
            ) : (
               <button
                  variant='contained'
                  color='primary'
                  disabled={!city || !state}
                  onClick={addCityName}
                  style={{ marginLeft: 10, height: 30, width: 30 }}>
                  +
               </button>
            )}
         </div>
         <h5>
            {locations && locations.length === 1
               ? 'Default Location'
               : 'Current Selected Location(s)'}
         </h5>
         <div className='name-container'>
            {locations &&
               locations.map((location, i) => (
                  <div className='name-tag' key={i}>
                     <div className='city' onClick={() => updateCity(location)}>
                        {location.city}
                     </div>
                     <button onClick={() => deleteCity(location)}>X</button>
                  </div>
               ))}{' '}
         </div>
      </div>
   )
}

export default ChangeLocation
