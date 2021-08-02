function findDeletedNumber(arr, mixArr) {
  // your code
 
    if(arr.length === mixArr.length) return 0;
    return arr.filter(item => !mixArr.includes(item))[0];
  
}