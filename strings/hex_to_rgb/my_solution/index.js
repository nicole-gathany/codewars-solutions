function hexStringToRGB(hexString) {
    //parameters: a string of a hexidecimal code for a color
    //return an object of the RGB as {r: ddd, g: ddd, b: dd}
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A (10), B (11), C (12), D (13), E (14), F (15)
    //FF9933
    //{r: (16*15+1*15), g: (16*9+1*9), b: (16*3 + 1*3)}
    let letters = "ABCDEF"
   let array =  hexString.toUpperCase().substring(1, 7).split("").map(a => letters.includes(a) ? parseInt(a.replace(a, a.charCodeAt(0)-55)): parseInt(a));
    console.log(array)
    
    return {r:16*array[0]+array[1], g:16*array[2]+array[3], b:16*array[4]+array[5]}
  }