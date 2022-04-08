/* https://www.codewars.com/kata/585d7d5adb20cf33cb000235 */
function findUniq(arr) {
  // do magic
  let newArr = []
  arr.sort()
  return (arr[0] !== arr[1]) ?  arr[0] : arr.pop()
}
