//the best practice actually looked very similar to my solution
//but i wanted to understand how to use Set better
function repeats(arr) {
    let seen = new Set();
    let sum = 0;
    
    for (let v of arr) {
      if (!seen.has(v)) {
        seen.add(v);
        sum += v;
      } else {
        sum -= v;
      }
    }
    
    return sum;
  };