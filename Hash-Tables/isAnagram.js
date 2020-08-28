var isAnagram = function(s, t) {
    const sTracker = {}
    const tTracker = {}
   
    
    for(let i = 0; i < s.length; i++){
        if(!sTracker[s[i]]){
            sTracker[s[i]] = 1
        } else{
            sTracker[s[i]] += 1
        }
    }
    
    for(let j=0; j < t.length; j++){
        if(!tTracker[t[j]]){
            tTracker[t[j]] = 1
        } else{
            tTracker[t[j]] += 1
        }
    }
        
    let sLength = Object.keys(sTracker).length
    let tLength = Object.keys(tTracker).length
    if(sLength !== tLength){
     return false
        
    } else{
            for(let i =0; i <t.length; i++){
                if(sTracker[t[i]]){
                    sTracker[t[i]] -=1
                }
            }
        console.log(sTracker)
        }
        
};