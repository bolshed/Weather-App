export { currentWeather }

function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const year = a.getFullYear()
    const month = months[a.getMonth()]
    const date = a.getDate()
    const time = date + ' ' + month + ' ' + year
    return time
}

function currentWeather(d) {
    //location
    document.getElementById('location0').innerHTML = d.name + ',' + d.sys.country
    //date
    document.getElementById('date0').innerHTML = timeConverter(d.dt)
    //icon
    const icon = d.weather[0].icon + '.png';
    document.getElementById('icon0').setAttribute('src', icon);
    //temperature
    document.getElementById('temp00').innerHTML = parseInt(d.main.temp) + ' °C'
    //description
    document.getElementById('desc0').innerHTML = d.weather[0].description[0].toUpperCase() + d.weather[0].description.slice(1);
    //wind
    document.getElementById('wind0').innerHTML = 'Wind speed: ' + d.wind.speed + 'm/s';
    //min-max temp
    document.getElementById('mmtemp0').innerHTML = 'Min: ' + parseInt(d.main.temp_min) + '&deg;' + 'C ' + 'Max: ' + parseInt(d.main.temp_max) + '&deg;' + 'C';
}