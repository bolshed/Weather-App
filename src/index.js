import { apiKey } from './token.js'
import { currentWeather } from './currentWeather.js'
import { forecastWeather } from './forecastWeather.js'
import 'bootstrap/scss/bootstrap.scss'
import "./styles.css";

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

const btn = document.getElementById('searchCityBtn');
let cityInput = document.getElementById('cityInput')

btn.addEventListener('click', function () {
    let cityInputValue = cityInput.value
    const capitalizedCityName = cityInputValue.charAt(0).toUpperCase() + cityInputValue.slice(1).toLowerCase()
    fetchCurrentWeather(capitalizedCityName)
    fetchForecastWeather(capitalizedCityName)
})

cityInput.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        btn.click()
    }
})
