const factorial = (n) => {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}

// n - serial number in sequence to calculate
const fibonacci = (n) => {
    if (n === 1) return 0;
    if (n === 2 || n === 3) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(factorial(5));
console.log(fibonacci(7));