function missingWords(s, t) {
  const sWords = s.split(" ");
  const tWords = t.split(" ");
  const missingWords = [];

  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < sWords.length) {
    if (sWords[sIndex] !== tWords[tIndex]) {
      missingWords.push(sWords[sIndex]);
    } else {
      tIndex++;
    }
    sIndex++;
  }

  return missingWords;
}
