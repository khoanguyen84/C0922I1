// Math.floor(Math.random()*(max - min + 1) + min)
// min = 10;
// max = 50;

let size = 10;
let min = 10;
let max = 50;
let numbers = new Array(size);
for(let i = 0; i < numbers.length; i++){
    numbers[i] = Math.floor(Math.random()*(max - min + 1) + min);
}

console.log(numbers);