function findFirstRepeated(gifts) {
    const indexes = {}

    for (let index = 0; index < gifts.length; index++) {
        if (indexes[gifts[index]]) {
            return gifts[index]
        }
        indexes[gifts[index]] = true
    }

    return -1
}
