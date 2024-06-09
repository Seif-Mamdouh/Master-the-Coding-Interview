function findMinimumOperations(image) {
  const n = image.length;
  let i = 0,
    j = 0,
    operations = 0;

  while (i < n) {
    if (image[i] === image[j]) {
      j++;
    } else {
      operations++;
    }
    i++;
  }

  return operations;
}