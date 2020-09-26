/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    
    while(low <= high){
        let middle = Math.floor((low +high)/2)
        if(target === nums[middle]){
            return middle
        } else if(nums[middle]> target){
            high = middle - 1
        } else{
            low = middle + 1
        }
    }
    
    return -1
};