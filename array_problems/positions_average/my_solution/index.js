function posAverage(s) {
    // your code
  console.log(s)
  //parameter list of strings seperated by ","
  //return percentage of positions that have something in with another string
  let array = s.split(", ");
  console.log(array.map(a => a.length)) // i needed to seperate every string by ", " and not ","
  
  
  let count = 0;
  let total = 0;
  for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
      for(let k=0; k<array[0].length; k++){
        if(array[i][k] === array[j][k]) count++
        total++;
      }
    }
  }
  console.log(count, total);
  return 100*(count/total);
//   for(let i=0; i<array[0].length; i++){
//     console.log(array.some(a=> a[i]===a[i]))
//   }
}