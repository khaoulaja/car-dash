import React from "react";
import pic from '../assets/images/maintenance-guy3.png'
const Home =()=>{
    return (
        // bg-slate-50
        <div className="min-h-screen md:flex bg-hero ">
            <div className="overflow-hidden pt-24 md:pt-44 mx-10 md:ml-20 flex flex-col text-slate-900 items-start md:text-left md:w-1/2 py-10 ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7 capitalize">want to track repairs and services needed for all your cars?</h1>
                <p className="text-xl font-medium text-gray-800">That’s a lot to add to your already busy calendar. 
                <br/>Luckily, there is an easier way to keep track of everything. 
                <br/>
                 <span className="font-bold">Car-Dash</span> will let you do just that and much more. <br/>
                Sign up now for free and keep your vehicle serviced and in tip-top shape!
                </p>
                <a href="/signup" 
                    className="block w-1/2 my-8 py-2 rounded-full text-center font-montserrat text-white font-semibold mb-2 bg-gradient-to-l from-sky-500 to-indigo-600 transition duration-500 hover:shadow-md hover:hue-rotate-30 ">
                        Register now
                </a>
            </div>
            <div className="shrink-0 overflow-hidden md:flex w-full md:w-1/2 i justify-around items-center">
             <img className="h-auto" src={pic}/>
            </div>
        </div>
    )
}

export default Home;