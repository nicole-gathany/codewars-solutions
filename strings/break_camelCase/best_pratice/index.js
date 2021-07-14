function solution(string) {
    string = string.split('').map(function (el) { //splits the whole string into an array
        //delineated by no space so "tina" is ["t", "i", "n", "a"]
      if (el === el.toUpperCase()) { //if the letter is uppercase 
        el = ' ' + el //then add a space before it
      }
      return el //otherwise return the letter
    })
    return string.join('') //the join the array
  }

  //i like this solution to the problem because it's a lot easier to read and understand