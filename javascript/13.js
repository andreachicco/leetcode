/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const symbols = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    let sum = 0;

    for(let i = 0; i < s.length; ++i) {
        let current = s[i];
        if((current === 'I' || current === 'X' || current === 'C') && i < s.length - 1) {
            const concat = current.concat(s[i + 1]);
            if(symbols[concat]) {
                i++;
                sum += symbols[concat];
                continue;
            }
        }

        sum += symbols[current];
    }

    return sum;
};

console.log(romanToInt("MCMXCIV"))