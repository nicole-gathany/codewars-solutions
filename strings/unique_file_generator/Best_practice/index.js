function generateName(){
    function * randomNames() {
      const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      while (true) {
        yield Array(6).fill(0).map(ch => alpha[Math.floor(Math.random() * 52)]).join('');
      }
    }
    let name = randomNames().next().value;
    return photoManager.nameExists(name) ? generateName() : name;
  }

  //i like this one!! it includes all letters and doesn't have to use String.fromCharCode()
  //i need to understand .fill()