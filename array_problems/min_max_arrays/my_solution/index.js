function solve(arr){
  
    const half = Math.floor(arr.length/2);
    let lowerHalf = arr.concat().sort((a,b)=> a-b).slice(0, half).sort((a, b)=> b-a);
    let upperHalf = arr.concat().sort((a,b)=> a-b).slice(half);
    
    let result = [];
    
    while(lowerHalf.length>0 && upperHalf.length>0){
      result.push(upperHalf.pop());
      result.push(lowerHalf.pop());
    }
  
    if(upperHalf.length){
       result.push(upperHalf[0]);
      }
    return result;
        
  };