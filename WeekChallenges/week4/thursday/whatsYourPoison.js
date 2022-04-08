/* https://www.codewars.com/kata/58c47a95e4eb57a5b9000094 */
function find(rats) {
  return rats.reduce((a,b)=>a+Math.pow(2,b),0)
}
