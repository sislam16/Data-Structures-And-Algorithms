/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    commonChar = []
    currentChar; 
    // [{'b':1, 'e':1, 'l':2, 'a':1}, 
    //  {'l':2, 'a':1, 'b':1, 'e':1}, 
    //  {'r':1, 'o':1,'l':2,'e':1, 'r':2}]
    
    for(let el of arr){
        let elTracker = {}
        for(i=0; i<el.length; i++){
            if(!elTracker[el[i]]){
                elTracker[el[i]] = 1 
            }else{
                elTracker[el[i]] +=1
            }
        }
    }
    
};