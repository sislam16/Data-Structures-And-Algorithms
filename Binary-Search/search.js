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
    
    if(target < nums[middle] ){
        
        for(let i=low; i< middle; i++){
            console.log('i',i)
            if(target === nums[i]){
                return i
            }
        }
    }
    
    if(target > middle){
        for(let k= middle; k < high; k++){
            console.log('k',k)
            if(target === nums[k]){
                return k
            }
        }
    }

};