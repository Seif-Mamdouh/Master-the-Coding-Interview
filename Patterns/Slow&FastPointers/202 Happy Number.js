/*
202. Happy Number
Easy


Share
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false

*/


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function find_happy_number(head){
    let fast = head,
        slow = head;
    
    while (true) {
        fast = find_sqaure_num(find_sqaure_num(fast));
        slow = find_sqaure_num(slow);

    if (slow === fast) {
        break;
        }
    }

    return slow === 1;
}

function find_sqaure_num(num) {
    let sum = 0;
    while ((num > 0)) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}


console.log(find_happy_number(23));
console.log(find_happy_number(12));