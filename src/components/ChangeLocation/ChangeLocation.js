import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { TextField, Button}  from '@material-ui/core'

import { getCurrentWeather } from '../../redux/actionCreator'

import './ChangeLocation.scss'

function ChangeLocation({ currentCity, currentState }) {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCurrentWeather(currentCity))
   }, [])
   const date = moment(new Date()).format('MM/DD/YY')
   const data = useSelector((store) => store.appReducer.currentData)
   const weather = data && data.weather && data.weather[0]
   const temp =
      data && data.main && (((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)
   const currentTime = moment(new Date()).format('hh:mm a')
   return (
      <div className='change-location'>
         Search different city {' '}
            <TextField
               id='standard-basic'
               label='City Name'
               margin="dense"
               variant='outlined'
               style={{ width: 350 }}
            />
            <Button variant="contained" color="primary" style={{ marginLeft: 10 }}>Submit</Button>
      </div>
   )
}

export default ChangeLocation
