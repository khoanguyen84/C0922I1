let numbers = [5, 7, 3, 4, 6, 8, 89, 9];

// console.log(numbers[3]);
// numbers[3] = 10;
// console.log(numbers);


// for(let index = 0; i < numbers.length; index++){
//     console.log(numbers[index]);
// }

// let i = 0;
// while(i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// let i = 0;
// do{
//     console.log(numbers[i]);
//     i++
// }
// while(i < numbers.length)

// for..in: đi qua index và lấy value
// for(let index in numbers){
//     console.log(numbers[index]);
// }
// for..of: lấy value không đi qua index
// for(let number of numbers){
//     console.log(`number: ${number}`);
// }

let products = ["iPhone 6", "iPhone X", "iPhone 14"];

for(let index in products){
    console.log(index);
}

for(let product of products){
    console.log(product);
}