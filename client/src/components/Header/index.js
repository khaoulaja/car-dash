import React from "react";

function Header() {
  return (
    <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center backdrop-blur-lg bg-indigo-50 z-10">
    <div className="flex items-center">
      {/* <!-- <img src='dist/assets/Logo_black.svg' alt="Logo" className="h-4" /> --> */}
      <h2 className="font-semibold "><a href="/">CarDash</a></h2>
    </div>
    <ul className="font-montserrat items-center hidden md:flex">
      <li className="mx-3 ">
        <a className="growing-underline" href="#">Dashboard</a>
      </li>
      <li className="growing-underline mx-3">
        <a href="#">Maintenance</a>
      </li>
      <li className="growing-underline mx-3">
        <a href="#">My Links</a>
      </li>
    </ul>
    <div className="font-montserrat hidden md:block">
      <button className="mr-6 py-2 px-4 duration-500 hover:text-white hover:bg-indigo-600 hover:rounded-3xl">Login</button>
      <button className="py-2 px-4 duration-500 hover:text-white hover:bg-indigo-600 hover:rounded-3xl">Signup</button>
      {/* <button className="py-2 px-4 text-white bg-black rounded-3xl">Signup</button> */}
    </div>
  </nav>
  );
}

export default Header;
