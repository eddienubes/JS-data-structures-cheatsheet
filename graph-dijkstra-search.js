const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

const findLowerCostNode = (costs, visited) => {
    let lowestNode;
    let lowerCost = Infinity;

    // find the lowest const node in the costs object
    Object.keys(costs).forEach(node => {
        const cost = costs[node];

        if (cost < lowerCost && !visited.includes(node)) {
            lowestNode = node;
            lowerCost = cost;
        }
    });

    return lowestNode;
}

const determinePath = (predecessors, start, end, path) => {
    path.push(end);

    if (predecessors[end] === start) {
        path.push(start);
        return path;
    }

    return determinePath(predecessors, start, predecessors[end], path);
}

const dijkstraSearch = (graph, start, end) => {
    const costs = {};
    const visited = [];
    const predecessors = {};
    const path = [];

    Object.keys(graph).forEach(node => {
        costs[node] = Infinity;
    });

    costs[start] = 0;

    for (let count = 0; count < Object.keys(graph).length - 1; ++count) {
        const currentMinNode = findLowerCostNode(costs, visited)

        visited.push(currentMinNode);

        for (const [neighbor, fromMinToNeighbor] of Object.entries(graph[currentMinNode])) {
            const fromSrcToNeighbor = costs[currentMinNode] + fromMinToNeighbor;

            if (
                fromSrcToNeighbor < costs[neighbor] &&
                !visited.includes(neighbor)
            ) {
                costs[neighbor] = fromSrcToNeighbor;
                predecessors[neighbor] = currentMinNode;
            }

            if (neighbor === end) {
                return [costs, determinePath(predecessors, start, end, path)];
            }
        }
    }
    return [costs, determinePath(predecessors, start, end, path)];
}

console.log(dijkstraSearch(graph, 'a', 'g'));