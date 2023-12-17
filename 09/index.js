function adjustLights(lights) {
    let countStartGreen = 0
    let countStartRed = 0
    const green = '🟢'
    const red = '🔴'

    for (let i = 0; i < lights.length; i++) {
        // if starts with green
        if (i % 2 !== 0 && lights[i] === red) {
            countStartGreen++
        } else if (i % 2 === 0 && lights[i] === green) {
            countStartGreen++
        }
        // if starts with red
        else if (i % 2 !== 0 && lights[i] === green) {
            countStartRed++
        } else if (i % 2 === 0 && lights[i] === red) {
            countStartRed++
        }
    }

    return Math.min(countStartGreen, countStartRed)
}