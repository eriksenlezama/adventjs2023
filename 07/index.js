function drawGift(size, symbol) {
    let design = ''

    for (let i = 0; i < size; i++) {
        design += ' '.repeat(size - i - 1)

        if (i === size - 1 || i === 0) {
            design += '#'.repeat(size)
        } else {
            design += '#' + symbol.repeat(size - 2) + '#'
        }

        if (i > 1) design += symbol.repeat(i - 1)

        if (i > 0) design += '#'

        design += '\n'
    }

    for (let i = 1; i < size; i++) {
        if (i === size - 1) {
            design += '#'.repeat(size)
        } else {
            design += '#' + symbol.repeat(size - 2) + '#'
        }

        if (i < size - 2) design += symbol.repeat(size - i - 2)

        if (i < size - 1) design += '#'

        design += '\n'
    }

    return design
}