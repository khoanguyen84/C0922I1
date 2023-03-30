import React, {useState} from "react";

let amounts = [500, 650, 340, 250, 243];
// let totalAmount = amounts.reduce((prev, curValue) => prev + curValue);
function Bill() {
    const [total, setTotal] = useState(() => {
        let totalAmount = amounts.reduce((prev, curValue) => prev + curValue);
        console.log(totalAmount);
        return totalAmount;
    });
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <h1>Total Amount : {total}</h1> 
            <input type="number" name="amount" onInput={(e) => setAmount(Number(e.target.value))} />
            <br/>
            <button onClick={() => setTotal(total + amount)}>Total Amount</button>
        </div>
    )
}
export default Bill;