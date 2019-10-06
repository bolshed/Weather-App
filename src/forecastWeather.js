export { forecastWeather }

function forecastWeather(d) {
    console.log(d);

    function timeConverter(UNIX_timestamp) {
        const a = new Date(UNIX_timestamp * 1000)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const year = a.getFullYear()
        const month = months[a.getMonth()]
        const date = a.getDate()
        // const date = a.getDate().length === 10 ? '0' + a.getDate() : a.getDate()
        const time = date + ' ' + month + ' ' + year
        return time
    }

    const cards = document.getElementsByClassName('cards')
    const locations = document.getElementsByClassName('location')
    const dates = document.getElementsByClassName('dates')
    const temperatures = document.getElementsByClassName('temp')
    temperatures[0].innerHTML = parseInt(d.list[0].main.temp) + ' °C'

    let maxTemps = []
    for (let i = 0; i < d.list.length; i++) {
        const hour = d.list[i].dt_txt.slice(11)
        const date = timeConverter(d.list[i].dt)
        if (hour === '15:00:00' && date) {
            maxTemps.push(d.list[i].main.temp)
        }
        // console.log(date)
    }

    let cardDate = new Date()
    for (let i = 0; i <= cards.length; i++) {
        locations[i].innerHTML = d.city.name + ', ' + d.city.country

        // check if date has zero as 1st symbol and, if true, display the date without it
        const dateWithoutZeros = cardDate.toString().slice(8, 11)[0] === '0' ? cardDate.toString().slice(9, 11) : cardDate.toString().slice(8, 11)
        // concatenate day + dates w/o zero + year
        const ddmmyyyyDateConvert = cardDate.toString().slice(0, 4) + dateWithoutZeros + cardDate.toString().slice(11, 15)

        dates[i].innerHTML = ddmmyyyyDateConvert
        // dates[i].innerHTML = cardDate.toString().slice(0, 15)
        cardDate.setDate(cardDate.getDate() + 1)
        temperatures[i].innerHTML = maxTemps[i]
    }





    // for (let i = 0; i <= d.list.length; i++) {
    //     let hour = d.list[i].dt_txt.slice(11)

    //     if (hour === '15:00:00') {

    //         for (let j = 0; j <= cards.length; j++) {
    //             temperatures[j].innerHTML = d.list[i].main.temp;
    //             i++
    //             console.log('whoaa')
    //         }
    //         return
    //     }
    // }

    // for (let i = 0; i <= cards.length; i++) {
    //     for (let j = 0; j <= d.list.length; j++) {
    //         let hour = d.list[j].dt_txt.slice(11)
    //         if (hour === '15:00:00') {
    //             console.log('whoaa')
    //             temperatures[i].innerHTML = d.list[j + 7].main.temp
    //         }
    //     }
    // }
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
// 