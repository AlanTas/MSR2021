import React from "react";
import fire from "./firebase";
import firebase from "firebase"
import { useState } from "react"

    
const UserPage = ({ match }) => {
    const [user, setUser] = useState(null)
    const { params: { userId } } = match;

    useEffect(()=>{
        //Put your Firebase staff here
     },[])
    
    return(
        <>
        <h1>Hey {user}</h1>
        </>
    )
    }
   
export default UserPage
