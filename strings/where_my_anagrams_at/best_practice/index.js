function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function(v) {return word == v.split('').sort().join('');});
  }

  //similar to mine but so much cleaner. I like this solution
  //this is solution is also interesting and similar. 
  //making a prototypical method for a string:
//   String.prototype.sort = function() {
//     return this.split("").sort().join("");
//   };
  
//   function anagrams(word, words) {
//     return words.filter(function(x) {
//         return x.sort() === word.sort();
//     });
//   }