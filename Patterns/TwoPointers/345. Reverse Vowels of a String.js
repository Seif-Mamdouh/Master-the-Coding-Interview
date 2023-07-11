var reverseVowels = function (s) {
  vowels = "aeiouAEIOU";
  let first = 0;
  let last = s.length - 1;
  let array = s.split("");

  while (first < last) {
    while (first < last && this.vowels.indexOf(array[first]) === -1) {
      first++;
    }
    while (first < last && this.vowels.indexOf(array[last]) === -1) {
      last--;
    }
    [array[first], array[last]] = [array[last], array[first]];
    first++;
    last--;
  }
  return array.join("");
};
