/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const noDups = new Set(nums);

    return noDups.size !== nums.length;
};

console.log(containsDuplicate([1,2,3,1]));