function getMaximumEatenDishCount(D, K) {
    let type_dish = [];
    let count = 0;

    for (let i = 0; i < D.length; i++) {
        if (!type_dish.includes(D[i])) {
            type_dish.push(D[i]);
            count++;
            
        } else {
            type_dish.shift();
        }
    }

    return count;
}


getMaximumEatenDishCount([1,2,3,3,1,2], 1)