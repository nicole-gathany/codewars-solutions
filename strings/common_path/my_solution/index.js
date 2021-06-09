function getCommonDirectoryPath(pathes) {
    //parameter: an array of strings.
    //return: if the strings have substrings in common from the beginning, return that common string
    let pathesDecon = pathes.map( a => a.split("/"));
    let i=0;
    
      while(pathesDecon.every(element => element[i]===pathesDecon[0][i])){
          i++;
        }
      if(i===0) return ""
      else return pathesDecon[0].slice(0, i).join("/")+ "/";
  }