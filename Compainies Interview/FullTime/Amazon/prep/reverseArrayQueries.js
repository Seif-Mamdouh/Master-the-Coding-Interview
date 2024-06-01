//write a function that take in a array and a query array and reverse the array based on the queries

const { func } = require("prop-types");

// function reverseArrayQueries(arr, queries) {

//     let result = [];

//     for (let operation of queries) {
//         let [i, j] = operation;
//         let arrCopy = arr.slice();
//       let subArray = arr.slice(i, j + 1);
//       subArray.reverse();
//       result.push(arr.splice(i, j - i + 1, ...subArray));
//     }

//     return result;
// }


function reverseArrayQueries(arr, queries) {

    let result = [];
    
    for (let operation of queries) {
        let [start, end] = operation;
        let arrCopy = arr.slice();

        let temp = arrCopy.slice(start, end + 1).reverse();
        
        for (let i = start; i <= end; i++) {
            arrCopy[i] = temp[i - start];
        }

        result.push(arrCopy);
    }

    return result;
}


console.log(reverseArrayQueries([9, 1, 7, 3, 5, 4, 6, 2, 8, 0], [[0, 9], [4, 5], [0, 3], [2,7], [1,8], [3,0]]));