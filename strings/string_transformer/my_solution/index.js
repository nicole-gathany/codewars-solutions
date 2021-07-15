const stringTransformer = function(str){
 
    let reverseString = str.split(" ").reverse().join(" ");
    
    let allCapsReverse = reverseString.toUpperCase();
    let allLowCaseRev = reverseString.toLowerCase();
   
    //split strings at letters
    return reverseString.split("").map((letters, index)=> letters === allCapsReverse[index]? allLowCaseRev[index] : allCapsReverse[index]).join("")
  
  }