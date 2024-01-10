import { useState } from "react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const hamburger = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="w-full  flex justify-between px-4 md:px-8 items-center  md:h-20 h-max">
            <div className="flex justify-between w-full">
                <Link to="/">
                    <div className="flex text-3xl font-semibold font-inter">
                        <div className="text-[#FFA500]">SCHEME</div>
                        <div className="text-footer-text2">INSIGHT</div>
                    </div>
                </Link>
                <div >
                <ul className="lg:flex hidden gap-10 text-xl m-2  ">
                    <Link to="/">
                        {" "}
                        <li className="hover:text-custom-text">About</li>
                    </Link>
                    <Link to="/courses">
                        {" "}
                        <li className="cursor-pointer hover:text-customColor">
                            Schemes
                        </li>
                    </Link>
                    <Link to="/companies">
                        <li className="hover:text-customColor">Get in touch</li>
                    </Link>
                </ul>
                </div>
            </div>
            

            <div className="mt-20 lg:hidden">
                <ul
                    className={` lg:hidden ${
                        showMenu ? "flex-col" : "hidden"
                    } flex-col justify-center items-center absolute w-full top-20 right-0 bg-white border-2 border-customColor`}
                >
                    <Link to="/">
                        {" "}
                        <div className="p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor">
                            Home
                        </div>
                    </Link>
                    <div className="p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor">
                        Services
                    </div>
                    <Link to="/companies">
                        <div className="p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor">
                            Companies
                        </div>
                    </Link>
                    <Link to="/jobs">
                        <div className="p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor">
                            Jobs
                        </div>
                    </Link>
                
               
                  </ul>
            </div>

            <div className="lg:hidden" onClick={hamburger}>
                <FaBars />
            </div>
        </div>
    );
}
export default NavBar;
