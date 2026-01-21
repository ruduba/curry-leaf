import { useState } from "react";
import "./component.css"


const Button = (props) => {
return(
    <button
    onClick={props.callApi}>
    /get!
    </button>

);

};

export default Button;