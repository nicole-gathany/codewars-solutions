function longest(s1, s2) {
  // your code
  let obj = {};
  s1.split("").forEach(letter => !obj[letter] ? obj[letter] = 0 : obj[letter]++);
  s2.split("").forEach(letter => !obj[letter] ? obj[letter] = 0 : obj[letter]++);

  return Object.keys(obj).sort().join("");
}