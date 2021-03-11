const kWeakestRows = (matrix, k) => {
    let tracker = {}
    let output = []

    // let strengths = matrix.map((row) => {
    //     return row.reduce((a, b) => {
    //         return a + b
    //     })
    // }).map((el, index) => {
    //     return {
    //         strength: el,
    //         index: index
    //     }
    // }).sort().slice(k)
    // console.log(strengths)

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        let sum = 0

        for (let j = 0; j < row.length; j++) {
            sum += row[j]
        }
        
        if (!tracker[i]) {
            tracker[i] = sum
        }
    }

    for (let el in tracker) {
        output.push({
            strength: tracker[el],
            index: el
        })
    }
    // return < 0 if obj1 should come before obj2
    // return > 0 if obj1 > obj2
    let sorted = output.sort((obj1, obj2) => {
        if (obj1.strength == obj2.strength) {
            return obj1.index - obj2.index
        }
        if (obj1.strength > obj2.strength) {
            return 1
        } else {
            return -1
        }

    })
    console.log(k)
    let returnIndex = []
    for (let p = 0; p < k; p++) {
        returnIndex.push(sorted[p].index)
    }
    return returnIndex
}