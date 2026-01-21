import { useState } from "react";
import Button from "./Button";
import "./component.css"

const UserName = () => {


const [username, setUsername] = useState("Username goes here");

const fetchUsername = async () =>{
    const r1 = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=animals&words=1")
    const d1 = await r1.json();

    const r2 = await fetch(" https://random-word-api.herokuapp.com/word?number=1")
    const d2 = await r2.json();

    setUsername(` ${d2} ${d1[0].word}`)
}


return(
    < >
    <div className="fix">
            <div className="username-here">

        

        <p>{username}</p>
                
    </div>
    <div className="btn">
        <Button callApi = {fetchUsername} />
       </div>

        
    </div>

    </>



);




};


export default UserName;