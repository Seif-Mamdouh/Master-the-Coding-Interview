// word ["add", "boook", "break"]

function findDup(words){
    let arr = [];

    for(let word of words){

        let minSubs = 0;

        for(let i = 0; i < word.length; i++){
            if(word[i] === word[i+1]){
                minSubs++;
                i++;
            } 
        }
        arr.push(minSubs);
    }

    return arr;
}

console.log(findDup(["add", "boook", "break"])); // [1, 1, 0]