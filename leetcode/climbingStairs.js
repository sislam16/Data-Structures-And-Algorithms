/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    return fibonacci(n)
};

function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}