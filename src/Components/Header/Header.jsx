import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mx-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-base  text-white hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a className="text-base  text-white hover:text-green-400">
                  Recipes
                </a>
              </li>
              <li>
                <a className="text-base  text-white hover:text-green-400">
                  About
                </a>
              </li>
              <li>
                <a className="text-base  text-white hover:text-green-400">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <a className="lg:text-xl text-green-400 ">Healthy Calories</a>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base  text-white hover:text-green-400">Home</a>
            </li>
            <li>
              <a className="text-base  text-white hover:text-green-400">
                Recipes
              </a>
            </li>
            <li>
              <a className="text-base  text-white hover:text-green-400">
                About
              </a>
            </li>
            <li>
              <a className="text-base  text-white hover:text-green-400">
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-success w-full max-w-xs mx-5"
          />
          <a className="btn rounded-full text-green-400">
            <FaUserAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
