// 739. Daily Temperatures
// Medium

// 7636

// 169

// Add to List

// Share
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1, 1, 0]



//answer


var dailyTemperatures = function (T) {
    
    let result = new Array(T.length).fill(0);

    let stack = [];

    for (let num of T) {
        while (stack.length > 0 && T[num] > T[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            result[prevIndex] = num - prevIndex;
        }

        stack.push(num);
    }

    return result;
}



dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

// var dailyTemperatures = function(T) {

//     const result = new Array(T.length).fill(0)

//     if(T.length < 2) return result

//     const mono = []

//     T.forEach((temp, index) => {

//         while(mono.length && mono[mono.length-1].temp < temp) {

//             const pop = mono.pop()

//             result[pop.index] = index - pop.index

//         }

//         mono.push({temp, index})

//     })

//     return result

// };