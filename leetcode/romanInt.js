/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let output = 0
    for (let i = 0; i < s.length; i++) {
        if (romanVal[s[i]]) {
            if (s[i] === 'I' && s[i + 1] === 'V') {
                output += romanVal[s[i + 1]] - romanVal[s[i]]
                i += 1
            } else if (s[i] === 'I' && s[i + 1] === 'X') {
                output += romanVal[s[i + 1]] - romanVal[s[i]]
                i += 1
            } else if (s[i] === 'X' && s[i + 1] === 'L') {
                output += romanVal[s[i + 1]] - romanVal[s[i]]
                i += 1
            } else if (s[i] === 'X' && s[i + 1] === 'C') {
                output += romanVal[s[i + 1]] - romanVal[s[i]]
                i += 1
            } else if (s[i] === 'C' && s[i + 1] === 'D') {
                output += romanVal[s[i + 1]] - romanVal[s[i]]
                i += 1
            } else if (s[i] === 'C' && s[i + 1] === 'M') {
                output += romanVal[s[i + 1]] - romanVal[s[i]]
                i += 1
            } else {
                output += romanVal[s[i]]
            }
        }
    }
    return output
};