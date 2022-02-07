function uniTotal (string) {
// total up dem unicodes!
    let sum = 0;
//adding up the values of the first character of each element  
    for(let i = 0; i < string.length; i++) {
//add them all      
        for ( let j=0; j < string[i].length; j++ ) {
            let char_code = string[i].charCodeAt(j);
            sum += char_code;
         }
      }
    return sum;
}
