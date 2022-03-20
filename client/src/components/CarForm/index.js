import React from "react";

const CarForm =()=>{
    return (
        <div className=" bg-hero p-10 md:p-20">
        <div className="flex flex-col lg:flex-row lg:flex justify-center p-10 rounded-lg">
            <form className="bg-white w-full md-:w-2/3 xl:w-1/2 p-6 rounded-lg drop-shadow-xl mt-auto mx-auto md:mx-4">
            <h1 className="text-slate-800 font-bold text-2xl mb-10">Enter Your Car Info!</h1>
            <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                <input type="text" name="carname" placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent" />
                <label htmlFor="carname" className="text-slate-500 absolute  bottom-2 -z-1 duration-700">Car Name <span className="text-rose-600">*</span></label>
            </div>
            <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                <input type="text" name="make" placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent" />
                <label htmlFor="make" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Make <span className="text-rose-600">*</span></label>
            </div>
            <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                <input type="text" name="model" placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent" />
                <label htmlFor="model" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Model <span className="text-rose-600">*</span></label>
            </div>
            <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                <input type="text" name="year" placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent" />
                <label htmlFor="year" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Year <span className="text-rose-600">*</span></label>
            </div>
            <div className="relative border-b-2 my-10  focus-within:border-indigo-600">
                <input type="text" name="color" placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent" />
                <label htmlFor="color" className="text-slate-500 absolute bottom-2 -z-1 duration-700">Color <span className="text-rose-600">*</span></label>
            </div>
            <div className=" border-2 my-10 p-4 rounded focus-within:border-indigo-600">
            <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input type="file" className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-600
                hover:file:bg-indigo-100
                hover:file:cursor-pointer
                "/>
            </label>
                
            </div>
            <div className="my-6 self-end">
                <button className="py-2 px-6 float-left text-center bg-slate-200 text-slate-500 rounded-full duration-700 hover:text-slate-600 hover:bg-slate-300">Cancel</button>
                <button type="submit" 
                className="py-2 px-6 float-right text-center text-slate-300 rounded-full duration-700 bg-indigo-500 hover:bg-indigo-600"
                >submit</button>
            </div>
            </form>
        </div>
    </div>
    )

}

export default CarForm;