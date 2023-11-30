import React from "react";
import { TWT_LOGO, INTGM_LOGO, GTB_LOGO, YTB_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <div className="flex flex-wrap h-26 justify-between bg-green-100 m-1">
            <div className="h-32">
                <Link to="https://www.instagram.com/swiggyindia/">
                    <img className=" w-10 h-10 m-8 mb-1" src={INTGM_LOGO} alt="Instagram"/>
                    <h4 className="pl-4 pb-0">Instagram</h4>
                </Link>
            </div>
            <div>
            <ul className="flex flex-wrap">
                    <li className="py-12 hover:cursor-pointer">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className="py-12 px-8 hover:cursor-pointer">
                        <Link to="/privacypolicy">
                            Privacy Policy
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;