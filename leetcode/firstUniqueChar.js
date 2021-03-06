/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let tracker = {};
    let output = -1;

    for (let i = 0; i < s.length; i++) {
        if (!tracker[s[i]]) {
            tracker[s[i]] = 1
        } else {
            tracker[s[i]]++
        }
    }

    for (let letter of s) {
        if (tracker[letter] === 1) {
            return s.indexOf(letter)
        }
    }

    return output
};