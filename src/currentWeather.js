export { currentWeather }

function currentWeather(d) {
    //icon
    const icon = d.weather[0].icon + '.png';
    document.getElementById('icon0').setAttribute('src', icon);
    //temperature
    // document.getElementById('temp00').innerHTML = celsiusCurrent + '&deg;' + 'C';
    //description
    document.getElementById('desc0').innerHTML = d.weather[0].description[0].toUpperCase() + d.weather[0].description.slice(1);
    //wind
    document.getElementById('wind0').innerHTML = 'Wind speed: ' + d.wind.speed + 'm/s';
    //min-max temp
    document.getElementById('mmtemp0').innerHTML = 'Min: ' + parseInt(d.main.temp_min) + '&deg;' + 'C ' + 'Max: ' + parseInt(d.main.temp_max) + '&deg;' + 'C';
}