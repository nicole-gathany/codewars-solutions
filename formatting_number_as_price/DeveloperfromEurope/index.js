function countDevelopers(list) {
    // your awesome code here :)
    let counter = 0;
    //list
    //not sure how to make it more elegant honestly
  // list.forEach(developer => if(developer.continent ==="Europe" && developer.language==="JavaScript"){counter++})
    for(let i=0; i<list.length; i++){
      if(list[i].continent==="Europe" && list[i].language ==="JavaScript"){
        counter++;
      }
    }
    return counter;
    
    
  }