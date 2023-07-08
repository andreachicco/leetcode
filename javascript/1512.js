/**
* @param {number []} nums
* @return {number}
*/

const numIdenticalPairs = function(nums) {
	let count = 0;
	for(let i = 0; i < nums.length; ++i) {
		for(let j = i + 1; j < nums.length; j++) {
			if(nums[i] === nums[j]) count++;
		}
	}

	return count;
}

const mapNumIdenticalPairs = function(nums) {
	const map = new Map();
	let count = 0;
	for(let i = 0; i < nums.length; ++i) {
		if(!map.has(nums[i])) map.set(nums[i], 1);
		else {
			const n = map.get(nums[i]);
			count += n;
			map.set(nums[i], n + 1);
		}
	}

	return count;
}

console.log(mapNumIdenticalPairs([1,2,3,1,1,3]));
