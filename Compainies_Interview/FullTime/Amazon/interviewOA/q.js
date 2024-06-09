function isRegexMatching(regex, arr) {
  let jsRegex = regex
    .replace(/\./g, "[a-z]") 
    .replace(/\(([^)]+)\)\*/g, "(?:$1)*"); 

  let pattern = new RegExp(`^${jsRegex}$`);

  return arr.map((str) => (pattern.test(str) ? "YES" : "NO"));
}

const regex = "ab(e.r)*e";
const arr = ["abbeere", "abefretre"];
console.log(isRegexMatching(regex, arr));
