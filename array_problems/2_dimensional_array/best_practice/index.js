function matrix(array) {
    for (let i=0; i<array.length; i++) {
      array[i][i] = array[i][i] < 0 ? 0 : 1
    }
    return array;
}

//it's like my solution but one line. cute. maybe i should be less afraid of ternary operators