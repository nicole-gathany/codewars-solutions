const isSatorSquare = tablet => 
  tablet.every((row, y) => //row is each array, y is the index (column)
    row.every((v, x) =>  //now examining each array: v is each letter, y is the index
      tablet[x][y] == v && 
      tablet[row.length - x - 1][tablet.length - y - 1] == v
      //tablet[5-0-1][5-0-1] is tablet[4][4] === v? yes. "D" is "D"
      //tablet[5-0-1][5-1-1] is tablet[4][3] === v? x
    )
  );

//Example
//   [
//     [ 'D', 'x', '}', 'H', 'l' ],
//     [ 'x', 'F', 'H', 'H', 'Y' ],
//     [ '}', 'H', 'w', 'H', '}' ],
//     [ 'Y', 'H', 'H', 'F', 'x' ],
//     [ 'l', 'H', '}', 'x', 'D' ]
//   ]; //should be false


