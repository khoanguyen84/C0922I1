import React from "react";
import flower from '../asset/images/flower.jpg';
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

// function App(){
//     return (
//         <div className="container">
//             <h1 className="display-3 bg-primary text-white">
//                 <i className="fa fa-home text-warning"></i>
//                 Learing Webpack Component
//             </h1>
//             <img src={flower} alt="" />
//             <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/644.jpg" alt="" />
//         </div>
//     )
// }

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App;