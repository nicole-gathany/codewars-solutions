function balance(book) {
    // your code
    // Please use .toFixed(2) to format numbers
    //string of crappy ass formated 
    //a new string that 
    let cleanBook =book.replace(/[*!=:+?;,^${}()|[\]\\]/g, "").split("\n").filter(item=> item!=="");
    //console.log(cleanBook)
    let items = cleanBook.slice(1).map(item=> item.split(" ")[0] + " " +item.split(" ")[1])
    //console.log(items)
    let prices = cleanBook.map(item => item.split(" ")[2]).filter(item=> item!==undefined);
    let balance = Number.parseFloat(cleanBook[0]);
    let result = ""
    let totalExpense = prices.reduce((a,b)=>Number.parseFloat(a)+Number.parseFloat(b));
    //console.log(totalExpense.toFixed(2))
    let averageExpense = totalExpense/prices.length;
    // console.log(averageExpense.toFixed(2))
    // console.log(prices)
    //only similiraity is the decimal
    // console.log(Number.parseFloat(cleanBook[0])-Number.parseFloat(prices[0]))
     for(let i=0; i<items.length; i++){
       balance -= Number.parseFloat(prices[i]);
       result += "\r\n"+ items[i] + " "+Number.parseFloat(prices[i]).toFixed(2) + " Balance " + balance.toFixed(2);
     }
    
    return "Original Balance: " + Number.parseFloat(cleanBook[0]).toFixed(2) + result + "\r\n" + "Total expense  " + totalExpense.toFixed(2) + "\r\n" + "Average expense  " + averageExpense.toFixed(2);
      //+ cleanBook[2] + " Balance " + (Number.parseFloat(cleanBook[0])-Number.parseFloat(prices[0])).toFixed(2) ;
  }