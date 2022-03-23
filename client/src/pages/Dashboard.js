import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ME} from '../utils/queries';
import CarList from "../components/CarList";
import Auth from '../utils/auth';
import Login from "./Login";


const Dashboard =()=>{

    const {loading, data} = useQuery(QUERY_ME);
    const me = data?.me || []

    

    const loggedIn = Auth.loggedIn();

    return(
        <>
            {loggedIn ?
            <div className=" bg-hero p-10 md:p-20 min-h-screen">
                { loading ? <div>loading</div> :
            <CarList cars={me.cars}/> }
            </div> : <Login/>
            }
        </>
    )

}

export default Dashboard;