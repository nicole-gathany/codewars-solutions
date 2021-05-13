function isUpperCase(letter) {
    return letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90;
  }
  
  function isLowerCase(letter) {
    return letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122;
  }
  
  function coolString(s) {
    //coding and coding..
    if (parseInt(s) || s.length === 0 || s.indexOf(" ") !== -1) return false;
    
    for (let i = 1; i < s.length; i++) {
      if (!((isUpperCase(s[i-1]) && isLowerCase(s[i])) ||
         (isUpperCase(s[i]) && isLowerCase(s[i-1])))) {
        return false;
      }
    }
    return true;
  }