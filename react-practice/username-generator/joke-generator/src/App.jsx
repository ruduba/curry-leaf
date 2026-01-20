import { useState } from 'react'
import './App.css'
import UserName from './components/UserName'
import Button from './components/Button'

function App() {

  return (
    <>
      <div className='App'>
        <h1>Funky Username Generator</h1>
        <UserName/>
        <Button/>
      </div>

    </>
  )
}

export default App
