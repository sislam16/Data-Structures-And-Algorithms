/**
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function(num) {
    let low = 0; 
    let high = num;
    while (low !== high) {
        const mid = Math.floor((low + high + 1) / 2);
        if (mid * mid === num) {
            return true;
        }
        if(mid * mid < num){
            low = mid
        } else{
            high = mid -1
        }
    }
    return false;
};
