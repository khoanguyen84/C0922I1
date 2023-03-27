import React, { useState } from "react";
// useState: quản lý/theo dõi trạng thái của dữ liệu
// const [state, setState] = useState(initialState)
// + initialState: + trạng thái khởi tạo và lần đầu tiên state = initialState
//                 + các kiểu dữ liệu nguyên thủy: number, string, boolean, null,...
//                 + mảng, object
//                 + function
// + setState: phương thức/hàm 
//              -> cập nhật/thay đổi giá trị của state
//              -> có 2 cách 2 sử dụng: thay đổi trực tiếp và dùng callback
// Cơ chế hoạt động
// + mỗi khi state thay đổi thì component sẽ được re-render
// + nếu có nhiều state thay đổi cùng 1 lúc trong 1 hàm thì component chỉ re-render 1 lần

function LearnUseState() {
    const [count, setCount] = useState(0);
    console.log('re-render');
    const handleIncreament = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount((prev) => prev + 1);
        // setCount((prev) => prev + 1);
        // setCount((prev) => prev + 1);
        setCount((prev) => {
            if(prev % 5 == 0){
                return prev + 3;
            }
            return prev + 1;
        })
    }
    return (
        <div style={{ marginLeft: "50px" }}>
            <h1>{count}</h1>
            <button onClick={handleIncreament}>Increament</button>
        </div>
    )
}

export default LearnUseState;