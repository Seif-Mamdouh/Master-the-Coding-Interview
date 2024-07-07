class Solution {
    constructor() {
        this.arr = [];
    }

    insertNum(num) {
        this.arr.push(num)
    }

    findMedian() {
        if (this.arr.length === 0) return null;
        
        let sum = 0;
        this.arr.forEach(num => {
            sum += num;
        });
        let isEven = sum % 2 === 0;

        if (isEven) {
            return sum / 2;
        } else {
            return Math.floor(sum / 2);
        }
    }

}

const solution = new Solution();

solution.insertNum(3);
// solution.insertNum(2);
solution.insertNum(1);
console.log(solution.findMedian());
solution.insertNum(5);
console.log(solution.findMedian());

