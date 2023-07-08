/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const output = [];
    const indexes = new Map();

    for(let i = 0; i < strs.length; ++i) {
        const sortedStr = strs[i].split("").sort().join("");
        
        if(indexes.has(sortedStr)) {
            output[indexes.get(sortedStr)].push(strs[i]);
            continue;
        }

        output.push([strs[i]]);
        indexes.set(sortedStr, indexes.size);
    }

    return output;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));