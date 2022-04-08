/*https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript*/

export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
        // your code
        let y = 0
        for (y; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug
        return y
    }
  }
