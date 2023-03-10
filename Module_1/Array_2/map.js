let numbers = [4, 3, 5, 7, 3, 23, 6, 7];

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] **= 2;
// }
let result = numbers.map(function(value){
    return value ** 3;
})
console.log(result);