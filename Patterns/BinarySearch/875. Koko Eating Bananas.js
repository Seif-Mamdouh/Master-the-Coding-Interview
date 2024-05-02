
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles) + 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const eattingHours = division(piles, mid);

    if (eattingHours > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};

function division(piles, mid) {
  let hoursSpent = 0;

  for (let pile of piles) {
    hoursSpent += Math.ceil(pile / mid);
  }

  return hoursSpent;
}