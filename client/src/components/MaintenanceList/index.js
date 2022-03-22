import React from "react";

const MaintenanceList=()=>{
    return (
        <div>
             <h2 className="font-bold text-slate-600 text-2xl md:text-3xl mb-6 mt-8 lg:mt-auto">Maintenance Due:</h2>
            <ul className="flex flex-wrap">
                <li className="border-2 border-amber-500 m-1.5 rounded-lg w-80 mr-8 ">
                <div className="flex justify-between p-2 text-center text-amber-500 font-montserrat font-semibold capitalize">
                            car wash 
                    <a className="cursor-pointer"> 
                    <svg className="h-5 w-5 ml-2 text-slate-500 hover:text-amber-600 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    </a>
                    </div>
                </li>                         
            </ul>
        </div>
    )
}

export default MaintenanceList;