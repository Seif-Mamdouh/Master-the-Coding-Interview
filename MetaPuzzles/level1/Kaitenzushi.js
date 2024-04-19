function getMaximumEatenDishCount(N, D, K) {
    let result = [];
    let index = 0;
    let count = 0;

    while (index < N) {
        if (result.length > K) {
            result = result.slice(result.length - K, result.length);
        } else if (!result.includes(D[index])){
            result.push(D[index]);
            index++;
            count += 1;
        } else {
            index++;
        }
    }
    
    console.log(count)
    return count;
}


getMaximumEatenDishCount(6, [1, 2, 3, 3, 1, 2], 1);

// function getMaximumEatenDishCount(D, K) {
//   let type_dish = [];
//   let count = 0;

//   for (let i = 0; i < D.length; i++) {
//     if (!type_dish.includes(D[i])) {
//       type_dish.push(D[i]);
//       count++;
//     } else {
//       type_dish.shift();
//     }
//   }

//   return count;
// }
