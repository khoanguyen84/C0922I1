let numbers = [3,5,3,2,5,67,8,89,9,90,43]
let value = 15;
let position = -1;
for(let i = 0 ; i<numbers.length;i++){
    if(numbers[i] === value){
        position = i;
        break;
    }
}

console.log(`${value} ${position != -1 ?  ' có ' : ' không có'} xuất hiện trong mãng`)