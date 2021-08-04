function gimme(arr){
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return arr.indexOf(arr.filter(item => item>min && item<max)[0])
}