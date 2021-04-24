function catalog(s, article) {
    // your code
  //   console.log(article.length);
  //   console.log(s.split(">"));
    let array = s.split(">");
    let item = article + '</name';
   
    let theIndex = array.findIndex(thing=> thing === item);
    //we also want strings that include the item
    let theIncludesIndex = array.findIndex(thingy => thingy !== item && thingy.includes(item)); //good start but not enough
    let regex = new RegExp(article, "g");
    console.log(regex)
    let allMatches = [...s.matchAll(regex)]
    console.log(allMatches)
    
  //   console.log(theIncludesIndex)
    //ex
    //if article === hammer > prx: $10 qty: 12
    //should be the price
  //   console.log(array[theIndex +2].split("<"));
    let price = array[theIndex +2].split("<");
    let quantity = array[theIndex + 4].split("<");
    let result = article + " > prx: $" + price[0] + " qty: " +  quantity[0];
    
  //   console.log(theIndex)
    if(theIndex>=0) {
      if(theIncludesIndex>=0){
        let extra = array[theIncludesIndex].split("<");
        let extraPrice = array[theIncludesIndex +2].split("<");
        let extraQuantity = array[theIncludesIndex +4].split("<");
        return extra + " > prx: $" + extraPrice[0] + " qty: " + extraQuantity[0] + "\r\n" + result
      }
      return result } 
  }