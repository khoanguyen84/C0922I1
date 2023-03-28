import React, { useState } from "react";

function TwoWayBinding() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    const [state, setState] = useState({
        name: "",
        email: ""
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleChange = () => {
        setState({
            ...state,
            name: "CodeGymHue",
            email: "hue@codegym.vn"
        })
    }
    // console.log({
    //     "name": name,
    //     "email": email
    // });
    console.log(state);

    const { name, email } = state;
    return (
        // <div>
        //     <input value={name} type="text" onInput={(e) => setName(e.target.value)}/>
        //     <br/>
        //     <input value={email} type="email" onInput={(e) => setEmail(e.target.value)}/>
        //     <br/>
        //     <button onClick={handleChange}>Change Name</button>
        // </div>
        <div>
            <input value={name} type="text" name="name" onInput={handleInput} />
            <br />
            <input value={email} type="email" name="email" onInput={handleInput} />
            <br />
            <button onClick={handleChange}>Change Name</button>
        </div>
    )
}
export default TwoWayBinding;