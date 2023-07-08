/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    let queue = [];

    if(m === 0) {
        nums1.splice(0, nums1.length);
        nums1.push(...nums2);
        return;
    };

    if(n === 0) return;

    for(let i = 0; i < m + n; ++i) {

        if(nums1[i] === 0 && i >= m) {
            (queue[0] < nums2[0] || nums2.length === 0) ? swap(nums1, queue, i) : swap(nums1, nums2, i);
            continue;
        }

        if(queue[0] < nums2[0] || nums2.length === 0) {
            queue.push(nums1[i]);
            swap(nums1, queue, i);
            continue;
        }
    
        if(nums2[0] < nums1[i]) {
            queue.push(nums1[i]);
            swap(nums1, nums2, i);
        }

    }
};

const swap = (arr1, arr2, i) => {
    arr1[i] = arr2[0];
    arr2.shift();
}

let nums1 = [-1,0,0,3,3,3,0,0,0];
let nums2 = [1,2,2];

merge(nums1, 6, nums2, 3);
console.log(nums1)