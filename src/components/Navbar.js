import React from "react";
import {Link} from "react-router-dom";

const Navbar = ()=>{
    return(
        <header className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <ul className="flex">
                <li className="mr-6">
                    <Link to="/" className="text-white hover:underline p-2">JT</Link>
                </li>
                <li className="mr-6">
                    <Link to="/projects" className="text-white hover:underline p-2">Projects</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;