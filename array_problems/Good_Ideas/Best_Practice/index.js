function well(x){
    var count = 0;
    x.forEach(function(arr) {
      arr.forEach(function(elem) {
        if(typeof(elem) === 'string' && elem.toLowerCase() === 'good') {
          count++;
        }
      });
    });
    if(count === 0) {
      return 'Fail!';
    }
    return count > 2 ? 'I smell a series!' : 'Publish!';
  }