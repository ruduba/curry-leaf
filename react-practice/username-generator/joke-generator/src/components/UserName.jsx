import { useState } from "react";
import Button from "./Button";
import "./component.css"

const UserName = () => {

const [username1, setUsername1] = useState("");
const [username2, setUsername2] = useState("");

const fetch1 = () => {
            
            fetch("https://word-generator-api.adriencarpentier.com/en/word/get")
            .then((res) => res.json())
            .then((data) => setUsername1(data))
            
        }

const fetch2 = () => {
            fetch(" https://random-word-api.herokuapp.com/word?number=1")
            .then((res) => res.json())
            .then((data) => setUsername2(data))
        }

return(
    < >
    <div className="fix">
            <div className="username-here">

        

        <p>{username1+username2}</p>
                
    </div>
    <div className="btn">
        <Button callApi = {fetch2}/>
       </div>

        
    </div>

    </>



);




};


export default UserName;