function order(words){
  // ...  
  let wordsArr = words.split(" ");//split array by " "

  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].slice(0, wordsArr.length);
  let obj = {};
  
  
  numbers.forEach(n => obj[n] = wordsArr.filter(el => el.includes(n)).join("")); //has O**2 notation
  
  return Object.values(obj).join(" ");
 
}