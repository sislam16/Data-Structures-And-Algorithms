const isBalanced = (str) =>{
    let stack = new Stack()
    for(let i = 0; i < str.length; i++){
  
      if(str[i] === '{' || str[i]==='['|| str[i]==='('){
        stack.push(str[i])
      } else if(str[i] === ']' && stack.peek() !=='[') {
        console.log('1', str[i], stack.peek())
        return 'NO'
      } else if(str[i] === ')' && stack.peek() !=='(') {
        console.log('2', str[i])
        return 'NO'
      } else if(str[i] === '}' && stack.peek() !=='{') {
        console.log('3', str[i])
        return 'NO'
      }else{
        console.log("stack.pop happened", stack)
      stack.pop()
      }
  }
   return 'YES'
    }
    
  console.log(isBalanced('([]{})'))