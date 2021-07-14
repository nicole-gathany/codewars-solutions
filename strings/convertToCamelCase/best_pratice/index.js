function toCamelCase(str){
    var strArray;
    if (str.indexOf('-') !== -1){ //if delineated by -
      strArray = str.split('-');
    } else {
      strArray = str.split('_');  //if delineated by _
    }
    var camelCase = strArray[0]; //keeps first word value as is
    for (var i=1, len=strArray.length; i < len; i++){
      var capitalized = strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
      camelCase += capitalized;
    }
    return camelCase;
    
  
  }

  // i like the way they do this because, they did something similar to me but organized in a way that's more readable
  //also cool how they loop