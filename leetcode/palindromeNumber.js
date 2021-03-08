/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let numStr = '' + x
    let numArr = numStr.split('')
    let front = 0
    let back = numArr.length - 1

    if (numArr[0] === '-') {
        return false
    }

    while (front < back) {
        if (numArr[front] !== numArr[back]) {
            return false
        }
        front += 1
        back -= 1
    }

    return true
};