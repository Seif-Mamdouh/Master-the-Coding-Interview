function countSubarrays(arr) {
    const n = arr.length;
    const result = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
      let j = i + 1;
      while (arr[j] < arr[i]) {
        result[i] += 1;
        j++;
      }
    }


    for (let i = n - 1; i >= 0; i--) {
      let j = i - 1;
      while (arr[j] < arr[i]) {
        result[i] += 1;
        j--;
      }
    }

    console.log(result);
    return result;
}


countSubarrays([3, 4, 1, 6, 2]); 
