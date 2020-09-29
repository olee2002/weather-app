import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { TextField, Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import {
   getCurrentWeather,
   getWeatherForecast,
} from '../../redux/actionCreator'
import './ChangeLocation.scss'

function ChangeLocation({ currentCity, currentState }) {
   const dispatch = useDispatch()
   const data = useSelector((store) => store.appReducer.location)
   const [city, setCity] = useState('')
   const [state, setState] = useState('')
   const [err, setErr] = useState('')
   const submitCityName = () => {
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


   return (
      <div className='change-location'>
         Search {' '}
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
            style={{ width: 80, marginLeft: 10 }}
         />
         <Button
            variant='contained'
            color='primary'
            disabled={!city || !state}
            onClick={submitCityName}
            style={{ marginLeft: 10 }}>
            Submit
         </Button>
      </div>
   )
}

export default ChangeLocation
