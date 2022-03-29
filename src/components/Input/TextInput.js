import React from 'react';

export default function TextInput({label, placeholder, val, onChange}) {
  return (
    <div className='input-row'>
      <label className="label" >{label}</label>
      <input 
        className="text-input"
        type="text"
        placeholder={placeholder}
        value={val}
        onChange={onChange}>
      </input>
    </div>
  )
}
