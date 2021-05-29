function getCount(str) {
    return str.split("").filter(letter => "aeiou".includes(letter)).length;
  }

  //to be honest, they didn't save my solution so I lost it :(
  //but i looked at the best practice solutions and was inspired

  //my original was more like:
//   function getCount(str) {
//     var vowelsCount = 0;
//     str.split("").forEach(function(x){
//       if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//         vowelsCount += 1;
//       }
//     });  
//     return vowelsCount;
//   }