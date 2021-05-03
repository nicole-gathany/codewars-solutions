const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')

// very similar to mine but for the alpha, i used an array and they use a string