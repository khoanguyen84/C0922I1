// strict mode (chế độ nghiêm ngặt)
// có 2 vị trí đặt
// 1. trên cùng của file
// 2. trên cùng của thân hàm
// 'use strict';
for(let i = 1; i <= 10; i++){
    console.log(i);
}

function print(){
    'use strict';
    for(i = 1; i <= 10; i++){
        console.log(i);
    }
}

print();