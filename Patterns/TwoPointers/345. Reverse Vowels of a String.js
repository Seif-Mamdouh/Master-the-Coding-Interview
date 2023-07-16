var reverseVowels = function (s) {
  vowels = "aeiouAEIOU";
  let i = 0;
  let j = s.length - 1;
  let array = s.split("");

  while (i < j) {
    while (i < j && this.vowels.indexOf(array[i]) === -1) {
      i++;
    }
    while (i < j && this.vowels.indexOf(array[j]) === -1) {
      j--;
    }
    [array[i], array[j]] = [array[j], array[i]];
    i++;
    j--;
  }
  return array.join("");
};



