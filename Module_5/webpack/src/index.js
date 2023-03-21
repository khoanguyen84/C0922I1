import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
// tạo component
// function component
// class component

// function App(){
//     return (
//         <div>
//             <h1 className="h_1">Learing Webpack</h1>
//         </div>
//     )
// }


// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1 className="h_1">Learing Webpack</h1>
//             </div>
//         )
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)