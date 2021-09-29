const array = [12, -1, 123, 2345, 4, 56, 456, 456, 456, 456, -345, 1023123, 1, 0, 19294, 2, 3, 5];
let count = 0;


const quickSort = (array) => {
    if (array.length <= 1) return array;

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];

    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        count += 1;

        if (i === pivotIndex)
            continue;

        if (array[i] > pivot) {
            greater.push(array[i]);
        } else {
            less.push(array[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));
console.log(count);
