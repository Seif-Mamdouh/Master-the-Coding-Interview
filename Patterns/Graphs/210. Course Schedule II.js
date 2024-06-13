function findOrder(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill().map(() => []);
    for (let [course, prereq] of prerequisites) {
        adjList[prereq].push(course);
    }

    const visited = new Array(numCourses).fill(false);
    const inStack = new Array(numCourses).fill(false);
    const result = [];
    let hasCycle = false;

    const dfs = (course) => {
        if (inStack[course]) {
            hasCycle = true;
            return;
        }
        if (visited[course]) return;

        inStack[course] = true;
        visited[course] = true;

        for (let nextCourse of adjList[course]) {
            dfs(nextCourse);
            if (hasCycle) return;
        }

        inStack[course] = false;
        result.push(course);
    };

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            dfs(i);
            if (hasCycle) return [];
        }
    }

    return result.reverse();
}
