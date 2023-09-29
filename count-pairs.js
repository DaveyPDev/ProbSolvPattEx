// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const seen = {}; 
    let count = 0;
  
    for (let num of arr) {
      const diff = target - num;
  
      if (seen[diff]) {
        
        count++;
      }
  
      seen[num] = true; 
    }
  
    return count;
  }

  module.exports = countPairs
  
  // Test cases
  console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2
  console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3
  console.log(countPairs([4, 6, 2, 7], 10)); // 1
  console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
  console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
  console.log(countPairs([0, -4], -4)); // 1
  console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2
  