function balance(book) {

    let totalExpense = 0
    , [ originalBalance, ...entries ] = book
      .trim()
      .replace(/[^a-z0-9\s.]+/gi, '')
      .replace(/\s{2,}/g, m => m[0])
      .split(/\n/);
  
    originalBalance = parseFloat(originalBalance);
  
    entries = entries.map(row => 
      row.replace(/\S+$/g, m => {
        totalExpense += parseFloat(m);
        return parseFloat(m).toFixed(2) + ' Balance ' + (originalBalance - totalExpense).toFixed(2);
      })
    );
  
    entries.unshift('Original Balance: ' + originalBalance.toFixed(2));
    //not sure why this is considered the best because unshift is inefficient
    entries.push('Total expense  ' + totalExpense.toFixed(2));
    entries.push('Average expense  ' + (totalExpense / (entries.length - 2)).toFixed(2));
    return entries.join("\r\n");
     
  }