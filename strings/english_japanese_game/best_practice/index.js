function shiritori(words) {
    if (!words.length || !words[0].length) return [] //if the it's an empty array or the first string in the array is empty
    
    let out = [words[0]] // but it will be wrong if next word false
    //if words === "dog","goose","tiger","cat", "elephant","rhino","orc"
    // words[0] is "dog" and out is "dog" so out = ["dog"]
    for (let i = 1; i < words.length; i++){
      if ( out[i-1].slice(-1) === words[i][0] && words[i].length ){
          //when i is 1
          //if the last letter of out[0] is equal to the first letter of words[1] and words[1] is not ""
          //out[0].slice(-1) is "g" and words[1][0] is "g"
          //when i is 2
          //out[2-1] is out[1] which is "goose". out[1].slice(-1) === "e"
          //words[2] is "tiger" words[2][0] is "t"
          //"e" !== "t"
        out.push( words[i] ) //when i is 1 //then push words[1] into the out array out looks like [dog, goose]
            
      } else {
        return out //continue to do this until the last letter of out[i-1] is not equal to the first letter of words[i]
        //then return out array
        //when i is 2 we just automatically return [dog, goose]
    }
    }
    //if all of the 
    return out
  }

