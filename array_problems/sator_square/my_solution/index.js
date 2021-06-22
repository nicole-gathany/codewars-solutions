function isSatorSquare(tablet){

    //  <----  hajime!
    console.log(Math.floor(tablet.length/2));
    let middleIndex = Math.floor(tablet.length/2);
    console.log(tablet.length%2!==0);
    if(tablet.length%2!==0){
      console.log(tablet[middleIndex-1].concat().join(""))
      console.log(tablet[middleIndex+1].concat().reverse().join(""))
      
      }
      console.log(tablet[middleIndex].concat().join(""));
      console.log(tablet.map( a => a[middleIndex]).join(""))
      if(tablet[middleIndex].concat().join("")!==tablet.map( a => a[middleIndex]).join("")) return false;
  
    //parameters nested array
    //return boolean true or false statement
    //if array is a 4 dimensional palindrome
    
    console.log(tablet);
    let string = tablet.map(a => a.join("")).join("");
    let reverseStrings = tablet.concat()
             .reverse()
             .map(a => a.concat().reverse().join("")).join("");
    console.log(reverseStrings)
    console.log(string)
    console.log(tablet)
    return string === reverseStrings;
    
  
  }