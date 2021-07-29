function narcissistic(value) {
  // Code me to return true or false
  let power = value.toString().length;
  console.log(power);
  let compare = value.toString()
                      .split("")
                      .map(digit => parseInt(digit)**power)
                      .reduce((acc, curr) => acc + curr);
  return compare === value;
}