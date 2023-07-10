/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const uMerged = nums1.concat(nums2);
    const oMerged = uMerged.sort((a, b) => a - b);
    if(oMerged.length % 2 !== 0) return (oMerged[Math.floor(oMerged.length / 2)]); 
    else {
        const m = oMerged.length / 2;
        return ((oMerged[m - 1] + oMerged[m]) / 2)
    }
};

console.log(findMedianSortedArrays([1,2], [3, 4]));