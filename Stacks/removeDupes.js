var removeDuplicates = function(S) {
  let stack = []

  for (let i = 0 ; i < S.length;i++){  
    if(S[i] === peek(stack, S[i])){
    
      stack.pop()
      console.log("New stack" , stack)
    }else{
      stack.push(S[i])
        console.log("New stack" , stack)
    }
    
  }
  return stack.join("")
    
};

const peek = (stack) =>{
  return stack[stack.length-1] 
} 

removeDuplicates("abbaca")