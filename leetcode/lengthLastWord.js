/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s === '') {
        return 0
    }

    let sArr = s.split(' ')
    let lastEl = sArr[sArr.length - 1]
    let end = sArr.length - 1

    while (lastEl === '') {
        end -= 1
        lastEl = sArr[end]
    }

    if (!lastEl) {
        return 0
    }

    return lastEl.length

};