import React, { useState } from 'react';

export default function Grade() {
  const [value, setValue] = useState({math: "", bios: ""});
  const [average, setAverage] = useState(null);
  const [rate, setRate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prev => ({...prev,[name]: value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const mathScore = Number(value.math);
    const biosScore = Number(value.bios);
    const avg = (mathScore + biosScore) / 2;
    setAverage(avg);
    if (avg >= 8) {
      setRate("Giỏi");
    } else if (avg >= 5) {
      setRate("Khá");
    } else {
      setRate("Yếu");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>My Grade</h1>

        <label>Your Math grade</label>
        <input
          type='number'
          name="math"
          value={value.math}
          onChange={handleChange}
        />

        <label>Your Bios grade</label>
        <input
          type='number'
          name="bios"
          value={value.bios}
          onChange={handleChange}
        />

        <button type="submit">OK</button>
      </form>

      <div className='result'>
          <>
            <h2>Điểm trung bình: {average}</h2>
            <h2>Xếp loại: {rate}</h2>
          </>
      </div>
    </div>
  )
}
