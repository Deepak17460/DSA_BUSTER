let arr = [2, 3, 4, 5, 6, 6, 7, 7];
let max = Number.MIN_SAFE_INTEGER;
let secondMax = Number.MIN_SAFE_INTEGER;


//Brute force solution
let res = arr.sort((a, b) => b - a);
for(let i=res.length-1; i>=0; i--){
    if(res[i]!=res[i-1]){
        console.log(res[i-1]);
        break;
    }
}

// optional solution
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;  
        max = arr[i];     
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i]; 
    }
}

console.log(secondMax); // 6