import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeatherData } from './redux/actionCreator'

import './App.scss'

function App() {
   const dispatch = useDispatch()
   const [currentCity, setCurrentCity] = useState('Atlanta')
   
   useEffect(() => {
      dispatch(getWeatherData(currentCity))
   }, [])

   const data = useSelector((store) => store.appReducer.location)

   return (
      <div className='App'>
         <header className='App-header'>
            <p>
               Welcome to the weather app
            </p>
            <h6>
               Your current location is {currentCity}
            </h6>
         </header>
      </div>
   )
}

export default App
