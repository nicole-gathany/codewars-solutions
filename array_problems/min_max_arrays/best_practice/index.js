function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
  }