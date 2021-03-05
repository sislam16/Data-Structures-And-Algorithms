/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let number1 = BigInt(num1)
    let number2 = BigInt(num2)


    return number1 * number2 + ''
};