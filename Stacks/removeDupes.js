var removeDuplicates = function(S) {
  let stack = []

  for (let i = 0 ; i < S.length;i++){  
    if(S[i] === peek(stack)){
      stack.pop()
    }else{
      stack.push(S[i])
    }
  }
  return stack.join("")
    
};

const peek = (stack) =>{
  return stack[stack.length-1] 
} 

removeDuplicates("abbaca")

