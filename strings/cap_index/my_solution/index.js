var capitals = function (word) {
	
  return word.split("")
              .map((letter, index )=> letter.toUpperCase() === letter? index: letter)
              .filter(el => Number.isInteger(el) === true );
};