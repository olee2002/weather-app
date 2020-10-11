import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import SearchLocationInput from './SearchInput'

import {
   getCurrentWeather,
   getWeatherForecast,
} from '../../redux/actionCreator'
import { capitalize } from '../../utils'
import './ChangeLocation.scss'

function ChangeLocation() {
   const dispatch = useDispatch()
   const locations = useSelector((store) => store.appReducer.locations)
   const storedLocation = useSelector((store) => store.appReducer.location)
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
         alert('Invalid city name. Please try again!')
      } else {
         const address =
            inputValue && inputValue.split(',')
         const city = address && address[0]
         const state = address && address[1]

         await dispatch(getCurrentWeather(city))
         await dispatch(getWeatherForecast(city))
         await dispatch({
            type: 'ADD_LOCATION',
            payload: { city: capitalize(city), state: state.toUpperCase() },
         })
         await dispatch({ type: 'SET_LOCATION_NAME', payload: { city, state } })
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
         alert("Can't delete the default location. Please select another location.")
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
            <SearchLocationInput handleLocation={handleLocation} />
            <Button variant='contained' color='primary' onClick={addCityName} size="large" variant="text">
               Add City
            </Button>
         </div>
         <h5>
            {locations && locations.length === 1
               ? 'Default Location'
               : 'Currently Selected Locations'}
         </h5>
         <div className='name-container'>
            {locations && locations.length>0 && 
               locations.map((location, i) => (
                  <div
                     className='name-tag'
                     key={i}
                     style={{
                        border: '1px solid white',
                        background:
                           location.city === (storedLocation &&
                           storedLocation.city) &&
                           '#627CA2',
                     }}>
                     <div className='city' onClick={() => updateCity(location)}>
                        <span
                           style={{
                              color:
                                 location.city === (storedLocation &&
                                 storedLocation.city)&&
                                 '#ffffff',
                           }}>
                           {' '}
                           {location.city}{' '}
                        </span>
                     </div>
                    {i!==0 && <button onClick={() => deleteCity(location)}>X</button>}
                  </div>
               ))}{' '}
         </div>
      </div>
   )
}

export default ChangeLocation
