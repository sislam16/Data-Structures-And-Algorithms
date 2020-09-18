/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let x = Math.floor(num/2) 
    let prevSq = x
    
    if(num === 1){
        return true
    }
    
  while((x*x) > num){  
      console.log('x', x)
        prevSq = x
        x = Math.floor(x/2) // dividing problem size by half 
        
  }
    console.log('23:', x, prevSq)
    
    if((x*x) === num){
        return true
    }
    
    for(let i = x+1; i < prevSq; i++){ 
        console.log('i', i)
            if((i*i) === num){
            return true
        }
     }
    
    return false
    
};