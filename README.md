This project is created for a coding test and bootstrapped with Create React App.
Current app is deployed at : https://weather-app-olee.netlify.app/
![alt text](https://github.com/olee2002/weather-app/blob/master/src/assets/images/fullscreen.png)
<p>
<img src="https://github.com/olee2002/weather-app/blob/master/src/assets/images/mobile01.png" width="48">
<img src="https://github.com/olee2002/weather-app/blob/master/src/assets/images/mobile02.png" width="48">
</p>

In order to run this app, you will need to create a .env file in your root directory.
Go to https://home.openweathermap.org/ and login/register and get a free version of apikey at 
https://home.openweathermap.org/api_keys. Pass the key below as a string.

Also, in order for users to input the city name accurately, google autocomplete has been incorporated.
And in order for the API_KEY to work, Google Places API as well as Google Maps Javascript API have to be activated.

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
