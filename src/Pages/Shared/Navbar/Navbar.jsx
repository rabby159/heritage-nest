/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/heritageLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink1 = (
    <>
      <li>
        <Link to='/buyer'>Buy</Link>
      </li>
      <li>
        <a>Sell</a>
      </li>
      <li>
        <a>Services</a>
      </li>
    </>
  );

  const navLink2 = (
    <>
      <li>
        <a>Manage Rentals</a>
      </li>
      <li>
        <a>Sign In</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#ECF5FF] md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink1}
            {navLink2}
          </ul>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {navLink1}
          </ul>
        </div>
      </div>
      <div className="navbar-center w-12 h-20">
        <Link to='/'><img src={logo} alt="heritage-Logo" /></Link>
      </div>
      <div className=" menu menu-horizontal navbar-end hidden lg:flex">
        {navLink2}
      </div>
    </div>
  );
};

export default Navbar;
