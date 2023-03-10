let students = ["Phước", "Long", "Toàn", "Anh"];
// students.sort().reverse();
// console.log(students);

let numbers = [11, 33, 1, 4, 222, 3]
// function compare(n1, n2){
//     return n1 - n2;
// }
// callback function
// numbers.sort(compare);

// Anomynous function: vô danh
numbers.sort(function(n1, n2){
    return n1 - n2;
})

// n1 > n2 -> n1 - n2 > 0
// n1 = n2 -> n1 - n2 = 0
// n1 < n2 -> n1 - n2 < 0

console.log(numbers);
