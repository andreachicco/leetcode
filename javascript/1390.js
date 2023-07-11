function getSumOfFourDivisor(num) {
    let divisors = 2;
    let sum = 1 + num;
    for(let i = 2; i <= num / 2; ++i) {
        if(num % i === 0) {
            sum += i;
            divisors++;
        }

        if(divisors > 4) return 0;
    }

    return divisors === 4 ? sum : 0;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    const cache = new Map();

    let sum = 0;
    for(let i = 0; i < nums.length; ++i) {
    
        //number has already appeared
        if(cache.has(nums[i])) {
            sum += cache.get(nums[i])
            continue;
        }  
        
        const sumOfDivisors = getSumOfFourDivisor(nums[i]);
        cache.set(nums[i], sumOfDivisors);

        sum += sumOfDivisors;
    }

    return sum;
};

console.log(sumFourDivisors([21, 21]));
// console.log(getSumOfFourDivisor(4));