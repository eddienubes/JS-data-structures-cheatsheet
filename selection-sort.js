const array = [12, -1, 123, 2345, 4, 56, 456, 456, 456, 456, -345, 1023123, 1, 0, 19294, 2, 3, 5];
let count = 0;

// O(n * n) (human sort)
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                indexMin = j;
            }
            count += 1;
        }

        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

console.log(selectionSort(array));
console.log(array.length);
console.log(count);