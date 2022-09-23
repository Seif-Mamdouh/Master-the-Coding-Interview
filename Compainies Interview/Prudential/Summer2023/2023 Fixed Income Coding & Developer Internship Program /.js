// var str = prompt("Enter here: ");
// console.log(str);
// var strArr = str.split(":");

var numArr = strArr[0].split(" ");

numArr.pop(numArr.length - 1);

numArr = numArr.map(Number);

var indexArr = strArr[1].split(",");
var index1, index2, swapArr, temp;
for (var i = 0; i < indexArr.length; i++) {
  swapArr = indexArr[i].split("-");

  index1 = Number(swapArr[0]);
  index2 = Number(swapArr[1]);

  temp = numArr[index1];
  numArr[index1] = numArr[index2];
  numArr[index2] = temp;
}

console.log([1,2,3,4]);
