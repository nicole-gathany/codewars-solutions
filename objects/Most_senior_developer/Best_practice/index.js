function findSenior(list) {
    var maxAge = Math.max(...list.map(person => person.age));
    return list.filter(person => person.age === maxAge);
  }

  //this one is slightly better than mine because it doesn't require sorting