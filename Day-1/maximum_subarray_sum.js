var maxSubArray = function(nums) {
    let maxSum = Number.NEGATIVE_INFINITY
    let currentSum = 0
    
   for(i of nums){
        currentSum = Math.max(i, currentSum + i)
        maxSum = Math.max(currentSum, maxSum)   
        if(currentSum < 0){
            currentSum = 0
        }
   }
    
    return maxSum;
};