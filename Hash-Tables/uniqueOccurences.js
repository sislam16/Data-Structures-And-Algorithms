// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
var uniqueOccurrences = function(arr) {
    let tracker = {}
    let valTracker = {}
    
    for(let el of arr){
        if(!tracker[arr[el]]){
            tracker[arr[el]] = 1
        } else{
            tracker[arr[el]] +=1
        }
    }
    
    
    for(let key in tracker){
        if(!valTracker[tracker[key].value]){
            valTracker[tracker[key].value] = 1
        } else{
            valTracker[tracker[key].value] +=1
        }
        }
        
    for(let elem in valTracker){
        if(valTracker[elem].value >= 1){
            return false
        }
        return true
    }
};