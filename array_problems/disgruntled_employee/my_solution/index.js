function off(n) {
  
    let result = []
  
  for(let j=1; j<=n; j++){
    for(let i=j; i<=n; i+=j){
        if(!result.includes(i)) result.push(i);
        else if(result.includes(i)){
        result.splice(result.indexOf(i), 1)
      }
    }
  }
  
   return result.sort((a, b) => a-b);
    
  }