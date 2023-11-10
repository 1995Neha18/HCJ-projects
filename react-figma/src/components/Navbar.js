import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="flex flex-col justify-center items-center">
          <div className="container mx-auto my-4 flex justify-between">
            <div className="w-[30%] md:w-[20%] h-12 cursor-pointer">
              <img src={"/images/logo.png.png"} alt="logo" />
            </div>
            <div className="hidden w-[40%] lg:flex justify-center items-center">
              <ul className="flex space-x-10 text-[14px] font-normal">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/project">Project</Link>
                </li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block w-[33%]">
              <button className="w-40 h-12 text-[#0075FF]">Sign In</button>
              <Button
                backgroundColor="bg-[#daebff]"
                text={"Sign Up"}
                textColor="text-[#0075FF]"
                width="w-40"
              />
            </div>

            {/* Hamburger icon */}
            <div
              className="lg:hidden text-black text-md"
              id="mobileMenuButton"
              onClick={toggleMobileMenu}
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Option menu for medium and small screens */}
        <div
          id="md-screen"
          className="hidden lg:flex md:space-x-8 text-sm text-white"
        >
          <a href="https://"> Home </a>
          <a href="https://"> Services </a>
          <a href="https://"> About </a>
          <a href="https://"> Projects </a>
          <a href="https://"> Help </a>
          <a href="https://">Sign In</a>
          <a href="https://">Sign Up</a>
        </div>
      </nav>

      {/* Hamburger option menu for small & mediuem screen */}
      {isMobileMenuOpen && (
        <div
          id="mobileMenu"
          className="lg:hidden h-[320px] pl-10 py-4 bg-backgDblue text-black text-left font-medium text-xl rounded-sm"
        >
          <ul className="space-y-4">
            <li>
              <a href="https://">Home</a>
            </li>
            <li>
              <a href="https://">Services</a>
            </li>
            <li>
              <a href="https://">About</a>
            </li>
            <li>
              <a href="https://">Project</a>
            </li>
            <li>
              <a href="https://">Help</a>
            </li>
            <li>
              <a href="https://">Sign In</a>
            </li>
            <li>
              <a href="https://">Sign Up</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
