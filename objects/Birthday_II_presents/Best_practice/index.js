const present = (x, y) => {
    if (x === 'goodpresent') return String.fromCharCode( ...[...x].map( el => el.charCodeAt() + y ) )
    if (x === 'bang') return [...x].map(el => el.charCodeAt() - y).reduce( (a, b) => a + b, 0 )
    if (x === 'dog') return 'pass out from excitement ' + y + ' times'
    if (x === 'crap' || x === 'empty') return [...x].sort().join('')
    if (x === 'badpresent') return 'Take this back!'
  }