export { forecastWeather }

import { timeConverter, dayGiver } from './timeConverter.js'

function forecastWeather(d) {

    const cards = document.getElementsByClassName('cards')
    const locations = document.getElementsByClassName('location')
    const days = document.getElementsByClassName('days')
    const dates = document.getElementsByClassName('dates')
    const minTemperatures = document.getElementsByClassName('mintemp')
    const maxTemperatures = document.getElementsByClassName('maxtemp')
    const descriptions = document.getElementsByClassName('desc')
    const icons = document.getElementsByClassName('icons')
    const winds = document.getElementsByClassName('winds')

    // declare next 4 days' values (+24h) in 1 array.
    const forecastDaysAPI = [d.list[8], d.list[16], d.list[24], d.list[32]]
    // put all the measurements for next 5 days (every 3hrs) in a variable
    const allMeasurementsFiveDays = [...d.list]

    // insert the location,date and weather conditions by looping through the cards
    for (let i = 0; i < cards.length; i++) {
        //location, day, date
        locations[i].innerHTML = d.city.name + ' ' + d.city.country
        days[i].innerHTML = dayGiver(forecastDaysAPI[i].dt)
        dates[i].innerHTML = timeConverter(forecastDaysAPI[i].dt)

        for (let j = 0; j < allMeasurementsFiveDays.length; j++) {

            //extract the exact hour & date the forecast is made for
            const hour = allMeasurementsFiveDays[j].dt_txt.slice(11)
            const date = timeConverter(allMeasurementsFiveDays[j].dt)

            // check if the date corresponds with the card date and assign the 6am temperature as the minimum for the day.
            if (date === dates[i].innerHTML && hour === '06:00:00') {
                minTemperatures[i].innerHTML = 'Min temp: ' + parseInt(allMeasurementsFiveDays[j].main.temp_max) + '°C'
                // same but the maximum temp (15h)
            } else if (date === dates[i].innerHTML && hour === '15:00:00') {
                maxTemperatures[i].innerHTML = 'Max temp: ' + parseInt(allMeasurementsFiveDays[j].main.temp_min) + '°C'

                // the short weather description
                descriptions[i].innerHTML = allMeasurementsFiveDays[j].weather[0].description

                //icon
                const icon = allMeasurementsFiveDays[j].weather[0].icon + '.png'
                icons[i].setAttribute('src', icon);
                //wind
                winds[i].innerHTML = 'Wind speed: ' + parseInt(allMeasurementsFiveDays[j].wind.speed) + ' m/s'
            }
        }
    }
}




    //=========

    // let maxTemps = []
    // let cardDate = new Date()

    // for (let i = 0; i <= cards.length; i++) {

    //     locations[i].innerHTML = d.city.name + ', ' + d.city.country

    //     // check if date has zero as 1st symbol and, if true, display the date without it
    //     const dateWithoutZeros = cardDate.toString().slice(8, 11)[0] === '0' ? cardDate.toString().slice(9, 11) : cardDate.toString().slice(8, 11)
    //     // concatenate day + dates w/o zero + year
    //     const ddmmyyyyDateConvert = cardDate.toString().slice(0, 4) + dateWithoutZeros + cardDate.toString().slice(11, 15)

    //     // for (let j = 0; j < d.list.length; j++) {

    //     //     const hourAPI = d.list[j].dt_txt.slice(11)
    //     //     const ddmmyyyyDateAPI = timeConverter(d.list[j].dt)

    //     //     if (hourAPI === '06:00:00') {
    //     //         maxTemps.push(d.list[i].main.temp)
    //     //     }
    //     //     console.log(ddmmyyyyDateAPI)
    //     // }

    //     dates[i].innerHTML = ddmmyyyyDateConvert
    //     cardDate.setDate(cardDate.getDate() + 1)
    //     temperatures[i].innerHTML = maxTemps[i]
    // }

    // console.log(cardDate)
