import React from "react";
import img404 from '../assets/images/404.png'

const NoMatch = ()=>{
    return (
        <div className="mx-auto w-full px-8 py-4 md:py-8 h-[85vh] flex items-center justify-center bg-hero">
            <div className="m-auto max-w-2xl">
                <div className="px-4 text-center flex flex-col justify-center items-center">
                    <div className=" mb-8">
                        <img src={img404} className=" h-44 md:h-60"/>
                    </div>
                    <div className="mb-5 capitalize text-slate-500 font-montserrat font-semibold text-lg md:text-xl">
                        Oops!  The page you're looking for doesn't exist
                    </div>
                    <div className="my-4">
                        <a href="/" className="py-2 px-6 float-right text-center text-slate-300 rounded-full duration-700 bg-indigo-500 hover:bg-indigo-600">Back To Home</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default NoMatch;