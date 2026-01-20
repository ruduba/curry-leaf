import { useState } from 'react'
import './App.css'

function App() {
  const [Name, setName] = useState("");
  const [date, setDate] = useState("");
  const [dayRating, setDayRating] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(
        Name,
        date,
        dayRating,
        desc,
        photo
      );
  }
  
const handleReset = () => {
  setName("");
  setDate("");
  setDayRating("");
  setDesc("");
  setPhoto("");
};

  return (

    <>
    <div className='form-full'>
      <h1 className='form-heading'>Tell Me About Your Day</h1>
      <fieldset>
        <form action="#" method='get'>

          <div className='form-div'>
          <label>
            Name
          </label>
          <input type="text"
            name='Name'
            id='Name'
            value={Name}
            onChange={(e) =>
            setName(e.target.value)
          } 
          placeholder="Enter Your Name"
          required/>

          </div>
          
          <div className='form-div date'>
          <label>
          Date Today
          </label>
          <input type="date" 
          name="date" 
          id="date" 
          value={date}
          onChange={(e) =>
            setDate(e.target.value) 
          }
          required/>

          </div>
          
          <div className='form-div rating'>
            <label>Rate your day on a scale of 1-5</label>
            <div className='radio-items'>
              <label>
                
                <input type='radio' name='dayRating' value="1" id = '1' checked = {dayRating === "1"}
            onChange={(e) => setDayRating(e.target.value)}
            /> 1
              </label>
                
              <label>
                  <input type='radio' name='dayRating' value="2" id = '2' checked = {dayRating === "2"}
            onChange={(e) => setDayRating(e.target.value)}
            /> 2
              </label>
                 
              <label>
                     <input type='radio' name='dayRating' value="3" id = '3' checked = {dayRating === "3"}
            onChange={(e) => setDayRating(e.target.value)}
            /> 3
              </label>

              <label>
                <input type='radio' name='dayRating' value="4" id = '4' checked = {dayRating === "4"}
            onChange={(e) => setDayRating(e.target.value)}
            /> 4
              </label>

              <label>
                <input type='radio' name='dayRating' value="5" id = '5' checked = {dayRating === "5"}
            onChange={(e) => setDayRating(e.target.value)}
            /> 5
              </label>
              
            </div>
          </div>
          
          <div className='form-div description'>
          <label>
            Describe your day
          </label>
          <textarea maxLength="1000"
          name='desc'
            id='desc'
            value={desc}
            onChange={(e) =>
            setDesc(e.target.value)
          } 
          placeholder="Spill the tea sis"
          required/>

          </div>

          <div className='form-div'>
            <label>Upload a Selfie of you Right Now</label>
            <input
            type='file'
            name='photo'
            id='photo'
            onChange={(e)=> setPhoto(e.target.files[0])}
            required/>
          </div>

            <div className='buttons'>
              <button
              type='reset'
              value='reset'
              onClick={(e) => handleReset(e)}
              >Reset</button>

              <button
              type='submit'
              value='submit'
              onClick={(e) => handleSubmit(e)}
              >Submit</button>
              
            </div>
        </form>
      </fieldset>
    </div>
      
    </>
  )
}

export default App
