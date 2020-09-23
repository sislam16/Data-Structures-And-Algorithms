/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  let stack =[]
  let brackets = {
    '(':')',
    '{':'}',
    '[':']'
  }

  for(let i = 0; i < str.length; i++){
    if(brackets[str[i]]){
      stack.push(brackets[str[i]])
    } else{
     if(peek(stack) === str[i]){
      stack.pop() 
     } else{
      return false
     }
      
    }
  }
  return stack.length === 0
}

  const peek = (stack) =>{
    return stack[stack.length-1] 
  } 

;