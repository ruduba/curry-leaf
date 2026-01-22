import { useState } from 'react'

import './App.css'

function App() {
  const[password, setPassword] = useState("");

  return (
    <>
      
      <div className='App'>

      <h1>Enter Password</h1>

      <input type='password'
      placeholder='enter here'
      > 
      </input>
      
      <p>
        
      </p>


      </div>

      


    </>
  )
}

export default App
