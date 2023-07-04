/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x < 0) return false;

    let xCp = x;

    let reversedNumber = '';

    while(xCp !== 0) {
        const lastDigit = xCp % 10;
        xCp = Math.trunc(xCp / 10);
        
        reversedNumber += lastDigit;
    }

    return reversedNumber == x;
};

console.log(isPalindrome(22122));