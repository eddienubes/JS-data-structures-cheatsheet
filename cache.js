const cacheFunction = (cb) => {
    const cache = {};

    return (n) => {
        if (cache[n]) {
            console.log('From cache!');
            return cache[n];
        }

        const result = cb(n);
        cache[n] = result;
        console.log('Calculated');

        return result;
    }
}

const factorial = (n) => {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cachedFactorialFunction = cacheFunction(factorial);

console.log(cachedFactorialFunction(5));
console.log(cachedFactorialFunction(5));
console.log(cachedFactorialFunction(5));
console.log(cachedFactorialFunction(6));
console.log(cachedFactorialFunction(6));