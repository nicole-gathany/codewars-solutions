function titleCase(title, minorWords) {
  
  if(title === "") return title;
  
  //make string to lower case and Minor words to lower case
   let allLowerTitle = title.toLowerCase().split(" ");
    let allLowerMinor = ""
   if(minorWords) {allLowerMinor = minorWords.toLowerCase().split(" ");}
   if(allLowerTitle.length===1) return title[0].toUpperCase() + title.slice(1);
  //split the string into an array seperated by " "
  console.log(allLowerTitle, allLowerMinor)
  //loop through the title from 1 index on then make sure if they're not included in minor words,
  // slice(0, 1).toString + slice(1)
  console.log(allLowerTitle.map(word => allLowerMinor.includes(word)));
  console.log(allLowerTitle[0][0].toUpperCase() + allLowerTitle[0].slice(1)  +" ") 
  return allLowerTitle[0][0].toUpperCase() + allLowerTitle[0].slice(1) + " " + allLowerTitle.slice(1).map(word => allLowerMinor.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(" ");
  
  
}
//title (string), sometimes minorWords (string)
  //return a new string where the first letter of the first word is has the first letter capitalized
  //a clash of KINGS -> A Clash of Kings