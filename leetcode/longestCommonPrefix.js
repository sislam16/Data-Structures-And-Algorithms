/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let shortest;
    let output = '';
    let reference = {};

    strs.forEach(el => {
        console.log(el.length)
        if (!shortest) {
            shortest = el.length
        } else {
            if (el.length < shortest) {
                shortest = el.length
            }
        }
    })


    if (strs.length > 0) {
        let wrd = strs[0]
        for (let i = 0; i < wrd.length; i++) {
            if (i < shortest) {
                reference[i] = wrd[i]
            }
        }
    }

    strs.forEach((word, i) => {
        console.log(word, i)
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== reference[i]) {
                reference[i] = false
            }
        }
    })

    for (let key in reference) {
        if (reference[key]) {
            output += reference[key]
        } else {
            return output
        }
    }

    return output

};