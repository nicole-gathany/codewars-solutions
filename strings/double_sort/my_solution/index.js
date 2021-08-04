function dbSort(a){
// Code here
  let numbersArr = a.filter(item => typeof item === "number").sort((a,b)=> a - b);
  let stringsArr = a.filter(item => typeof item === "string").sort();
  return numbersArr.concat(stringsArr);
}

//best practices look like my solution but this is another option:
//const dbSort = ( arr ) => [...arr.filter(el => typeof el === 'number').sort((a, b)=> a - b)]
                         // .concat([...arr.filter(el => typeof el === 'string').sort()])