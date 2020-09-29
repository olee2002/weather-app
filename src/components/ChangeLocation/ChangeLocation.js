import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { TextField, Button } from '@material-ui/core';

import { getCurrentWeather, getWeatherForecast } from '../../redux/actionCreator';
import './ChangeLocation.scss'

function ChangeLocation({ currentCity, currentState }) {
   const dispatch = useDispatch();
   const data = useSelector((store) => store.appReducer.location);
   console.log('data', data)
   const [city, setCity] = useState('Atlanta')
   const [state, setState] = useState('GA')
   const submitCityName = () => {
      dispatch({ type: 'SET_LOCATION_NAME', payload: { city, state } });
      dispatch(getCurrentWeather(city));
      dispatch(getWeatherForecast(city));
   }
   const handleCityName = (e) => {
      setCity(e.target.value)
   }
   const handleStateName = (e) => {
      setState(e.target.value)
   }
   return (
      <div className='change-location'>
         Search different city{' '}
         <TextField
            id='standard-basic'
            label='City'
            margin='dense'
            onChange={handleCityName}
            required
            variant='outlined'
            style={{ width: 350 }}
         />
          <TextField
            id='standard-basic'
            label='State'
            margin='dense'
            onChange={handleStateName}
            required
            variant='outlined'
            style={{ width: 100 }}
         />
         <Button
            variant='contained'
            color='primary'
            onClick={submitCityName}
            style={{ marginLeft: 10 }}>
            Submit
         </Button>
      </div>
   )
}

export default ChangeLocation
