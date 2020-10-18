function parrotTrouble(talking,hour){
    if(talking === true && hour < 7 || talking === true && hour >20){
      return true;
       }
    return false
  }