let aveScore = 19.8;
if(aveScore < 0 || aveScore > 10){
    console.log("Điểm không hợp lệ!");
}
else{
    if(aveScore >= 9){
        console.log("Xuất sắc")
    }
    else{
        if(aveScore >= 8){
            console.log("Giỏi")
        }
        else{
            if(aveScore >= 7){
                console.log("Khá")
            }
            else{
                if(aveScore >= 5){
                    console.log("Trung bình")
                }
                else{
                    console.log("Yếu")
                }
            }
        }
    }
}