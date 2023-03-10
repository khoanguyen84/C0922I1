let name = "Thư";
let gender = false;
let married = false;
// if(gender){
//     console.log(`Mr. ${name}`)
// }
// else{
//     if(married){
//         console.log(`Mrs. ${name}`)
//     }
//     else{
//         console.log(`Ms. ${name}`)
//     }
// }

// gender ? console.log(`Mr. ${name}`) : married ? console.log(`Mrs. ${name}`) : console.log(`Ms. ${name}`)


// console.log(`${gender ? 'Mr' : married ? 'Mrs' : 'Ms'}. ${name}`)

// let aveScore = 6.5;
// console.log(`${ aveScore < 0 || aveScore > 10 ? 'Điểm không hợp lệ' : 
//                             aveScore >= 9 ? 'Xuất sắc' : 
//                                 aveScore >= 8 ? 'Giỏi': 
//                                     aveScore >= 7 ? 'Khá':
//                                         aveScore >= 5 ? 'Trung bình' : 'Yếu'}`)

let a = 5, b = 7, c = 4;

console.log(`Max: ${ a > b ? ( a > c ? a : c) : (b > c ? b : c)}`)