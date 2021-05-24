function calculate(str) {
    const num = str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((a,i)=> a + +i, 0)
  return [] + num
  }

  //this solution doesn't use eval. I like it because it just makes the numbers being substracted negative numbers. I don't understand + +i