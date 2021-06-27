function off(n) {
    var count=1,arr=[];
    for(var i=1;i<=n;i+=count){
      arr.push(i);
      count+=2;
    }
    return arr;
  }

  //i like this solution because it changes the count while keeping the solution down to O(n)
  //mine has O(n^2) currently
  //i wonder what their process was for coming up with this solution