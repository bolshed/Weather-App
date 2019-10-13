// import clouds from './images/04d.png'
// import iconSelector from './iconSelector.js'
export { currentWeather }

import { timeConverter } from './timeConverter.js'

function currentWeather(d) {
    //location
    document.getElementById('location0').innerHTML = d.name + ' ' + d.sys.country
    //date
    document.getElementById('date0').innerHTML = timeConverter(d.dt)
    //icon
    const icon = document.getElementById('icon0')
    icon.src = d.weather[0].icon + '.png'
    // const icon = d.weather[0].icon + '.png'
    // const icon = '../src/images/04d.png'
    // document.getElementById('icon0').setAttribute('src', icon)
    //temperature
    document.getElementById('temp00').innerHTML = parseInt(d.main.temp) + ' °C'
    //description
    document.getElementById('desc0').innerHTML = d.weather[0].description[0].toUpperCase() + d.weather[0].description.slice(1)
    //wind
    document.getElementById('wind0').innerHTML = 'Wind speed: ' + parseInt(d.wind.speed) + ' m/s'
    //min-max temp
    // document.getElementById('mmtemp0').innerHTML = 'Min: ' + parseInt(d.main.temp_min) + '&deg;' + 'C ' + 'Max: ' + parseInt(d.main.temp_max) + '&deg;' + 'C'
}