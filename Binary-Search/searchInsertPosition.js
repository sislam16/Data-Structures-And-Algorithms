/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length -1
    let mid = Math.floor(nums.length/2)
   
    
    if(target === nums[mid]){
        return mid
    }
    if(target > nums[end]){
        return end + 1
    }
    
    if(target < nums[start]){
        return start
    }
    
    if(target < nums[mid]){
        for(let i=0; i < mid; i++){
            let current = nums[i];
            let next= nums[i+1];
            if(target === nums[i]){
                return i
            }else{
               if(target > current && target < next){
                   return i+1
               }
            }
        } 
    }
    
    if(target > nums[mid]){
        for(let j=mid; j<= end; j++){
            let curr2 = nums[j]
            let next2 = nums[j+1]
            if(target === nums[j]){
                return j
            } else {
                if(target > curr2 && target < next2){
                return j + 1
            }
            }
        }
    }
    
};