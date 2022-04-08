//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
  return arr.filter(s => /^[:;][-~]?[)D]$/.test(s)).length;
}
