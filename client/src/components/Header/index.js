import React from "react";
import logo from '../../assets/images/cardash2.gif'
function Header() {
return (

<nav className="flex content-center justify-between flex-wrap bg-slate-900 py-5 lg:px-40 md:px-12 w-full z-10 top-0">

    <div className="flex items-center flex-shrink-0">
        <a href="/">
            <img src={logo} alt="Logo" className="h-12" />
        </a>
    {/* <h2 className="font-semibold "><a href="/">CarDash</a></h2> */}
    </div>
    <div className="block lg:hidden">
        <button id="nav-toggle" 
        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 duration-500 hover:text-gray-400 hover:border-gray-400"
        onClick={()=>{
			document.getElementById("nav-content").classList.toggle("hidden");
		}}
        >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div className=" flex w-full justify-between flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
         <ul className="font-montserrat lg:mx-auto items-center md:flex">
            <li className="mx-3 text-slate-300 font-medium">
                <a className="growing-underline" href="#">Dashboard</a>
            </li>
            <li className="growing-underline text-slate-300 font-medium mx-3">
                <a className="" href="#">Maintenance</a>
            </li>
            <li className="growing-underline text-slate-300 font-medium mx-3">
                <a href="#">Add Car</a>
            </li>
        </ul>

    <div className="font-montserrat items-center md:flex self-center">
        <button className="mr-5 py-2 px-4 text-indigo-400 border border-indigo-400 rounded-full duration-500 hover:text-slate-300 hover:bg-indigo-600 hover:border-indigo-600">Login</button>
        <button className="py-2 px-4 text-indigo-400 border border-indigo-400 rounded-full duration-500 hover:text-slate-300 hover:bg-indigo-600 hover:border-indigo-600">Signup</button>
   </div>
    </div>   

</nav>
)
}

export default Header;
