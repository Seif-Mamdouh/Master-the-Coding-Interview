var topKFrequent = function (words, k) {
  let map = new Map();
  for (let word of words) {
    // let count = 1;
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  let freqArray = new Array(words.length).fill().map(() => []);
  for (let [word, count] of map) {
    freqArray[count].push(word);
  }

  let res = [];
  for (let i = freqArray.length - 1; i > 0; i--) {
    freqArray[i].sort();
    for (let char of freqArray[i]) {
      res.push(char);
      if (res.length === k) {
        return res;
      }
    }
  }
};
