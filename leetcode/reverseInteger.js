/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    x = x + ''
    let xArr = []
    let output;
    let negative = false
    let start = 0

    if (x[0] === '-') {
        xArr.push(x[0])
        negative = true
        start = 1
    }

    for (let i = x.length - 1; i >= start; i--) {
        xArr.push(x[i])
    }

    let number = Number(xArr.join(''))
    if (number < Math.pow(-2, 31) || number > Math.pow(2, 31)) {
        return 0
    } else {
        return number
    }

};