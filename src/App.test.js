import React from 'react'
import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import moment from 'moment'

import App from './App'

const mockState = {
   forecastData: {},
   currentData: {},
   locations: [{ city: 'Atlanta', state: 'GA' }],
   location: { city: 'Atlanta', state: 'GA' },
   error: '',
}

reactRedux.useDispatch = jest.fn(() => {})
reactRedux.useSelector = jest.fn()

describe('test the weather app', () => {
   it('it renders current weather with today\'s date', () => {  
      const date = moment(new Date()).format('MM/DD/YY');
      const dispatch = jest.fn()
      reactRedux.useDispatch.mockReturnValue(dispatch)
      render(<App />)
      const weatherText = screen.getByText(/current weather/i)
      expect(weatherText).toBeInTheDocument()
      expect(weatherText.innerHTML.includes(date)).toBeTruthy()
   })
   it('it renders forecast title', () => {
      const dispatch = jest.fn()
      reactRedux.useDispatch.mockReturnValue(dispatch)
      render(<App />)
      const forecastText = screen.getByText(/Forecast for next 3 days/i)
      expect(forecastText).toBeInTheDocument()
   })
})
