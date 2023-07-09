/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let left = 0;  //buy
    let right = 1; //sell

    let maxProfit = 0;

    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];

            maxProfit = Math.max(profit, maxProfit);
        }
        else left = right;

        right++;
    }
    return maxProfit;
};

console.log(maxProfit([2,4,1]));