import React from 'react';

export default function SliderInput({label, min, max, step, val, setVal}) {
  return (
    <div className='input-row'>
      <label className='label'>{label}</label>
      <input
        id='slider-input'
        className='slider-input'
        type='range'
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={e => setVal(e.target.value)}
      ></input>
    </div>
  );
}
