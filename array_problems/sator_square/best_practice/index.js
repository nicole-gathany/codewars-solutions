const isSatorSquare = tablet => 
  tablet.every((row, y) => 
    row.every((v, x) => 
      tablet[x][y] == v && 
      tablet[row.length - x - 1][tablet.length - y - 1] == v
    )
  );