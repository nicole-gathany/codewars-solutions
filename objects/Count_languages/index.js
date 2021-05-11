function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    let obj = {};
    list.forEach(item => obj[item.language]? obj[item.language]++ : obj[item.language]=1);         
    return obj;
  }