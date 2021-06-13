//feels like my solution but with a while loop. Not sure why this is preferable
//also not sure why they left out the semi colons

function kaprekarSplit(n){
    const digits = (n**2).toString()
    //did not know that n**2 could give n squared 
    let index = -1
    while(index++ < digits.length) {
      const first = digits.substring(0, index)
      const last = digits.substring(index)
      
      if (+first + +last === n)
      //did not realize +string could give us a number
        return index
      
    }
    
    return -1
    
  }

  //alternatively
  const kaprekarSplit = n =>
  (n * n + '').split('').findIndex((_, i, a) => +a.slice(0, i).join('') + +a.slice(i).join('') == n);
  //not sure if this is better or just an impressive 1-liner 