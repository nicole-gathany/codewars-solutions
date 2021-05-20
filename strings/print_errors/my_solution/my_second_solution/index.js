function printerError(s) {
    // your code
  //parameter string with letters
  //return the error rate
  //error rate is the number of times a letter from errors is included in the s string
  
  let errors = 'nopqrstuvwxyz'
  let count = 0;
  for(let i=0; i<s.length; i++){
    if(errors.includes(s[i])){
      count++
    }
}
  return `${count}/${s.length}`
}

//this solution is cleaner and i am proud of myself!