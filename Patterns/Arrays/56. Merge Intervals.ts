// O(n log n) time 
// O(1) space 
function merge(intervals: number[][]): number[][] {

    intervals.sort((a, b) => a[0] - b[0]);

    
    let k = 0

    for(let i = 1; i < intervals.length; i++){

        if(intervals[i][0] <= intervals[k][1]){
            console.log(intervals[0]);
            intervals[k][1] = Math.max(intervals[i][1], intervals[k][1]);
        } else {
            k++;
            intervals[k] = intervals[i]
        }
    }  


    return intervals.slice(0, k + 1)
};


// O(n log n) time | O(n) space
function merge(intervals: number[][]): number[][] {

    // let sort = intervals.sort((a,b) => a - b); 
    intervals.sort((a, b) => a[0] - b[0]);

    let array = [intervals[0]]
    

    for(let i = 0; i < intervals.length; i++){

        let currentInterval = intervals[i];
        const lastMerged = array[array.length - 1];

        if(currentInterval[0] <= lastMerged[1]){
            console.log(currentInterval[0]);
            lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
        } else {
            array.push(currentInterval)
        }
    }  


    return array;
};