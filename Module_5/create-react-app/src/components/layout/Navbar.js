import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
            <Link to={"/useState"}>UseState </Link>| 
            <Link to={"/useEffect"}> UseEffect</Link>
            <Link to={"/login"}> Login</Link>
            <Link to={"/two-way-binding"}> Two Way Binding</Link>
            <Link to={"/staff-app"}> Staff App</Link>
            <Link to={"/staff-app-api"}> Staff App API</Link>
            <Link to={"/bill"}> Bill</Link>
        </div>
    )
}
export default Navbar;