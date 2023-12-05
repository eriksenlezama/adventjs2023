function decode(message) {
    let openIndex = -1
    let closedIndex = -1

    while (message.indexOf('(') >= 0) {
        for (let i = 0; i < message.length; i++) {
            if (message[i] === '(') {
                openIndex = i
            }

            if (message[i] === ')') {
                closedIndex = i
                break
            }
        }

        if (openIndex >= 0 && closedIndex >= 0) {
            message = message.substring(0, openIndex)
                + message.substring(openIndex + 1, closedIndex)
                    .split('')
                    .reverse()
                    .join('')
                + message.substring(closedIndex + 1, message.length)
        }
    }

    return message
}