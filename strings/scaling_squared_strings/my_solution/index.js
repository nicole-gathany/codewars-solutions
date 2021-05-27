function scale(strng, k, n) {
    // your code
  //parameters a string where each string we care about is seperated by \n
  //then within that it's seperated by space
  //return a string where each letter within each substring seperated by \n is has each 
  //letter k times and then each substring is repeated n times
  let array = strng.split("\n").map(sub => sub.split("").map(letter=>letter.repeat(k)).join(""));
  let result = array.map(s=> s + ("\n" +s).repeat(n-1));
  //how long should the new array be?
//   console.log("strng is ", strng.split("\n").map(sub => sub.split("").map(letter=>letter.repeat(k)).join("")), ", k is ", k, ", and n is ", n);
//   console.log(array.length)
//   console.log(array.map(s=> s + ("\n" +s).repeat(n)))
  if(strng.length===0) return ""
  else {
   
     return result.join("\n")
    
 }
  
}