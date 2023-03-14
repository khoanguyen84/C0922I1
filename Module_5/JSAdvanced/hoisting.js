// 1. Khai báo biến bằng từ khóa var
// 2. Định nghĩa 1 Declaration Function

// scope (phạm vi)
// 1. Global (Toàn cục/ toàn cầu) -> 
//      -> sẽ được truy cập và sử dụng ở mọi nơi trong file

// 2. Local (Cục bộ)
// 3. Block code (khối lệnh)

// khai báo biến
// 1. từ khóa var 
//  -> phạm vi là global
//  -> Tái sử dụng lại vùng nhớ

// 2. từ khóa let
//  -> phạm vi local
//  -> tạo mới 1 vùng nhớ khi khai báo

// 3. từ khóa const
//  -> chặn việc gán lại (re-assignment)
// var i;
// for(i = 1; i <= 10; i++){
//     console.log(i);
// }

// console.log(`i outside for: ${i}`);
const pi = 3.14;
{
    // console.log(i);
    {
        let i = 5;
        console.log(i);
        {
            {
                let i = 10;
                // pi = 3.15;
                console.log(i);
            }
            i = 100;
            console.log(i);
        }
    }
    // console.log(i);
}