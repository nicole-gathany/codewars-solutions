function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
    //i like this one because it's easier to remember that includes. 
    //if it looks for the value and it's not there, it returns -1

  }