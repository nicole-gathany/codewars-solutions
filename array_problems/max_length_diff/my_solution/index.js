function mxdiflg(a1, a2) {
    // your code
  if(a1.length === 0|| a2.length ===0) return -1;
  let a1Lengths = a1.map(word => word.length);
  let a2Lengths = a2.map(word => word.length);
  
  
  let max1 = Math.max(...a1Lengths);
  let min1 = Math.min(...a1Lengths);
  let max2 = Math.max(...a2Lengths);
  let min2 = Math.min(...a2Lengths);
  
  return Math.max(max1-min2, max2-min1);

}