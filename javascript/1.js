/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    
    const numbers = new Set(nums);

    for(let i = 0; i < nums.length; ++i) {
        const n = target - nums[i];

        if(!numbers.has(n)) continue;

        const indexOfn = nums.indexOf(n); 
        if(indexOfn === i) continue;

        return [i, indexOfn];
    }
};

console.log(twoSum([3, 3], 6));