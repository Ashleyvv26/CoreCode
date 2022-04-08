/*https://www.codewars.com/kata/54b42f9314d9229fd6000d9c*/

export function duplicateEncode(word: string){
    // ...
    return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
