import React from "react";
import pic from '../assets/images/maintenance-guy3.png'
const Home =()=>{
    return (
        // bg-slate-50
        <div className="min-h-screen md:flex bg-hero ">
            <div className="overflow-hidden mt-32 mx-10 md:ml-20 flex flex-col text-center text-slate-900 items-start md:text-left md:w-1/2 py-10 ">
                <h1 className="text-2xl md:text-5xl font-bold mb-7"> Track repairs and services needed for all your cars</h1>
                <p className="text-xl font-medium text-gray-800">That’s a lot to add to your already busy calendar. 
                <br/>Luckily, there is an easier way to keep track of everything</p>
                <button>Resister now</button>
            </div>
            <div className="shrink-0 overflow-hidden md:flex w-1/2 i justify-around items-center">
             <img className="h-auto" src={pic}/>
            </div>
        </div>
    )
}

export default Home;