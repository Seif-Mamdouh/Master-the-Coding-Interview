// Given an array of non negative integers,length n, find all pairs (i,j) where A[i] + rev(A[j]) = rev(A[i]) + A[j]. 
// The rev() function is the reverse of the integer i.e rev(456) = 654. Return the number of pairs

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