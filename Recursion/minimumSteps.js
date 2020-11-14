const minStepsToOne = (n) =>{
    if(n === 1){
      return 0
    }
    
    //subtract 1
    let steps = minStepsToOne(n-1)
    
    //divide by 3
    if(n%3===0){
    let divide3 = minStepsToOne(n /3)
    steps = Math.min(steps, divide3)
    }
    
    //divide by 2
    if(n%2 ===0){
      let divide2 = minStepsToOne(n/2)
      steps = Math.min(steps, divide2)
    }
    return steps + 1
  }