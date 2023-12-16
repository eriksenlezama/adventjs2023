function maxDistance(movements) {
    let diff = 0
    let result = movements
        .split('')
        .map(token => {
            if (token === '>') {
                return 1
            } else if (token === '<') {
                return -1
            } else {
                diff++
                return 0
            }
        })
        .reduce((acc, cur) => acc + cur, 0,)

    return Math.abs(result) + diff
}