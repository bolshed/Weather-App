// display city + country  // days // make 2 fetches/ functions for current and forecast

import 'bootstrap/scss/bootstrap.scss'
import { apiKey } from './token.js'
import { currentWeather } from './currentWeather.js'
import { forecastWeather } from './forecastWeather.js'

function fetchCurrentWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=metric')

        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            currentWeather(data);
        })
        .catch(function () {
            alert("Error current weather")
        })
}

function fetchForecastWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=metric')

        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            forecastWeather(data);
        })
        .catch(function () {
            alert("Error forecast")
        })
}

window.onload = function () {
    fetchCurrentWeather('Berlin');
    fetchForecastWeather('Berlin');

}

// let btn = document.getElementById('cityButton');
// let cityInput = document.getElementById('cityInput')
// let cityInputValue = cityInput.value

// btn.addEventListener('click', searchCity(cityInput.value));

// function searchCity(cityName) {
//     console.log(cityName);
//     cityName.toLowerCase
//     if (cityName === 'varna') {
//         fetchCurrentWeather('Varna');
//     } else {
//         console.log(`shit`);
//     }
// }
