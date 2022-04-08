//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
