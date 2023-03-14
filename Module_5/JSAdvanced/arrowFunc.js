// 1. Declaration Function
function sum(n1, n2) {
    console.log(n1 + n2);
}
sum(10, 20);
// 2. Expression Function
// const times = function (n1, n2) {
//     console.log(n1 * n2);
// }
// const times = (n1, n2) => console.log(n1 * n2);

// times(5, 10)
// const writeLog = function(msg){
//     console.log(`[Info] ${msg}`);
// }
const writeLog = (msg) => console.log(`[Info] ${msg}`);
// const writeLog = msg => console.log(`[Info] ${msg}`);

// writeLog("Student created success")

// const slogen = function(){
//     return 'still breath still alive';
// }
const slogen = () => 'still breath still alive';


console.log(slogen());


// 3. Anonymous/Callback Function
let numbers = [4, 6, 4, 3, 5, 7];

let result = numbers.reduce(function (total, value) {
    return total + value
})
console.log(result);
// console.log(process(1,2));
// 4. Định nghĩa class
// function MyMath() {
//     // 5. Định nghĩa method trong class
//     this.getArea = function (r) {
//         return Math.PI * r ** 2;
//     }
// }
class MyMath {
    // 5. Định nghĩa method trong class
    getArea(r) {
        return Math.PI * r ** 2;
    }
}


let myMath = new MyMath();
console.log(myMath.getArea(10));
