import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 items-start lg:px-6" style={{ borderBottom: "1px solid black" }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className=" avatar">
                            <div className=" w-12 rounded">
                                <img src={logo} />
                            </div>
                        </div>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li>
                            <Link to="portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex px-5">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li>
                            <Link to="portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="hidden md:block lg:block avatar">
                <div className=" w-12 rounded">
                    <img src={logo} />
                </div>
            </div>

            <div className="px-5 navbar-end">
                <button className="lg:btn-wide btn btn-neutral" style={{ backgroundColor: "#1214EB", border: "none", color: "white", borderRadius: "0" }}>CALL TO ACTION?</button>
            </div>
        </div>
    )
}

export default Navbar
