const tourney = arr => {
  
    if (arr.length === 1)
      return [ arr ];
    
    let next = arr.length % 2 ? arr.slice(-1) : [];
  
    for (let i = 0; i < arr.length - 1; i += 2)
      next.push(Math.max(arr[i], arr[i + 1]));
    
    return [ arr ].concat(tourney(next));
    
  }