/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = 0;
    let neg = 1;

    const numsLen = nums.length;
    const newArr = new Array(numsLen);

    for(let i = 0; i < numsLen; ++i) {
        const cur = nums[i];

        if(cur >= 0) {
            newArr[pos] = cur;
            pos += 2;
        }
        else {
            newArr[neg] = cur;
            neg += 2;
        }
    }

    return newArr;
};

console.log(rearrangeArray([3,1,-2,-5,2,-4]));