function nearHundred(n){
    const absNum = Math.abs(n);
    if(absNum>=90 && absNum <= 110 || absNum >= 190 && absNum <=210){
    return true;
    }
    return false;
  }