// Given an array of non negative integers,length n, find all pairs (i,j) where A[i] + rev(A[j]) = rev(A[i]) + A[j]. 
// The rev() function is the reverse of the integer i.e rev(456) = 654. Return the number of pairs

// input: arr = [1,20,2,11] ----- expected output: 7

// Test 2

// input: arr = [32,332,100] ----- expected output: 4

// Test 3

// input: arr = [0,1000000000] ----- expected output: 3

// Test 4

// input: arr = [4,8,20,3,10,18,5,0,13,13] ----- expected output: 21




Arr = [ 1, 2, 32 ];

var findPairs = function(Arr)
{

    let numPairs = [];

    for (let i = 0; i < Arr.length; i++)
    {
        for (let j = 0; j < Arr.length; i++)
        {
            return Arr[i] + rev(Arr[j])

                                if (Arr[i] + rev(Arr[j]) == = Arr[j] + rev(Arr[i]))
            {
                numPairs.Arr.push(i, j);
            }
            else
            {
                console.log("There no pairs")
            }
        }
    }

    return numPairs
}

function rev(Arr){
    return (
        parseFloat(
            Arr
                .toString()
                .split('')
                .reverse()
                .join('')) *
        Math.sign(Arr))}

console.log(findPairs(Arr));

var findPairs = function (Arr) {
  let numPairs = new Map();

  function rev(Arr) {
    return (
        parseFloat(Arr.toString().split("").reverse().join("")) * Math.sign(Arr)
    );
  }

  for (let i = 0; i < Arr.length; i++) {
    for (let j = 0; j < Arr.length; i++) {
        const reverse = rev(Arr);
        const difference = Arr - rev; 

        if (!map.has(difference)) {
            map.set(difference, 0);
        }

        let count = 1 + map.get(difference);
        map.set(difference, count);
    }
      
      let ans = 0; 
      for (const count of map.values()) {
          const sum = count + (count * (count - 1) / 2);
          ans += sum;
      }
    //   return ans;
      
  }

  return numPairs;
};




// The given equation:A[i] + rev(A[j]) = rev(A[i]) + A[j]  can be re written as:

// A[i]-rev(A[i]=A[j]-rev(A[j])

// Now we need to calculate the  pairs whose difference with their reverse is same. 
// In other words we need to find pairs of indices(i, j) where i != j or i = j and A[i] - rev(A[i] = A[j] - rev(A[j]).

// For this we will use a map to store the difference between value and it's 
// reverse for each number(i.e A[i] - rev(A[i]) and then calculate the number of 
// ways to select any two out of them which is count(when indices are same) + count * (count - 1) / 2(when indices are different) where count 
// is the total number of values having same difference between their values and their reverse.




// A is the input array of numbers
var countNicePairs = function(Arr) {
    // map to store the number of values with same difference
    const map = new Map()
   
    //function to get the reverse of the number 
    function findReverse(val) {
        let str = String(val)
        const chs = str.split('')
        chs.reverse()
        str = chs.join('')
        
        let result = Number(str)
        return result
    }    
    
    for (const val of Arr.values()) {
        const rev = findReverse(val)
        const difference = val - rev
      // if that diff is not present put it in map with 0 value
        if (!map.has(difference)) 
            map.set(difference, 0)
        
        
        let count = 1 + map.get(difference)
        map.set(difference, count)
    }
    
    
    let ans = 0
    for (const count of map.values()) {
        //Here sum=pairs formed by same number(i.e. i=j 
        //where i and j are indices of A[]) + pairs formed by distinct numbers 
        const sum = count+(count*(count-1)/2)
        ans += sum
    }
    return ans
};
