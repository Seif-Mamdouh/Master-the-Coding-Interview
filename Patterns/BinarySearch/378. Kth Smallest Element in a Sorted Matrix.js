

//Brute Force
var kthSmallest = function(matrix, k) {

    let flattenedArray = [];

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            flattenedArray.push(matrix[i][j]);
        }
    }

    flattenedArray.sort((a, b) => a - b);

    return flattenedArray[k - 1];
};


//O(N^2)
//O(N)