function present(x, y){
    if(x==='goodpresent'){ 
      let newCharCodes = x.split("").map(letters => letters.charCodeAt(0) +y);
      return newCharCodes.map(charCodes=> String.fromCharCode(charCodes)).join("");
    }
    
    else if(x==='crap' || x==='empty'){
      return x.split("").sort().join("");
    }
    else if(x==='bang'){
      let newCharCodes = x.split("").map(letters => letters.charCodeAt(0)-y);
      return newCharCodes.reduce((a, b) => a +b);
    }
    else if(x==='badpresent') return "Take this back!";
    
    else if(x==='dog') return `pass out from excitement ${y} times`
  }