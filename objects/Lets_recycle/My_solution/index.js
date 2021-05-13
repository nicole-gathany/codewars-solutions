function recycle(array) {
    //parameters: we get an array of objects
    //return an array of array where the
    //examples: [{type: "pizza", material: organic}, {type:"pizza box", material: paper}]
    //[[pizza box], [pizza]]
    let paper = [];
    let glass = [];
    let organic = [];
    let plastic = [];
    //loop thru array of objects
    //if the material or the second material is paper, push the array[i].type into the paper array
    for(let i=0; i<array.length; i++){
      if(array[i].material==="paper"|| array[i].secondMaterial ==="paper"){
        paper.push(array[i].type)
      } 
      if(array[i].material==="glass"|| array[i].secondMaterial ==="glass"){
        glass.push(array[i].type)
      }
       if(array[i].material==="organic"|| array[i].secondMaterial ==="organic"){
        organic.push(array[i].type)
      }
       if(array[i].material==="plastic"|| array[i].secondMaterial ==="plastic"){
        plastic.push(array[i].type)
      }
    }
    return [paper, glass, organic, plastic]
  }