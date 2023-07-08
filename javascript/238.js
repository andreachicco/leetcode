/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [];

    const prefixes = [1];
    const suffixes = new Array(nums.length).fill(1);

    for(let i = 1; i < nums.length; ++i) {
        prefixes[i] = prefixes[i - 1] * nums[i - 1];
        suffixes[nums.length - i - 1] = suffixes[nums.length - i] * nums[nums.length - i];
    }

    for(let i = 0; i < nums.length; ++i) answer.push(prefixes[i] * suffixes[i]);

    return answer;
};

console.log(productExceptSelf([-1,1,0,-3,3]));