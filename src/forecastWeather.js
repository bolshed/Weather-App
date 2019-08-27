export { forecastWeather }

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
    const tomorrow = dd + '.' + mm + '.' + yyyy;

    return tomorrow;
}

function forecastWeather(d) {
    // const celsiusCurrent = Math.round(parseFloat(d.list.temp) - 273.15);
    // const fahrenheitCurrent = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    // const celsiusMin = Math.round(parseFloat(d.main.temp_min) - 273.15);
    // const celsiusMax = Math.round(parseFloat(d.main.temp_max) - 273.15);
    // console.log(d.list[0].dt_txt.slice(0, d.list[0].dt_txt.length-9));
    // console.log(d.list[0].dt_txt.slice(11)); // time of the day
    console.log(d);
    let cards = document.getElementsByClassName('cards');
    let locations = document.getElementsByClassName('location');
    let dates = document.getElementsByClassName('dates');
    dates[0].innerHTML = date();
    for (let i = 0; i < d.list.length; i++) {
        // console.log(document.getElementById('temp' + i))
        if (d.list[i].dt_txt.slice(11) == '15:00:00') {
            console.log('whoaa');
            for (let j = 0; j < cards.length; j++) {
                locations[j].innerHTML = d.city.name + ', ' +  d.city.country;
                document.getElementById('temp'+j).innerHTML = d.list[i].main.temp;
            }
        }

    }

    // console.log(d.list[j].dt_txt.slice(11));
    //     if (d.list[i].dt_txt.slice(11) == '15:00:00') {
    //         console.log('whiaa');
    //         // console.log(Math.round(parseFloat(d.list[i].main.temp - 273.15)));
    //         // document.getElementById('temp'+j).innerHTML = Math.round(parseFloat(d.list[j].main.temp));
    //     // console.log(d.list[j].main.temp)

    //     // if ((d.list[j].dt_txt.slice(0, d.list[j].dt_txt.length-9) !== date()) && (d.list[0].dt_txt.slice(11)) == '12:00:00') { 

    // }

    // console.log(cards.length);
    // console.log(d.list.length)
}

//======

// function forecastWeather(d) {
//     const celsiusCurrent = Math.round(parseFloat(d.main.temp) - 273.15);
//     const fahrenheitCurrent = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
//     const celsiusMin = Math.round(parseFloat(d.main.temp_min) - 273.15);
//     const celsiusMax = Math.round(parseFloat(d.main.temp_max) - 273.15);


//     // location
//     document.getElementById('location0').innerHTML = d.name;
//     // date
//     document.getElementById('date0').innerHTML = date();
//     //icon
//     const icon = d.weather[0].icon + '.png';
//     document.getElementById('icon0').setAttribute('src', icon);
//     //temperature
//     document.getElementById('temp0').innerHTML = celsiusCurrent + '&deg;' + 'C';
//     //description
//     document.getElementById('desc0').innerHTML = d.weather[0].description[0].toUpperCase() + d.weather[0].description.slice(1);
//     //wind
//     document.getElementById('wind0').innerHTML = 'Wind speed: ' + d.wind.speed + 'm/s';
//     //min-max temp
//     document.getElementById('mmtemp0').innerHTML = 'Min: ' + celsiusMin + '&deg;' + 'C ' + 'Max: ' + celsiusMax + '&deg;' + 'C';
// }