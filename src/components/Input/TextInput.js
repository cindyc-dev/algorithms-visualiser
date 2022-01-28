import React from 'react';

export default function TextInput({label, placeholder, val, setVal}) {
  return (
    <div className='input-row'>
      <label className="label" >{label}</label>
      <input 
        className="text-input"
        type="text"
        placeholder={placeholder}
        value={val}
        onChange={e => setVal(e.target.value)}>
      </input>
    </div>
  )
}
