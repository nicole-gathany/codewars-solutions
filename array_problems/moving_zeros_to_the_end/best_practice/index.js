var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }


  var moveZeros2 = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }  

  var moveZeros3 = function (arr) {
    let result = arr.filter(c => c !== 0)
    let count = arr.length - result.length
    
    return result.concat(Array(count).fill(0))
  }