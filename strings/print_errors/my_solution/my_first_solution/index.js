//i actually have no idea where this came from
function printerError(s) {
    // your code
    let array = s.split("");
  let i;
  let errors = 0;
  let total = array.length;
  for (i=0; i<array.length; i++ ){
    if (array[i] == "n"){
      errors++;
    } else if (array[i] == "o"){
      errors++;
    } else if (array[i] == "p"){
      errors++;
    }
    else if (array[i] == "q"){
      errors++;
    }else if (array[i] == "r"){
      errors++;
    }else if (array[i] == "s"){
      errors++;
    }else if (array[i] == "t"){
      errors++;
    }else if (array[i] == "u"){
      errors++;
    }else if (array[i] == "v"){
      errors++;
    }else if (array[i] == "w"){
      errors++;
    }else if (array[i] == "x"){
      errors++;
    }else if (array[i] == "y"){
      errors++;
    }else if (array[i] == "z"){
      errors++;
    }
  }
  
  let ser = errors.toString();
  let stot = total.toString();
  return ser + "/" + stot;
}