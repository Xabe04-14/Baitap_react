import React, { useState } from 'react'

export default function Area() {
    const[length,setLength]=useState();
    const[width,setWidth]=useState();
    const[area,setArea]=useState();

const calculateArea = () => {
    setArea(length*width)
}
const DeleteForm=()=>{
    setLength("");
    setWidth("")
}
  return (
    <div>
      <h1>Tính diện tích hình chữ nhật</h1>
      <label>Chiều dài:</label>
      <input type='number' value={length} onChange={(e)=>setLength(Number(e.target.value))}></input>
      <label>Chiều rộng:</label>
      <input type='number' value={width} onChange={(e)=>setWidth(Number(e.target.value))}></input>
      <button onClick={calculateArea} onChange={DeleteForm}>Tính diện tích</button>
      <h2>Diện tích hình chữ nhật là:{area}</h2>
    </div>
  )
}
