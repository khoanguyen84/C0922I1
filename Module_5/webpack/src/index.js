import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';

// tạo component
// function component
// class component

function App(){
    return (
        <div>
            <h1 className="h_1">Learing Webpack</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)