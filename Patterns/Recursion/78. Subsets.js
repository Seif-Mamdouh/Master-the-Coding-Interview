var subsets = function (nums) {

    let result = [];

    let subSetGenerator = function (start, currSubSet) {

        result.push(currSubSet);

        for (let i = start; i < nums.length; i++) {
            const updatedSubSet = currSubSet.concat(nums[i]);
            subSetGenerator(i + 1, updatedSubSet);
        }
    }

    subSetGenerator(0, []);
    return result;
};


//Concurrency 
function time() {
  var subsets = async function (nums) {
    let result = [];

    let generateSubSets = async function (start, subSet) {
      result.push(subSet);

      for (let i = start; i < nums.length; i++) {
        const updatedSubset = [...subSet, nums[i]];
        await generateSubSets(i + 1, updatedSubset);
      }
    };

    const startTime = performance.now(); // Record start time

    await generateSubSets(0, []);

    const endTime = performance.now(); // Record end time

    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime} milliseconds`);

    return result;
  };

  subsets([1, 2, 3])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}


//Multithreading
function time2() {
  var subsets2 = function (nums) {
    let result = [];

    let generateSubSets = function (start, subSet) {
      result.push(subSet);

      for (let i = start; i < nums.length; i++) {
        const updatedSubset = [...subSet, nums[i]];
        generateSubSets(i + 1, updatedSubset);
      }
    };

    const startTime = performance.now(); // Record start time

    generateSubSets(0, []);

    const endTime = performance.now(); // Record end time

    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime} milliseconds`);

    return result;
  };

  subsets2([1, 2, 3]);
}

// Call the time function
time();
time2();
