import { useState } from "react";
import Button from "./Button";
import "./component.css"

const UserName = () => {

const [username, setUsername] = useState("Username Goes Here");




return(

    <div className="username-here">
        
        <p>{username}</p>

    </div>



);




};


export default UserName;