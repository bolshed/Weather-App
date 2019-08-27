export { currentWeather }
// export { date }

function date() {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    const today = yyyy + '.' + mm + '.' + dd;

    return today;
}

function currentWeather(d) {
    const celsiusCurrent = Math.round(parseFloat(d.main.temp) - 273.15);
    const fahrenheitCurrent = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    const celsiusMin = Math.round(parseFloat(d.main.temp_min) - 273.15);
    const celsiusMax = Math.round(parseFloat(d.main.temp_max) - 273.15);


    // location
    document.getElementById('location0').innerHTML = d.name;
    // date
    document.getElementById('date0').innerHTML = date();
    //icon
    const icon = d.weather[0].icon + '.png';
    document.getElementById('icon0').setAttribute('src', icon);
    //temperature
    document.getElementById('temp00').innerHTML = celsiusCurrent + '&deg;' + 'C';
    //description
    document.getElementById('desc0').innerHTML = d.weather[0].description[0].toUpperCase() + d.weather[0].description.slice(1);
    //wind
    document.getElementById('wind0').innerHTML = 'Wind speed: ' + d.wind.speed + 'm/s';
    //min-max temp
    document.getElementById('mmtemp0').innerHTML = 'Min: ' + celsiusMin + '&deg;' + 'C ' + 'Max: ' + celsiusMax + '&deg;' + 'C';
}