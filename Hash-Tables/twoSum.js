// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
    
    let tracker = {}
    
    for(let i =0; i < nums.length; i++){
        let pair = target - nums[i]
          if(tracker[pair]){
            return [tracker[pair].index, i]
            console.log('pair', tracker[pair].index, tracker[nums[i]].index)
        }
        
        if(!tracker[nums[i]]){
            tracker[nums[i]] = {secNum: target -nums[i], index: i }
        }
        
    }
};