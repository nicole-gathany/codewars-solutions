function meeting(x, need){
    if(need===0) return "Game On"
    let chairsAvailable = x.map(chairPpl=> chairPpl[1]-chairPpl[0].length>=0? chairPpl[1]-chairPpl[0].length: 0);
    let result = [];
    let i=0;
    if(chairsAvailable.reduce((a,b)=> a+b)<need) return "Not enough!"
    while(need!==0){
      if(chairsAvailable[i]<need){
        result[i] = chairsAvailable[i]
        need -= result[i]
      }
      else if(chairsAvailable[i]>=need){
        result[i]=need;
        need=0;
      }
         i++
    }
    return result;
  }