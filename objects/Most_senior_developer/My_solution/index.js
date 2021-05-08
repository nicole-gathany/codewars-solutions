function findSenior(list) {
    // thank you for checking out the Coding Meetup kata :)
    let array = list.map(developer => developer.age).sort((a, b) => b-a);
    return list.filter(developer => developer.age === array[0])
  }