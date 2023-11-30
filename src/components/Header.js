import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const onlineStatus = useOnlineStatus();

    const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
        <div className="header flex justify-between bg-green-100 shadow-lg ">
            <title></title>
            <div  className="logo-conatainer">
                <img className="h-28 p-2 rounded-2xl" src={LOGO_URL} />
            </div>
            <div>
                <ul className="flex flex-wrap py-10 text-lg">
                    <li className="px-2">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-2">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-2">Cart</li>
                    <li>
                    <button className="pr-4 pl-2" onClick={ () => {
                        btnNameReact === "Login" ? setBtnNameReact ("Logout") 
                        : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    </li>
                </ul>
            </div>
        </div> 
         
    )
};






export default Header;