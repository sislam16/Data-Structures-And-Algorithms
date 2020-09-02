/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    let middle = Math.floor(nums.length/2)
    
    if(target >= low && target < middle ){
        
        for(let i=low; i< middle; i++){
            console.log('i',i)
            if(target === nums[i]){
                return nums[i]
            }
        }
    }
    
    if(target >= middle && target < high){
        for(let k= middle; k < high; k++){
            console.log('k',k)
            return nums[k]
        }
    }
};