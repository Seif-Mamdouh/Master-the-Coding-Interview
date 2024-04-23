// O(n) time complexity
// O(n) space complexity
// 347. Top K Frequent Elements
function topKFrequent(nums, k) {
  let map = new Map();
  let freq = Array(nums.length + 1)
    .fill()
    .map(() => []);

  let res = [];

  for (let n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  for (let [n, c] of map.entries()) {
    freq[c].push(n);
  }

  for (let i = freq.length - 1; i > 0; i--) {
    for (let n of freq[i]) {
      console.log(n);
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
}
