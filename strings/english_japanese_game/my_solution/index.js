//
function shiritori(words) {
    //insert code
    //parameter: an array of strings
    //return the array if words[i][words[i].length-1] === words[i+1][0]
    if(words[0]==="") return []
    for(let i=1; i<words.length; i++){
      if(words[i][0]!==words[i-1][words[i-1].length-1]){
        return words.slice(0, i);
      }
    }
    return words;
  }