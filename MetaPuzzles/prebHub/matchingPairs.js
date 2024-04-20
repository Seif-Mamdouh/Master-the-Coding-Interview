function matchingPairs(s, t) {

    let matchingPairs = 0;
    let sArr = s.split('');
    let tArr = t.split('');

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === tArr[i]) {
            matchingPairs++;
        }
    }

    console.log(matchingPairs);
    return matchingPairs;
}




// matchingPairs("abcd", "adcb");

function printInteger(n) {
  var out = "[" + n + "]";
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printInteger(expected);
    out += " Your output: ";
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var s_1 = "abcde";
var t_1 = "adcbe";
var expected_1 = 5;
var output_1 = matchingPairs(s_1, t_1);
check(expected_1, output_1);

var s_2 = "abcd";
var t_2 = "abcd";
var expected_2 = 2;
var output_2 = matchingPairs(s_2, t_2);
check(expected_2, output_2); 
