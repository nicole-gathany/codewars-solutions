function count (string) {  
    // The function code should be here
    let obj = {};
    let array = string.split('');
    array.forEach(function(letter){
        if(!obj[letter])
          obj[letter]=0;
          obj[letter]++;
    } )
     return obj;
  };