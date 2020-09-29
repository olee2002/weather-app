import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeatherData } from './redux/actionCreator'

import logo from './logo.svg'
import './App.scss'

function App() {
   const dispatch = useDispatch()
   // useEffect(() => {
   //    dispatch(getWeatherData('Atlanta'))
   // }, [])

   const data = useSelector((store) => store.appReducer.location)
   console.log('data', data)

   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Welcome to the weather app
            </p>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'>
               Learn React
            </a>
         </header>
      </div>
   )
}

export default App
