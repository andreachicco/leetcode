/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    if(nums.length === 0) return 0;
    let max = 1;
    let count = 1;
    const ordered = Array.from(new Set(nums.sort((a, b) => a - b)));

    for(let i = 1; i < ordered.length; i++) {
        // if(ordered.length - i < max) break;
    
        if(ordered[i] === ordered[i - 1] + 1) {
            count++;
            continue;
        }
        
        max = Math.max(count, max);
        count = 1;
    }
    
    max = Math.max(count, max);
    return max;
};

console.log(longestConsecutive([1,2,0,1]))