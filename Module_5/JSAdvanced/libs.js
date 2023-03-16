function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total;
}

export function power(x, n) {
    return x ** n;
}

// export function times(...rest){
//     let total = 1;
//         for(let i = 0; i < rest.length; i++){
//             total *= rest[i]
//         }
//         return total;
// }

let math = {
    times: function (...rest) {
        let total = 1;
        for (let i = 0; i < rest.length; i++) {
            total *= rest[i]
        }
        return total;
    },
    sum: function(...rest){
        let total = 0;
        for (let i = 0; i < rest.length; i++) {
            total += rest[i]
        }
        return total;
    }
};
// export default sum;
export default math;