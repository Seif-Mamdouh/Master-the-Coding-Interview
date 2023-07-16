var isPalindrome = function (s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const word = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let i = 0;
  let j = word.length - 1;

  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
