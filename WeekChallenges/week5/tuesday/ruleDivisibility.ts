/*https://www.codewars.com/kata/564057bc348c7200bd0000ff*/
export function thirt(n: number): number {
  let remainders: number[] = [1, 10, 9, 12, 3, 4];
  let result = n.toString().split('').reverse().map( (c,i) => parseInt(c)*remainders[i%6]).reduce( (p,c) => p += c);
  return n == result ? result : thirt(result)
}
