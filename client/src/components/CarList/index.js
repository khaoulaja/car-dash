import React from "react";
import carPic from '../../assets/images/front-wheel.jpg'
import MaintenanceList from "../MaintenanceList";

const CarList = ({cars})=>{
    if(!cars.length){
        return (
            <h3>No cars yet</h3>
        )
    }
return(
    // <div className=" bg-hero p-10 md:p-20">
    <>
        {cars &&
        cars.map(car =>(
         <div className="bg-slate-50 p-4 rounded-lg mb-6" key={car._id}>
            <div className="flex flex-col lg:flex-row lg:flex justify-center bg-slate-50 p-10" key={car._id}>
                <div className=" overflow-hidden lg:flex flex-wrap w-full lg:w-1/2 justify-around items-center">
                    <img className="h-auto max-h-[500px] object-cover rounded-md" src={carPic}/>
                </div>
                <div className="overflow-hidden w-full lg:w-1/2  lg:ml-20 flex flex-col text-slate-900 items-start md:text-left  ">                
                    <h2 className="font-bold text-slate-900 text-2xl md:text-4xl mb-8 mt-8 lg:mt-auto">Car Information</h2>
                    <ul className="w-full">
                        <li className="flex items-center justify-between py-3 px-2 border-slate-200 border-y-2 text-slate-500">
                            <div className="flex items-center py-2 px-3">
                                <svg className="h-5 w-5 text-indigo-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <circle cx="12" cy="13" r="2" />  
                                <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  
                                <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                                <p className="pl-2 outline-none border-none">Car Name</p>
                            </div>
                            <div className="capitalize">{car.name}</div>
                            
                        </li>
                        <li className="flex items-center justify-between py-3 px-2 border-slate-200 border-b-2 text-slate-500">
                            <div className="flex items-center py-2 px-3">
                                <svg className="h-5 w-5 text-indigo-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <circle cx="12" cy="13" r="2" />  
                                <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  
                                <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                                <p className="pl-2 outline-none border-none">Make</p>
                            </div>
                            <div className="capitalize">{car.make}</div>
                            
                        </li>
                        <li className="flex items-center justify-between py-3 px-2 border-slate-200 border-b-2 text-slate-500">
                            <div className="flex items-center py-2 px-3">
                                <svg className="h-5 w-5 text-indigo-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <circle cx="12" cy="13" r="2" />  
                                <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  
                                <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                                <p className="pl-2 outline-none border-none">Model</p>
                            </div>
                            <div className="capitalize">{car.model}</div>
                            
                        </li>
                        <li className="flex items-center justify-between py-3 px-2 border-slate-200 border-b-2 text-slate-500">
                            <div className="flex items-center py-2 px-3">
                                <svg className="h-5 w-5 text-indigo-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <circle cx="12" cy="13" r="2" />  
                                <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  
                                <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                                <p className="pl-2 outline-none border-none">Year</p>
                            </div>
                            <div className="capitalize">{car.year}</div>
                            
                        </li>
                        <li className="flex items-center justify-between py-3 px-2 border-slate-200 border-b-2 text-slate-500">
                            <div className="flex items-center py-2 px-3">
                                <svg className="h-5 w-5 text-indigo-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <circle cx="12" cy="13" r="2" />  
                                <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  
                                <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                                <p className="pl-2 outline-none border-none">Color</p>
                            </div>
                            <div className="capitalize">{car.color}</div>
                            
                        </li>
                    </ul>
                    <div className="my-6 self-end">
                        <a href="/edit-car" 
                        className="flex items-center py-2 px-6 ml-4 float-right text-center text-rose-400 border border-rose-400 rounded-full duration-700 hover:text-slate-300 hover:bg-rose-600 hover:border-rose-600">
                            <svg className="h-5 w-5 mr-2 text-rose-400 duration-700"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
                            <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                            Delete Car 
                            </a>
                        <a href="/maintenance" 
                        className="flex items-center py-2 px-6 float-right text-center text-slate-300 bg-indigo-500 rounded-full duration-700  hover:bg-indigo-600 ">
                            <svg className="h-5 w-5 mr-2 text-slate-300 duration-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  
                            <line x1="12" y1="8" x2="12" y2="16" />  
                            <line x1="8" y1="12" x2="16" y2="12" /></svg>
                            Add Maintenance 
                            </a>
                    </div>
                  
                </div>
            </div>
            <div className="flex flex-col w-full  pl-10 pb-6">
            <h2 className="font-bold text-slate-600 text-2xl md:text-3xl mb-6 mt-8 lg:mt-auto">Maintenance Due: {car.maintenanceCount}</h2>
                <MaintenanceList maintenanceArry={car.maintenance} carId={car._id} />
            </div>
        </div>
    )) }
</>
    )
}

export default CarList;