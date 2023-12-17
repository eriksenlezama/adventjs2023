function calculateTime(deliveries) {
    let totalSeconds = 0
    let hours = 0
    let minutes = 0
    let seconds = 0

    deliveries.forEach(time => {
        const [hours, minutes, seconds] = time.split(':')

        totalSeconds += parseInt(hours * 3600)
        totalSeconds += parseInt(minutes * 60)
        totalSeconds += parseInt(seconds)
    })

    totalSeconds = totalSeconds - 7 * 3600

    const sign = totalSeconds < 0 ? '-' : ''

    totalSeconds = Math.abs(totalSeconds)
    seconds = parseInt(totalSeconds % 60)
    minutes = totalSeconds / 60
    hours = parseInt(minutes / 60)
    minutes = parseInt(minutes % 60)

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');


    return `${sign}${hours}:${minutes}:${seconds}`
}