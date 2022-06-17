// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

//Example 1
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the 
top left corner being modified to 8. Since there are two
8's in the top left 3x3 sub-box, it is invalid.



//answer 


function isValidSudoku(board) {
  let store = {
    rows: {},
    cols: {},
    square: {},
  };
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const box = board[i][j];

      if (!store["rows"][i] && box !== ".") {
        store["rows"][i] = [];
        store["rows"][i].push(box);
      } else if (box !== "." && !store["rows"][i].includes(box)) {
        store["rows"][i].push(box);
      } else if (store["rows"][i] && store["rows"][i].includes(box)) {
        return false;
      }

      if (!store["cols"][j] && box !== ".") {
        store["cols"][j] = [];
        store["cols"][j].push(box);
      } else if (box !== "." && !store["cols"][j].includes(box)) {
        store["cols"][j].push(box);
      } else if (store["cols"][j] && store["cols"][j].includes(box)) {
        return false;
      }
//      rows: {
//     '0': [ '5', '3', '7' ],
//     '1': [ '6', '1', '9', '5' ],
//     '2': [ '9', '8', '6' ],
//     '3': [ '8', '6', '3' ],
//     '4': [ '4', '8', '3', '1' ],
//     '5': [ '7', '2', '6' ],
//     '6': [ '6', '2', '8' ],
//     '7': [ '4', '1', '9', '5' ],
//     '8': [ '8', '7', '9' ]
//   },
//      cols: {
//   '0': [ '5', '6', '8', '4', '7' ],
//   '1': [ '3', '9', '6' ],
//   '2': [ '8' ],
//   '3': [ '1', '8', '4' ],
//   '4': [ '7', '9', '6', '2', '1', '8' ],
//   '5': [ '5', '3', '9' ],
//   '6': [ '2' ],
//   '7': [ '6', '8', '7' ],
//   '8': [ '3', '1', '6', '5', '9' ]
// },
//   square: {}
            
//So what just was happend was 7amda and what's coming is another different 7amada
      const squareRowId = Math.ceil((i + 1) / 3);
      const squareColId = Math.ceil((j + 1) / 3);
      const squareId = `${squareRowId}-${squareColId}`;

      if (!store["square"][squareId] && box !== ".") {
        store["square"][squareId] = [];
        store["square"][squareId].push(box);
      } else if (box !== "." && !store["square"][squareId].includes(box)) {
        store["square"][squareId].push(box);
      } else if (
        store["square"][squareId] &&
        store["square"][squareId].includes(box)
      ) {
        return false;
      }
    }
  }
  return true;
}
            

            
            


//This problem wants to fuck with everyone's head
//I mean the instructions are simple
//each row has to have 1 - 9 without repituition
//and each column have to have numbers from 1-9 without repetition. 
// each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition. 
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'




//we will use hashmap and store unique values.

//we could use hashset for the answer. 
//the only thing is that hash set do not store key value pairs. It only stores values/

// if you are reading this, it's too late lmfaoooo
//Nah fr
//So what is HashMap vs Hashset? Let's get into it

/*
1) Implementation
Hashmap is the implementation of the map interface 
Hashset is the implementation of the set interface 

2) Internal Implementation
Hashmap do not internally use hashset 
Hashset on the other hand do use Hashmap for internal implementation

3) Storage of elements
The best thing about hashmap is the storage of elements in unique key value pair
Hashset on the other hand only stores the object 

4) Method to add an element
Hashmap uses the Put method is used to add elements to the hash (Java)
Hashset uses the add method top add an element in the hashset 

5) Index performance
Hashmap because the amazing key value pair in the retrieval of the element during the traversal process
HashSet us completely based on the object. Compared to the Hashmap it's much more slower

6) Null Allownce
Single null key and any number of the null value can be inserted in the hashmap without nay restriction
Hashset allows only one null value in its collection, after which no null is allowed to be added. 

*/
