function manufacture(gifts, materials) {
    return gifts
        .filter(gift => [...gift].every(el => materials.includes(el)))
        .map((el, i) => el && gifts[i])
}