/*
https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

1636. Sort Array by Increasing Frequency
array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
Return the sorted array.

*/
let arr = [1, 1, 2, 2, 2, 3, 3];
let freq = {};

// Build frequency map
arr.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1;
});

// Sort array by frequency (ascending), and by value (descending) when frequencies are equal
let sortedArr = arr.sort((a, b) => {
    if (freq[a] === freq[b]) {
        return b - a;  // If frequencies are equal, sort in descending order of the values
    } else {
        return freq[a] - freq[b];  // Otherwise, sort by frequency (ascending)
    }
});

console.log(sortedArr); // [3, 3, 1, 1, 2, 2, 2]

