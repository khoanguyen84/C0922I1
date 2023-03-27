import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
            <Link to={"/useState"}>UseState </Link>| 
            <Link to={"/useEffect"}> UseEffect</Link>
            <Link to={"/login"}> Login</Link>
        </div>
    )
}
export default Navbar;