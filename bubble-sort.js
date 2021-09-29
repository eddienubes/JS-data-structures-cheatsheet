const array = [12, -1, 123, 2345, 4, 56, 456, 456, 456, 456, -345, 1023123, 1, 0, 19294, 2, 3, 5];
let count = 0;

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] > array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }

    return array;
}

console.log(bubbleSort(array));
console.log(count);
