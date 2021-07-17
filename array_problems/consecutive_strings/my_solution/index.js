function longestConsec(strarr, k) {
    // your code
    let longest = "";
  if(k<=0) return longest;
    for(let i=0; i<strarr.length-k+1; i++){
      let tempArr = strarr.slice(i, i+k);
      let tempStr = tempArr.join("")
      if(tempStr.length>longest.length){
        longest = tempStr;
      }
    }
  return longest;
}