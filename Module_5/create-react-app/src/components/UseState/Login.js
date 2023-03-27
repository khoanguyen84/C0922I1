import React, { useState } from "react";

// One-way binding

// function Login(){
//     const handleLogin = () => {
//         let email = document.querySelector('#email').value;
//         let password = document.querySelector('#password').value;
//         console.log({
//             email: email,
//             password: password
//         });
//     }
//     return (
//         <div>
//             <div>
//                 <label style={{width: "100px", display: "inline-block"}}>Email</label>
//                 <input type="text" id="email"/>
//             </div>
//             <div>
//                 <label style={{width: "100px", display: "inline-block"}}>Password</label>
//                 <input type="password" id="password"/>
//             </div>
//             <div>
//                 <button onClick={handleLogin}>Login</button>
//             </div>
//         </div>
//     )
// }

// function Login() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const handleLogin = () => {
//         console.log({
//             email: email,
//             password: password
//         });
//     }
//     console.log(
//         {
//             email: email,
//             password: password
//         }
//     );
//     return (
//         <div>
//             <div>
//                 <label style={{ width: "100px", display: "inline-block" }}>Email</label>
//                 <input type="text" onInput={(e) => setEmail(e.target.value)} />
//             </div>
//             <div>
//                 <label style={{ width: "100px", display: "inline-block" }}>Password</label>
//                 <input type="password" onInput={(e) => setPassword(e.target.value)} />
//             </div>
//             <div>
//                 <button onClick={handleLogin}>Login</button>
//             </div>
//         </div>
//     )
// }


function Login() {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleInputData = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleLogin = () => {
        console.log(state);
    }
    
    return (
        <div>
            <div>
                <label style={{ width: "100px", display: "inline-block" }}>Email</label>
                <input type="text" name="email" onInput={handleInputData} />
            </div>
            <div>
                <label style={{ width: "100px", display: "inline-block" }}>Password</label>
                <input type="password" name="password" onInput={handleInputData} />
            </div>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
export default Login;