//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

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



//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2