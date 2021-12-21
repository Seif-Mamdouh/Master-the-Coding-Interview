/* What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)

  for (let i = 0; i < input; i++) { //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)

  }
  for (let j = 0; j < input; j++) { //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

// Big 0( 4 + 7n)
// Big O(n)

*/

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    console.log("Found it!");
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}


function firstRecurringCharacter2(input){
  let map = {};
  for ( i = 0; i<input.length; i++ ){
    if (map[input[i]]){
      return input[i];
    } else {
      map[input[i]] = true;
    }
    console.log(map);
  }
  return undefined; 
}

firstRecurringCharacter2([1,5,5,1,3,4,6])
