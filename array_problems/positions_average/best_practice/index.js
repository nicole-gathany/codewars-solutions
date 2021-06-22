function posAverage(s) {
    let arr = s.split(/,\W/), pos = 0, total = 0
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = 0; k < arr[i].length; k++) {
          if (arr[i][k] === arr[j][k]) pos++
          total++
        }
      }
    }
  return (100 * pos / total);
  }