var numberToPrice = function (number) {
  //first it has has to be a number?
  //this is passing 11 out of the 12 tests. I'm not sure what is going wrong
  console.log(number);
  let start = number.toString().split(".");
  console.log(start);
  if (number >= 0 || number <= 0) {
    let arr = start[0].split("");

    if (number > -99)
      for (i = arr.length - 3; i > 0; i -= 3) {
        arr.splice(i, 0, ",");
      }
    start[0] = arr.join("");
    console.log(start[0]);

    if (number < -99) {
      for (i = arr.length - 3; i > 1; i -= 3) {
        arr.splice(i, 0, ",");
      }
      start[0] = arr.join("");
    }

    if (start.length === 2) {
      if (start[1].length >= 2) {
        return start[0] + "." + start[1].substring(0, 2);
      } else if (start[1].length == 1) {
        return start[0] + "." + start[1] + "0";
      }
    } else if (start.length == 1) {
      return start[0] + ".00";
    }
  } else return "" + Number(number);
};

console.log(numberToPrice(-999));
