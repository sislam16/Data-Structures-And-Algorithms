/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length -1
    let mid = Math.floor(nums.length/2)
    let before = nums[start]
    let after;
    
    if(target === nums[mid]){
        return mid
    }
    
    if(target < nums[mid]){
        for(let i=0; i < mid; i++){
            if(target === nums[i]){
                return i
            }
        }
    }
    
    if(target > nums[mid]){
        for(let j=0; j<= end; j++){
            if(target === nums[j]){
                return j
            }
        }
    }
    
};