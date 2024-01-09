var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  let result = [];

  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let backtrack = function (thisDigitIndex, thisCombination) {
    if (thisDigitIndex === digits.length) {
      result.push(thisCombination);
      return;
    } else {
      let currentDigit = digits[thisDigitIndex];
      let letters = map[currentDigit];

      for (let i = 0; i < letters.length; i++) {
        const updatedCombination = thisCombination + letters[i];
        backtrack(thisDigitIndex + 1, updatedCombination);
      }
    }
  };

  backtrack(0, "");
  return result;
};
