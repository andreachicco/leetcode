/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {

    const p = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    const stack = [];

    for(let i = 0; i < s.length; ++i) {
        const char = s[i];

        if(!p[char]) stack.push(char);
        else {
            const top = stack.pop();

            if(top !== p[char]) return false;
        }
    }

    return stack.length === 0;

    // const indexes = [];
    // const len = s.length;

    // if(len % 2 !== 0) return false;

    // for(let i = 0; i < len; ++i) {
    //     if(indexes.includes(i)) continue;

    //     const index = getClosingPairIndex(s, i);
    //     if(index === -1) return false;

    //     indexes.push(i, index);
    // }

    // return indexes.length === len;
}

const getClosingPairIndex = (s, start) => {
    const p = {'(': ')', '[': ']', '{': '}'};

    let sum = 0;

    const opening = s[start];

    for(let i = start; i < s.length; ++i) {
        if(p[s[i]]) sum++;
        else sum--;

        // console.log(s[i], sum)

        if(sum < 0) return -1;
        if(sum === 0 && s[i] === p[opening]) return i;
        if(sum === 0) return -1;
    }

    return -1;
}


console.log(isValid("["));