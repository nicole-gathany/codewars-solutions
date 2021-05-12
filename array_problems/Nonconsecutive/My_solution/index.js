function firstNonConsecutive (arr) {
    //params an arr of sorted numbers ascending
    // 1, 2, 3, 4, 5, 6 //return null
    //1, 5 -- 5-1>1
      for(let i=0; i<arr.length; i++){
        if(arr[i+1]-arr[i]>1) return arr[i+1]
      }
      return null;
  }