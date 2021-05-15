function orderFood(list) {
    // thank you for checking out the Coding Meetup kata :)
    //parameter: an array of objects
    //return an object 
    let obj = {};
    // with the 
    //examples [{firstname: "Noah", meal: "veg"}, {firstName: Anna, meal: 'standard'} ]
    //return {veg: 1, standard: 1}
    
    list.forEach(developer => obj[developer.meal]? obj[developer.meal]++ : obj[developer.meal] =1 )
    
    return obj;
  }