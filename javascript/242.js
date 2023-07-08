/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const chars = new Map();

    for(let i = 0; i < s.length; ++i) {
        if(chars.has(s[i])) chars.set(s[i], chars.get(s[i]) + 1);
        else chars.set(s[i], 1);
    }

    for(let i = 0; i < t.length; ++i) {
        if(chars.has(t[i])) {
            const nChars = chars.get(t[i]);
            const newN = nChars - 1;

            if(newN < 0) return false;

            chars.set(t[i], newN);
            continue;
        }

        return false;
    }

    return true;
};

console.log(isAnagram("rat", "car"));