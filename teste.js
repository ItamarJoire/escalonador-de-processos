const names = [
    [0, 1],
    [8, 9],
    [1, 9], 
    [7, 6],
    [2, 1], 
]

const numbers = [9, 4, 10, 4, 1, 3]

names.sort(compareFunction);
numbers.sort(compareFunction);

function compareFunction(a, b){
    return a - b;
}

console.log(numbers);
console.log(names);
