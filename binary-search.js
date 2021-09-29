const array = [1, 2, 3, 4, 5, 10, 123, 125, 5001];
let count = 0;

// works only with sorted arrays
// O(log2n)
const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;
    let middleIndex;
    let resultPosition = -1;

    while (start <= end) {
        count += 1;

        middleIndex = Math.floor((start + end) / 2);

        if (array[middleIndex] === item) {
            resultPosition = middleIndex;
            return resultPosition;
        }

        if (item < array[middleIndex]) {
            end = middleIndex - 1;
        } else {
            start = middleIndex + 1;
        }

    }

    return resultPosition;
}

const recursiveBinarySearch = (array, item, start, end) => {
    count += 1;

    const middle = Math.floor((start + end) / 2);

    if (item === array[middle]) {
        return middle;
    }

    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(array, 5001, 0, array.length));
console.log(count);