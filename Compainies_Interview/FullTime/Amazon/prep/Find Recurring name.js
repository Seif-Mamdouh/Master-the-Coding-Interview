// Amazon rewards its new users with a discount coupon that can be applied to their first purchase. Some users create more than one account in order to receive the offer multiple times. It was found that their new usernames are only a permutation of their real names.

const { array } = require("prop-types");

// For examples, if the real usernames of the users are realNames = ["abc", "def"] and the list of all usernames is allNames = ["bca", "abc", "cba", "def"] , then the user "abc" must have made multiple accounts as there are three permutations of "abc" in the list of all usernames.

// Given an array of realNames an array allNames of usernames for each account, identify the names of users who created accounts more than once. The goal is to return the array of real names of these users in lexicographical order. If there are no such names, return an array containing only the string "None".

// Please note that:

// It is guaranteed that no two real names are permutations of each other.
// For the variable realNames , each value is unique, and indicates an individual person.
// Each name in allNames is a permutation of some name in realNames .
// There may be some names in realNames without a permutation in allNames .
// It is possible that some users may create an account using fake names only.

// Function Description

// Complete the function findRecurringNames in the editor.

// findRecurringNames has the following parameters:

// string realNames[n] : the real user names
// string allNames[m] : all registered user names

// Returns

// string[] : the distinct real names of users with multiple registrations in lexicographical order



function getRecurringNames(realNames, allNames) {
  let result = [];
  let real_name_map = new Map();

  for (let name of realNames) {
    if (!real_name_map.has(name)) {
      real_name_map.set(name, name.split(""));
    }
  }

  for (let repeated_name of allNames) {
    for (let [original_name, chars] of real_name_map) {
      if (chars.every((char) => repeated_name.includes(char))) {
        result.push(original_name);
        break;
      }
    }
  }

  return Array.from(new Set(result));
}



console.log(getRecurringNames(["rohn", "henry", "daisy"], ["ryhen", "aisyd", "henry"])); 

console.log(getRecurringNames(["tom", "jerry"],["reyjr", "mot", "tom", "jerry", "mto"]));
