const reverse = function (arr) {
    let arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function (arr) {
    // let arrSorted = [];
    // arr.forEach(item => arrReversed.push(item));
    // arrSorted.sort()
    // return arrSorted;
    return arr.slice().sort()
}

const even = function (arr) {
    // let arrEven = [];
    // arr.forEach(item => arrEven.push(item));
    // arrEven = arrEven.filter(x => x % 2 === 0)
    // return arrEven;
    return arr.slice().filter(x => x % 2 === 0)
}

numbers = [8, 3, 2, 1, 5, 4, 6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
