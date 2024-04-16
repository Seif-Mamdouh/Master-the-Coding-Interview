// There's a multiple-choice test with 
// �
// N questions, numbered from 
// 1
// 1 to 
// �
// N. Each question has 
// 2
// 2 answer options, labelled A and B. You know that the correct answer for the 
// �
// ith question is the 
// �
// ith character in the string 
// �
// C, which is either "A" or "B", but you want to get a score of 
// 0
// 0 on this test by answering every question incorrectly.
// Your task is to implement the function getWrongAnswers(N, C) which returns a string with 
// �
// N characters, the 
// �
// ith of which is the answer you should give for question 
// �
// i in order to get it wrong (either "A" or "B").



function getWrongAnswers(N, C) {
  let map = new Map();
  
  for (let i = 0; i < C.length; i++) {
    if(map.has(C[i])) {
      map.set(C[i], map.get(C[i]) + 1);
    } else {
      map.set(C[i], 1);
    }
  }

  

}


getWrongAnswers(3, "ABA");