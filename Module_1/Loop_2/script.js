// từ 2 - 9
// mỗi giá trị : 1 - 10

let trs = "";
for(let i = 1; i <=9 ; i++){
    trs += "<tr>";
    for(let j = 2; j < 10; j++){
        trs += `<td>${j} x ${i} = ${i * j}</td> `
    }
    trs += "</tr>";
}
document.querySelector('#multiplication>table>tbody').innerHTML = trs;