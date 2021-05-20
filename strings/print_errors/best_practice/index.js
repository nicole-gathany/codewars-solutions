function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") { // i had no idea that you could compare letters with ">"
        count++;
      }
    }
    return count+"/"+s.length;
}