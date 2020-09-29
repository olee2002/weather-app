import axios from 'axios'

import { FETCH_DATA } from './actionTypes'

const { REACT_APP_WEATHER_API_HOST, REACT_APP_WEATHER_API_KEY } = process.env

// creating an action creator for an async action and dispatch it to the store (Thunk middleware enables the dispatch)
export const getWeatherData = (name) => (dispatch) => {
   axios
      .get(`${REACT_APP_WEATHER_API_HOST}q=${name}&appid=${REACT_APP_WEATHER_API_KEY}`)
      .then((res) => {
         return dispatch({ type: FETCH_DATA, payload: res.data })})
      .catch((err) => console.log(err.message))
}
