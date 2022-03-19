import React from "react";
import carPic from '../../assets/images/front-wheel.jpg'

const CarList = ()=>{
return(
    <div className=" bg-hero p-10 md:p-20">
        <div className="flex flex-col lg:flex-row lg:flex justify-center bg-slate-50 p-10 rounded-lg">
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
                        <div className="capitalize">Little baby</div>
                        
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
                        <div className="capitalize">BMW</div>
                        
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
                        <div className="capitalize">X1</div>
                        
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
                        <div className="capitalize">2015</div>
                        
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
                        <div className="capitalize">Gray</div>
                        
                    </li>
                </ul>
                <div className="my-6  self-end">
                    <a href="/edit-car" 
                    className="flex  py-2 px-6 float-right text-center text-indigo-400 border border-indigo-400 rounded-full duration-700 hover:text-slate-300 hover:bg-indigo-600 hover:border-indigo-600">
                        <svg className="h-5 w-5 mr-2 text-indigo-400 duration-700" width="24"  height="24"  viewBox="0 0 24 24" 
                         xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  
                         strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                         <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                         <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        Edit Car 
                         </a>
                </div>
                
            </div>
        </div>
    </div>
)
}

export default CarList;