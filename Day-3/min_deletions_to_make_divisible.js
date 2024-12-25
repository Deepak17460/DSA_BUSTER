/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */

function gcd(a, b) {
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

var minOperations = function(nums, numsDivide) {
    let deleCt = 0;
    let nums_gcd = numsDivide[0];
    nums.sort((a,b)=>a-b);
    for (let i=1; i<numsDivide.length; i++) {
        nums_gcd = gcd(nums_gcd, numsDivide[i]);
    }

    for (let j of nums) {
        if (nums_gcd % j === 0) {
            return deleCt;
        } else {
            deleCt++;
        }
    }
    
    return -1
};
