/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequences = new Map();

    for(let i = 0; i < nums.length; ++i) {
        
        if(frequences.has(nums[i])) {
            frequences.set(nums[i], frequences.get(nums[i]) + 1);
            continue;
        }
        
        frequences.set(nums[i], 1);
    }   

    const entries = [...frequences.entries()]
    entries.sort((a, b) => b[1] - a[1]);
    const output = entries.map(entry => entry[0]).slice(0, k);

    return output;
};

console.log(topKFrequent([3,0,1,0], 1));