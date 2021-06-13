function kaprekarSplit(n){
    //write code here...
    //params: number
    if(n<=3) return 0;
      let squareOfN = Math.pow(n, 2).toString();
    //return at which index spliting the number and adding would equal the original number
      for(let i=1; i<squareOfN.length; i++){
        if(parseInt(squareOfN.substring(0, i)) + parseInt(squareOfN.substring(i))===n) return i;
    }
   return -1;
  }