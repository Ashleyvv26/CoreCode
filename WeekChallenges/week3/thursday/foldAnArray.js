/*https://www.codewars.com/kata/57ea70aa5500adfe8a000110*/

function foldArray(array, runs){
  const r = [], c = array.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return runs - 1 ? foldArray(r, runs - 1) : r;
}
