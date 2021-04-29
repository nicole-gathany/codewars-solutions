function inArray(arr1, arr2) {
    return arr1.filter(function(subString) {
      return arr2.some(function(string) {
        return string.indexOf(subString) >= 0;
      });
    }).sort();
  }