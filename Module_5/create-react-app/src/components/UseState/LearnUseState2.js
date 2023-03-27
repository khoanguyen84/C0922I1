import React, { useState } from "react";
import { gifts } from './Data.js';
function LearnUseState2() {
    const [gift, setGift] = useState("");
    const handleGetGift = () => {
        let rnd = Math.floor(Math.random() * gifts.length);
        setGift(gifts[rnd]);
    }
    return (
        <div style={{ marginLeft: "50px" }}>
            <h1>{gift || "Click on button bellow to get gift"}</h1>
            <button onClick={handleGetGift}>Get Gift</button>
        </div>
    )
}

export default LearnUseState2;