// pass-by-value: tham trị => các kiểu dữ liệu nguyên thủy number, boolean, string
// pass-by-reference: tham chiếu => array, object, function

let numbers_1 = [1, 2, 3, 4, 5];
// let numbers_2 = numbers_1;
let numbers_2 = [...numbers_1, 7]
numbers_2[4] = 6;
console.log(numbers_1);
console.log(numbers_2);

let khoa = {
    name: "Khoa",
    age: 18,
    gender: true,
    language : {
        name: "English",
        level: "B1"
    }
}

// let huy = khoa;

// let huy = { ...khoa }
// huy.name = "Huy";
// let huy = {
//     ...khoa,
//     name: 'Huy',
//     email: "huy@gmail.com"
// }

// huy.language.level = "B2";

let huy = JSON.parse(JSON.stringify(khoa))

huy.language.level = "B2";
console.log(khoa);
console.log(huy);