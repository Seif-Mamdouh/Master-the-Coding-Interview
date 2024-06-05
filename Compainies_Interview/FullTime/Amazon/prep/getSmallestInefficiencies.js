function getSmallestInefficiencies(skill, k) {

    let n = skill.length;
    let inefficiencies = [];

    // Use two pointers to find the inefficiencies
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        inefficiencies.push(Math.abs(skill[i] - skill[j]));
      }
    }

    // Sort the inefficiencies
    inefficiencies.sort((a, b) => a - b);

    // Return the first k inefficiencies
    return inefficiencies.slice(0, k);
}


let skills = [3, 1, 3, 5];
let k = 3;
console.log(getSmallestInefficiencies(skills, k)); 