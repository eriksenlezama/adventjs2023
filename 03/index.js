function findNaughtyStep(original, modified) {
    if (original === modified) return ''

    const biggest = original.length > modified.length ? original : modified
    const smallest = original.length > modified.length ? modified : original


    for (let i = 0; i < smallest.length; i++) {
        if (smallest[i] !== biggest[i]) return biggest[i]
    }

    return biggest[biggest.length - 1]
}