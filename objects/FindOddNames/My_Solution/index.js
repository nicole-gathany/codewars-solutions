function findOddNames(list) {
    // thank you for checking out the Coding Meetup kata :)
    //params - an array of objects
    //return an array just with the object (which is an element of the array)
    //who's first name 
    return list.filter(developer => developer.firstName.split('').map(letter=> letter.charCodeAt(0)).reduce((total, curr)=> total + curr)%2!==0)
  }