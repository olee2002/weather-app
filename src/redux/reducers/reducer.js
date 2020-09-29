import {
   ADD_LOCATION,
   DELETE_LOCATION,
   FETCH_FORECAST_DATA,
   FETCH_CURRENT_DATA,
   SET_LOCATION_NAME,
} from '../actionTypes'

// initialState has to be set for reducer
const initialState = {
   forecastData: {},
   currentData: {},
   locations: [],
   location: { city: 'Atlanta', state: 'GA' },
}

// reducer take state and action as args, depending on the action.type update the store with action.payload
export default function appReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_LOCATION:
         state = {
            locations: [action.payload, ...state.locations],
         }
         return state
      case DELETE_LOCATION:
         state = {
            locations: state.locations.filter(
               (location) => location.id !== action.payload
            ),
         }
         return state
      case FETCH_FORECAST_DATA:
         state = {
            ...state,
            forecastData: action.payload,
         }
         return state
      case FETCH_CURRENT_DATA:
         state = {
            ...state,
            currentData: action.payload,
         }
         return state
      case SET_LOCATION_NAME:
         state = {
            ...state,
            location: action.payload,
         }
         return state
      default:
         return state
   }
}
