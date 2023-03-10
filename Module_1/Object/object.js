// let variable_name = {
//     //properties (thuộc tính)
//     property_1: value_1,
//     property_2: value_2,
//     property_3: value_3,
//     ...

//     //methods (phương thức)
//     method_1 = function(){
//         return ...
//     },
//     method_2 = function(){
//         return ...
//     },
// }

// context ~ this //ngữ cảnh

let huy = {
    id: 1000,
    fullname: "Huy Nguyễn",
    age : 18,
    gender: true,
    hobbies: ["Đọc sách", "Xem phim", "Nghe nhạc"],

    greeting: function(){
        return `Hello, My name is ${this.fullname}, ${this.age} year olds`
    }
}
let toan = {
    id: 1000,
    fullname: "Toàn Trương",
    age : 18,
    gender: true,
    hobbies: ["Đọc sách", "Xem phim", "Nghe nhạc"],

    greeting: function(){
        return `Hello, My name is ${this.fullname}, ${this.age} year olds`
    }
}

// console.log(huy["hobbies"])

// console.log(huy.fullname);

// console.log(`Hello, My name is ${huy.fullname}, ${huy.age} year olds`);
console.log(huy.greeting());
console.log(toan.greeting());