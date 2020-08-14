// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
var uniqueOccurrences = function(arr) {
    let tracker = {}
    let valTracker = {}
    
    for(let el of arr){
        if(!tracker[el]){
            tracker[el] = 1
        } else{
            tracker[el] +=1
        }
    }
  
    
    for(let key in tracker){
        if(!valTracker[tracker[key]]){
            valTracker[tracker[key]] = 1
            
        } else{
            return false 
        }
        }
        
        return true
    };