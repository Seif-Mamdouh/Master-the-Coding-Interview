739. Daily Temperatures
Medium

7612

169

Add to List

Share
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]



// var dailyTemperatures = function(temperatures) {
    
//     const stack = [];
//     for (let entry of temperatures) {
//         // The monotonic property can only break if and only if the container
//         // is not empty and the last item, compared to the entry, breaks
//         // the property. While that is true, we pop the top item.
//         while (stack.length > 0 && stack[stack.length - 1] <= entry) {
//             stack.pop();
//             // Do something with the popped item here
//         }
//         stack.push(entry);
//     }  
    
// };


// Straight brute force, not a fun way. Remember your interviewer and your crush, 
// both will like you if you're smart and do things in a clever and interesting fun way.

var dailyTemperatures = function(T) {
    const result = new Array(T.length).fill(0)
    if(T.length < 2) return result
    const mono = []
    T.forEach((temp, index) => {
        while(mono.length && mono[mono.length-1].temp < temp) {
            const pop = mono.pop()
            result[pop.index] = index - pop.index
        }
        mono.push({temp, index})
    })
    return result
};


// var dailyTemperatures = function(T) {
//     let res = new Array(T.length);
//     let temps = {};
//     res.fill(0);
//     for(let i = T.length-1;i>=0;i--){
//         let temp = T[i];
//         let day = Number.MAX_VALUE
//         for(let j = temp+1;j<101;j++){
//             if(temps[j]){
//                 day = Math.min(day,temps[j]-i);
//             }
//             if(day != Number.MAX_VALUE){
//                 res[i] = day;
//             }
//             temps[temp] = i;
//         }
//     }
//     return res;
// };



// //here we will be using the Monostatic Stack function
// //This will help us to keep track of the next greater element. 
// each element to the right to find the first element larger than it, calculate the distance between the two.
