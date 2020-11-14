const minimumSteps = (n) => {
    let steps = 0

    if (n === 1) {
        return 0
    }
    while (n > 1) {
        if (n % 2 !== 0 && n % 3 !== 0) {
            console.log('n', n)
            n = n - 1
            steps += 1

        } else if (n % 2 === 0) {
            n = n / 2
            steps += 1

        } else if (n % 3 === 0) {
            n = n / 3
            steps += 1

        }
    }

    return steps
    // console.log(steps)

}