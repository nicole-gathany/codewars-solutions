// complete the function
function solution(string) {
    //given a string that's in camel case
  //return a string that's not in camel
  //put a space before capital letters
  //camelCasing -> camel Casing
  //tinaBelcher -> tina Belcher
  
  let capString = string.toUpperCase();//create a new string that is the original string but in all caps
  let capIndexes = []  //save the indexes of the capital letters in an array
    for(let i=1; i<string.length; i++){//figure out where the capital letters are by comparing the two strings
       //loop through the strings
      if(capString[i]===string[i]){ // i don't need a nested loop because the strings are the same size but with different names
  
          capIndexes.push(i)
        }
      }
  console.log(capIndexes.length);
   let result = [string.substring(0, capIndexes[0])];
  if(capIndexes.length===0) {
    return string;
  } else if(capIndexes.length===1){
    return string.substring(0, capIndexes[0]) + " " + string.substring(capIndexes[0])
  }



  for(let i=1; i<capIndexes.length; i++){
    result.push(string.substring(capIndexes[i-1], capIndexes[i]))
  } 
  
   //t i n a   B e lcher 
  // 0 1 2 3 4 5 6
  //add a space where the capital letter is plus its index
  return result.join(" ") + " " + string.substring(capIndexes[capIndexes.length-1])
}