//Find the missing number of the array 
// [1, 2, 3, 4]
// 


function find_missing_number(arr) {
    const n = arr.length + 1;
    console.log(n);
  // x1 represents XOR of all values from 1 to n
  // find sum of all numbers from 1 to n.
    let x1 = 1;
    for (let i = 2; i <= n; i++) {
        x1 = x1 ^ i;
        console.log(x1); 
    }

  // x2 represents XOR of all values in arr
  let x2 = arr[0];
    for (let i = 1; i < n - 1; i++) {
        x2 = x2 ^ arr[i];
        console.log(x2);
    }
  // missing number is the xor of x1 and x2
  return x1 ^ x2;
}

console.log(`Missing number is: ${find_missing_number([1, 2, 3, 4])}`);
