function scale(strng, k, n) {
  if(strng.length===0) return "";
  else return strng
    .split("\n")
    .map(sub => sub
         .split("")
         .map(letter=>letter.repeat(k))
    .join(""))
  .map(s=> s + ("\n" +s)
       .repeat(n-1))
  .join("\n");
}