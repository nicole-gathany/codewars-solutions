function lastSurvivor(letters, coords) {
    //give: a string and an array
    //return string when there is only one letter left
    if(letters.length===1) return letters;
    let array = letters.split("");
    for(let i=0; i<coords.length; i++){
      //console.log(coords[i], " is the coordinate  and letters is ", letters)
     array.splice(coords[i], 1);
     // console.log(letters, "is letters")
    }
    return array.join("");
  }

  //best practice solution is pretty much the same as mine but without the first if statement and they just changed the letters string into an array

//   function lastSurvivor(letters, coords) {
//     letters = letters.split('');
//     for (let i = 0; i < coords.length; i++) {
//        letters.splice(coords[i], 1)
//     }
//     return letters.join('')
//  }