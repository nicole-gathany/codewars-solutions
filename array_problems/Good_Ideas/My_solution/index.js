function well(x){
    let ideasArray = x.map(word => word.join(" ")).join(" ").toLowerCase().split(" ");
     let goodIdeasCounter = 0;
     for(let i=0; i<ideasArray.length; i++){
       if(ideasArray[i]==="good"){ goodIdeasCounter++}
     }
    if(goodIdeasCounter>0 &&goodIdeasCounter<=2) return 'Publish!';
    else if(goodIdeasCounter>2) return 'I smell a series!';
    else if(goodIdeasCounter===0) return 'Fail!';
 }