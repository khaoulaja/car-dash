import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_MAINTENANCE } from "../../utils/mutations";
import Auth from "../../utils/auth";

const MaintenanceList=({maintenanceArry, carId})=>{
    
    const [removeMaintenance] = useMutation(REMOVE_MAINTENANCE);

    if(!maintenanceArry){
        return (
            <h3>You're All Set!</h3>
        )
    }
    const handleRemoveMaintenance = async (type, carId) =>{
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if(!token){
            return false
        }
        try{
            await removeMaintenance({variables: {type, carId}})
        } catch(e){
            console.error(e);
        }
    }
    return (
        <div>
            <ul className="flex flex-wrap">
            {maintenanceArry && maintenanceArry.map((type, index) => (
                <li className={"border-2 border-amber-500 m-1.5 rounded-lg w-80 mr-8"} key={index}>
                <div className="flex justify-between p-2 text-center text-amber-500 font-montserrat font-semibold capitalize ">
                <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-amber-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                      {type}</div>
                    <a className="cursor-pointer" onClick={()=> handleRemoveMaintenance(type, carId)} title="remove from due maintenance"> 
                    <svg className="h-5 w-5 ml-2 text-slate-500 hover:text-amber-600 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    </a>
                    </div>
                </li>
                ))}
            </ul>
            
        </div>
    )
}

export default MaintenanceList;