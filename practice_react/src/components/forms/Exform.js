import React, { useState } from 'react'

export default function Exform() {
  const [state, setState] = useState('');

  const handleChange = (event) => {
    setState(event.target.value); 
  }

  return (
    <div style={{padding: " 50px 500px"}}>
      <h1>Hello <span style={{fontWeight:"bold"}}>{state}</span></h1>
      <form onSubmit={handleChange}>
        <label>Enter your name</label>
        <input  
          type="text" 
          value={state} 
          onChange={handleChange}   
        />
      </form>
    </div>
  )
}
