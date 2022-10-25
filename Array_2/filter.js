let numbers = [4, 3, 5, 7, 3, 10, 6, 7];

let lessThan5 = numbers.filter(function(value){
    return value >=0 && value < 5;
})

console.log(lessThan5);