function addArrays(array1, array2) {
    if(array1.length !== array2.length) throw new Error();
    return array1.map((a,i) => array1[i] + array2[i]);
  }

  //maybe i could also write it like this:
//   function addArrays(array1, array2) {
//     if(array1.length !== array2.length) throw new Error();
//     return array1.map((a,i) => a + array2[i]);
//   }