This project is bootstrapped with Create React App.

Current app is deployed at : https://weather-app-olee.netlify.app/

The technologies being used in this app are React/Hooks, Redux, Redux thunk, Redux-persist, material UI, node-sass, openweatherAPI, googlePlacesAPI etc.

For desktop/web
<p>
<img src="https://github.com/olee2002/weather-app/blob/master/src/assets/images/fullscreen.png" width="600">
</p>

For mobile
<p>
<img src="https://github.com/olee2002/weather-app/blob/master/src/assets/images/mobile01.png" width="300">
<img src="https://github.com/olee2002/weather-app/blob/master/src/assets/images/mobile02.png" width="300">
</p>

In order to run this app, you will need to create a .env file in your root directory.
Go to https://home.openweathermap.org/ and login/register and get a free version of apikey at 
https://home.openweathermap.org/api_keys. Pass the key below as a string.

Also, in order for users to input the city name field, google autocomplete has been added.
For the API_KEY to work, Google Places API and Google Maps Javascript API both have been utilized.

```
REACT_APP_WEATHER_API_KEY={YOUR API KEY}
REACT_APP_GOOGLE_API_KEY={YOUR API KEY}
```
## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
