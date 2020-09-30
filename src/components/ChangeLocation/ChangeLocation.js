import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button, MenuItem } from '@material-ui/core'
import SearchLocationInput from './SearchInput'

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
   const [inputValue, setInputValue] = useState('')
   const [width, setWidth] = useState(window.innerWidth)
   const updateDimensions = () => {
      setWidth(window.innerWidth)
   }
   useEffect(() => {
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
   }, [])

   const addCityName = async () => {
      if (!inputValue.includes(',')) {
         setCity('')
         setState('')
         alert('Invalid city name. Please try again!')
      } else {
         const address =
            inputValue && inputValue.split(',').map((e) => e.replace(' ', ''))
         const city = address && address[0]
         const state = address && address[1]
         setCity(city)
         setState(state)

         await dispatch(getCurrentWeather(city))
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
   const handleLocation = (e) => {
      setInputValue(e)
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
            <h6>{width > 1000 ? 'Add Location ' : ''}</h6>
            <SearchLocationInput handleLocation={handleLocation} />

            {width > 700 ? (
               <Button
                  variant='contained'
                  color='primary'
                  onClick={addCityName}
                  style={{ marginLeft: width > 700 ? 140 : 60 }}>
                  Add
               </Button>
            ) : (
               <button
                  variant='contained'
                  color='primary'
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
