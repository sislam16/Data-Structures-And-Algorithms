/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let output = 0
    let test = ''

    if (haystack.includes(needle) === false) {
        return -1
    } else {
        let haystackArr = haystack.split('')
        for (let i = 0; i < haystackArr.length; i++) {
            if (haystackArr[i] === needle[0]) {
                let ref = i

                while (test.length < needle.length) {
                    test += haystack[i]
                    i++
                }
                if (test === needle) {
                    i = ref
                    return i
                } else {
                    i = ref
                    test = ''
                }
            }
        }
    }

    return output
};