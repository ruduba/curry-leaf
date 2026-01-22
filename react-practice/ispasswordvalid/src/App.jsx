import { useState } from 'react'
import validator from 'validator'
import './App.css'

function App() {
    const[strength, setStrength] = useState("lets go");

    const validate = (value) => {

      if(validator.isStrongPassword(value, {
        minLength: 8, minLowercase:2, minUppercase:2, minNumbers: 2, minSymbols: 2
      })) {
        setStrength("Is Strong! Good to GO")
      }else{
        setStrength("Is weak, try a stronger password")
      }
    }
  return (
    <>
      
      <div className='App'>

      <h1>Enter Password</h1>

      <input type='text'
      placeholder='enter here'
      style={{border: strength === "Is Strong! Good to GO" ? "2px dotted green" : "2px dotted red"}}
      onChange={(e) => validate(e.target.value)}
      > 
      </input>
      
      <p style={{color: strength === "Is Strong! Good to GO" ? "green" : "red"}}>
        {strength}
      </p>


      </div>

      


    </>
  )
}

export default App
