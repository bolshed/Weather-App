export { timeConverter, dayGiver }

function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const year = a.getFullYear()
    const month = months[a.getMonth()]
    const date = a.getDate()

    const time = `${date} ${month} ${year}`
    return time
}

const dayGiver = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const day = days[a.getDay()]
    return day
}
