/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    //  console.log(nums)
    //  nums = new Set(nums)
    //  console.log(nums)
    //  nums = Array.from(nums)
    //  console.log('SORTED NO DUPES:',nums)
    // return nums

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        while (nums[i + 1] === current) {
            nums.splice(i, 1)
        }

    }
    return nums.length
};