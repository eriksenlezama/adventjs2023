function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const pocket = []
    let current = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i]

        if (current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1])
        } else {
            pocket.push(current)
            current = next
        }
    }

    pocket.push(current)

    return pocket
}