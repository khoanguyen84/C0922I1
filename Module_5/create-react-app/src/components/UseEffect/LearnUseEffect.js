import React, { useState } from "react";
import Content from "./Content";

// side effect
// mounted vs unmouted
// useEffect(callback, [dependencies])
// TH1 : useEffect(callback)
//      callback sẽ được thực thi khi state thay đổi
// TH2 : useEffect(callback, [])
//      callback sẽ được thực thi 1 lần duy nhất khi component được mounted vào DOM
// TH3 : useEffect(callback, [dependencies])
//      callback sẽ được thực thi khi [dependencies] thay đổi

// Qui tắc chung:
// 1. Khi component được mouted vào DOM thì callback sẽ được thực thi
// 2. Khi component được unmouted khỏi DOM thì cleanup function (được return trong callback) sẽ được thực thi
// 3. UI được render trước, rồi mới thực hiện callback

function LearnUseEffect() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <h1>Learing UseEffect</h1>
            <button onClick={() => setToggle(!toggle)}>Toggle Child Component</button>
            {toggle && <Content />}
        </>
    )
}

export default LearnUseEffect;