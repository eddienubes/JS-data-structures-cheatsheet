// Breath-first search graph

const graph = {};

graph.a = ['b', 'c', 'd'];
graph.b = ['m', 'e'];
graph.c = ['e'];
graph.d = ['f', 'e'];
graph.e = ['d', 'c'];
graph.f = ['g', 'k', 'i'];
graph.g = ['h'];
graph.h = ['m', 'a'];
graph.m = ['b', 'i'];
graph.l = ['i', 'e'];
graph.k = ['i'];
graph.i = [];

let count = 0;

const determineShortestPath = (predecessors, start, end, path) => {
    path.push(end);
    if (predecessors[end] === start) {
        path.push(start);
        return [path, true];
    }

    return determineShortestPath(predecessors, start, predecessors[end], path);
}

const breadthFirstSearch = (graph, start, end) => {
    const predecessors = {
        ...graph
    };

    for (const key of Object.keys(predecessors)) {
        predecessors[key] = null;
    }
    const path = [];


    let queue = [];
    queue.push(start);
    while (queue.length > 0) {

        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        console.log(current);

        if (graph[current].includes(end)) {
            predecessors[end] = current;
            return determineShortestPath(predecessors, start, end, path);
        } else {
            graph[current].forEach(node => {
                if (!predecessors[node]) {
                    queue.push(node);
                }

                predecessors[node] = current;
            });

            // queue.push(...graph[current]);
            //
            // graph[current].forEach(node => {
            //     predecessors[node] = current;
            // });
        }
    }

    return [[], false];
}

console.log(breadthFirstSearch(graph, 'a', 'i'));
console.log(count);






