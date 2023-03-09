function maxArray(arr, length) {
    let maxSum = -Infinity;
    const n = arr.length;
    for (let i = 0; i <= n - length; i++) {
      let currentSum = 0;
      for (let j = i; j < i + length; j++) {
        currentSum += arr[j];
      }
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
    console.log(maxArray([100, 200, 300, 400], 2)); 
    console.log(maxArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); 
    console.log(maxArray([-3, 4, 0, -2, 6, -1], 2)); 