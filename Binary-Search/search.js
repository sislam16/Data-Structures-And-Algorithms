/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    let middle = Math.floor(nums.length/2)
    
    
    if(target === nums[middle]){
        return middle
    }
    
    if(target < nums[middle]){   
        for(let i=low; i< middle; i++){
            if(target === nums[i]){
                return i
            }
        }
    }
    
    if(target > nums[middle]){
        for(let k= middle; k <= high; k++){
            if(target === nums[k]){
                return k
            }
        }
    }
    
    return -1
};