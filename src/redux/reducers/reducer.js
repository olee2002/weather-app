import {
   ADD_LOCATION,
   DELETE_LOCATION,
   FETCH_FORECAST_DATA,
   FETCH_CURRENT_DATA,
   FETCH_DATA_ERROR,
   SET_LOCATION_NAME,
} from '../actionTypes'

// initialState has to be set for reducer
const initialState = {
   forecastData: {},
   currentData: {},
   locations: [{ city: 'Atlanta', state: 'GA' }],
   location: { city: 'Atlanta', state: 'GA' },
   error: ''
}

// reducer take state and action as args, depending on the action.type update the store with action.payload
export default function appReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_LOCATION:
         state = {
            locations: [...state.locations, action.payload],
         }
         return state
      case DELETE_LOCATION:
         state = {
            locations: state.locations.filter(
               (location) => location.city !== action.payload
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
         case FETCH_DATA_ERROR:
            console.log('reducer error', action.payload)
         state = {
            ...state,
            error: action.payload,
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
