function generateName()
{
  // make sure to check the name is unique via the photoManager object
  let letter = 0;
  let url = []
  while(url.length<6){
    letter=Math.floor(Math.random()*100);
    if(!url.includes(String.fromCodePoint(letter))&&letter>65&&letter<90){
       url.push(String.fromCodePoint(letter))
    }
  }
  return url.join('');
}