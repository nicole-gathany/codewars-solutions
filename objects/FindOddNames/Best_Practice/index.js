function findOddNames(list) {
    return list.filter( (d) => {
      return d.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0
    });
 }