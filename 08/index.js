function createChristmasTree(ornaments, height) {
    let result = ''
    let ornamentsChain = ornaments
        .repeat(height * height * ornaments.length)

    for (let i = 0, pos = 0; i < height; i++) {
        result += ' '.repeat(height - i - 1)
        result += ornamentsChain
            .substring(pos, pos + i + 1)
            .split('')
            .join(' ')
        result += '\n'
        pos = pos + i + 1
    }
    return result + ' '.repeat(height - 1) + '|' + '\n'
}