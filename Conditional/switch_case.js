let aveScore = 9.8;
switch (true) {
    case aveScore >= 9 && aveScore <= 10: {
        console.log("Xuất sắc");
        break;
    }
    case aveScore >=8 && aveScore < 9:{
        console.log("Giỏi");
        break;
    }
    case aveScore >=7 && aveScore < 8:{
        console.log("Khá");
        break;
    }
    case aveScore >=5 && aveScore < 7:{
        console.log("Trung bình");
        break;
    }
    case aveScore >=0 && aveScore < 5:{
        console.log("Yếu");
        break;
    }
    default: {
        console.log("Điểm không hợp lệ");
        break;
    }
}