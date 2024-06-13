// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


function canFinish(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill().map(() => []);
    
    for (let [course, prereq] of prerequisites) {
        adjList[prereq].push(course);
    }
    
    const visited = new Array(numCourses).fill(false);
    const inStack = new Array(numCourses).fill(false);
    
    const hasCycle = (course) => {
        if (visited[course]) {
            return false;
        }
        
        visited[course] = true;
        inStack[course] = true;
        
        for (let nextCourse of adjList[course]) {
            if (inStack[nextCourse] || hasCycle(nextCourse)) {
                return true;
            }
        }
        
        inStack[course] = false;
        return false;
    };
    
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) {
            return false;
        }
    }
    
    return true;
}


console.log(canFinish(2, [[1,0]])); // Expected output: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected output: false

