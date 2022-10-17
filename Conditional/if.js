// aveScore; [1, 10]
// [9,10]: xuất sắc
// [8, 9): Giỏi
// [7, 8): khá
// [5, 7): TB
// [0, 5): Yếu
// (-, 0) && (10, +): ko hợp lệ
let aveScore = 9.8;
if( aveScore < 0 || aveScore > 10){
    console.log('Điểm không hợp lệ');
}
if(aveScore >= 9 && aveScore <= 10){
    console.log("Xuất sắc");
}
if(aveScore >= 8 && aveScore < 9){
    console.log("Giỏi");
}
if(aveScore >= 7 && aveScore < 8){
    console.log("Khá");
}
if(aveScore >= 5 && aveScore < 7){
    console.log("Trung bình");
}
if(aveScore >= 0 && aveScore < 5){
    console.log("Yếu");
}