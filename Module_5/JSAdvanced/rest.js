// parameter (tham số) vs argument (đối số)
// function sum() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     console.log(`total: ${total}`);
// }
function sum(msg, ...rest) {
    let total = 0;
    for(let i = 0; i < rest.length; i++){
        total += rest[i]
    }
    console.log(`${msg}:${total}`);
}

sum('Sum', 4, 6, 7, 78, 89, 9, 6, 54, 3, 3, 3, 5)
sum('Total', 4, 6, 7, 78, 89, 9, 6, 54, 3, 3, 3, 5)
sum('Tổng cộng', 4, 6, 7, 78, 89, 9, 6, 54, 3, 3, 3, 5)
sum(4, 6, 7, 78, 89, 9, 6, 54, 3, 3, 3, 5)