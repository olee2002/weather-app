import axios from 'axios'

import { FETCH_FORECAST_DATA, FETCH_CURRENT_DATA } from './actionTypes'

const { REACT_APP_WEATHER_API_KEY } = process.env
const REACT_APP_WEATHER_API_HOST='https://api.openweathermap.org/data/2.5/'

// creating an action creator for an async action and dispatch it to the store (Thunk middleware enables the dispatch)
export const getWeatherForecast = (city) => (dispatch) => {
   axios
      .get(`${REACT_APP_WEATHER_API_HOST}forecast?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`)
      .then((res) => {
         return dispatch({ type: FETCH_FORECAST_DATA, payload: res.data })})
      .catch((err) => console.log(err.message))
}

export const getCurrentWeather = (city) => (dispatch) => {
   axios
      .get(`${REACT_APP_WEATHER_API_HOST}weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`)
      .then((res) => {
         return dispatch({ type: FETCH_CURRENT_DATA, payload: res.data })})
      .catch((err) => console.log(err.message))
}
