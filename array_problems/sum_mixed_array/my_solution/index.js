function sumMix(x){
    //x is an array of integers, expressed as strings or numbers
    //return the sum of said array
    //[9, 3, "7", "3"] -> 9+3+ 7+ 3 = 12+ 10 = 22
     if(x.length===1) return parseInt(x[0], 10)
     return x.reduce((a, b)=> parseInt(a) + parseInt(b)) 
  }