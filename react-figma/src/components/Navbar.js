import React from "react";
const svg = "../Images/logo.png.svg";
const Navbar = () => {
  return (
    <>
      <nav>
        <div class="flex flex-col justify-center items-center">
          <div class="container mx-auto my-4 flex justify-between">
            <div class="w-[30%] md:w-[20%] h-12 cursor-pointer">
              <img
                src="../Images/logo.png.svg"
                alt="logo"
                class="w-full h-full"
              />
            </div>
            <div class="hidden w-[40%] lg:flex justify-center items-center">
              <ul class="flex space-x-10 text-[14px] font-normal">
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
              </ul>
            </div>
            <div class="hidden lg:block w-[33%]">
              <button class="w-40 h-12 text-[#0075FF]">Sign In</button>
              <button class="w-40 h-12 text-[#0075FF] bg-[#daebff] rounded-full rounded-tl-none">
                Sign Up
              </button>
            </div>

            <div
              class="lg:hidden text-black text-md"
              id="mobileMenuButton"
              onclick="toggleMobileMenu()"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          id="md-screen"
          class="hidden lg:flex md:space-x-8 text-sm text-white"
        >
          <a href="#"> Home </a>
          <a href="#"> Services </a>
          <a href="#"> About </a>
          <a href="#"> Projects </a>
          <a href="#"> Help </a>
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
