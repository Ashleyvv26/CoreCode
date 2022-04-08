/*https://www.codewars.com/kata/525f50e3b73515a6db000b83*/

function createPhoneNumber(numbers){
  numbers.unshift("(");
  numbers.splice(4, 0, ")", " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}
