function travel(r, zipcode) {
    // your code
  //parameter: string of addresses seperated by , 
  let list = r.split(",");
  let streets;
  let streetNumbers;
  let matches = []
  
  for(let i=0; i<list.length; i++){
     if(list[i].includes(zipcode)){
      matches.push(i)
    }
  }
  //the end of the address
  //how do we get the beginning of the address?
 if(r.indexOf(zipcode)===-1||zipcode ===""||zipcode.length<8) return zipcode + ":/";
  
  else{
   // street = list[addressIndex].slice(streetNameIndex, list[addressIndex].indexOf(zipcode)-1);
//     streetNumber = list[addressIndex].slice(0, streetNameIndex-1);
     streets = matches.map(a => list[a]).map(address => address.slice(address.indexOf(" ")+1, address.indexOf(zipcode)-1))
     streetNumbers = matches.map(a => list[a]).map(address => address.slice(0, address.indexOf(" ")));
  }
  
  return zipcode + ":" + streets.join(",") + "/" +  streetNumbers.join(",");
}