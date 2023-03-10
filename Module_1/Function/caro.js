let caro = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
let caro_2 = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

const x = 1;
const o = 10;
const player_1 = 1;
const player_2 = 10;
var player = player_1;


function renderCaroTable(data) {
    let tbCaro = "";
    for (let i = 0; i < data.length; i++) {
        tbCaro += "<tr>";
        for (let j = 0; j < data[i].length; j++) {
            tbCaro += `<td onclick='play(${i}, ${j})'>${data[i][j] == x ? 'X' : data[i][j] == o ? 'O' : '&nbsp;&nbsp;'}</td>`;
        }
        tbCaro += "</tr>";
    }
    document.querySelector('#tbCaro').innerHTML = tbCaro;
    // return tbCaro;
}

function play(i, j) {
    if (caro_2[i][j] != 0) {
        alert('invalid position!');
        return;
    }
    if (player === player_1) {
        caro_2[i][j] = x;
        player = player_2;
    }
    else {
        caro_2[i][j] = o;
        player = player_1;
    }
    renderCaroTable(caro_2);
    // document.querySelector('#tbCaro').innerHTML = renderCaroTable(caro_2);
}


renderCaroTable(caro_2);


// thiết kế 1 hàm tên là createArray, tạo ra 1 mảng 1 chiều có kích cỡ là 10 phần từ
// và các giá trị được sinh ngẫu nhiên trong khoảng [10, 50];
// hiển thị mảng này ra console