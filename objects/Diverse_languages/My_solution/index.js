function isLanguageDiverse(list) {
    // thank you for checking out the Coding Meetup kata :)
    //param array of objects
    //return true or false
    //example
    let objCount = {};
    list.forEach(developer => objCount[developer.language]?objCount[developer.language]++: objCount[developer.language]=1)
    let array = [];
    for(var key in objCount){
      array.push(objCount[key])
    }
    let newArray = array.sort((a,b)=> a-b);
    if(newArray[array.length-1]>2*newArray[0]) return false;
    else return true;
    
  }