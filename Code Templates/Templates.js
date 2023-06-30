// Two pointers: one input, opposite ends

let fn = arr => {
    let left = 0, ans = 0, right = arr.length - 1;

    while (left < right) {
        //logic with left and right 
        if (CONDITION){
            left++;
        } else {
            right--;
        }
    }

    return ans;
}



// Two pointers: two inputs, exhaust pointers are exhuasted
let fn = (arr1, arr2) => {
    let i = 0, j = 0, ans = 0;

    while (i < arr1.length && j < arr2.length) {
        // logic here
        if (condition) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.length) { 
        // do logic
        i++;
    } 
    
    while (j < arr2.length) {
        // do logic
        j++;
    }

    return ans;
}
