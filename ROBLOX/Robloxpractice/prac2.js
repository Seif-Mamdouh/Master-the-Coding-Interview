// Given an integer n, find the sum n + rev(n).

// The rev() function reverses the integer but also keeps track of the beginning zero i.e

// rev(4200) = 2400 , rev(301) = 103.

//Return the sum

var revSum = function (Arr) {
  // prompt("Enter the number: ")

  function rev(num) {
    return (
      parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
    );
  }

  // i = rev;
  // j = 0;

  for (const num of Arr.values) {
    const reverse = rev(num);
    const sum = val + rev;
  }

  // console.log("The sum of the revresed number is: ")
};

Arr = [1200];

// console.log("The the sum of the reverse number is" + revSum());

console.log(revSum(Arr[0]));

// Acoustic
