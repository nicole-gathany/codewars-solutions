//my solution is considered one of the best practices (it got 8 votes for best practice)
//however, i wanted to include the solutions using higher order functions
const recycle = array =>
  [ 'paper', 'glass', 'organic', 'plastic' ]
    .map(mat => array.filter(obj => obj.material === mat || obj.secondMaterial === mat)
    .map(obj => obj.type ))

//the solution is elegant. however, i would not use this solution because it maps the array twice and filters it in the same line, that sounds like it would loop 3xs which means that the time complexity would be O(n*n*n)
//i'm going to count the number of calls using console.count()