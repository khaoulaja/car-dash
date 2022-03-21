import { useQuery } from "@apollo/client";
import React from "react";
import {QUERY_CARS, QUERY_ME} from '../utils/queries';
import CarList from "../components/CarList";
import Auth from '../utils/auth'
const Dashboard =()=>{
    const {loading, data} = useQuery(QUERY_ME);
    const me = data?.me || []
    
    const loggedIn = Auth.loggedIn();
    console.log(me.cars);

    return(
        <div className=" bg-hero p-10 md:p-20 min-f-screen">
            {loggedIn && loading ? <div>loading</div> :
        <CarList cars={me.cars}/> }
        </div>
    )

}

export default Dashboard;