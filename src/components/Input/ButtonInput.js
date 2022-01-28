import React from 'react';

export default function ButtonInput({label, handleClick, colour, icon}) {
  const buttonColourMap = {
    'green': {
      background: '#11C059',
      border: '#0B622F'
    },
    'dark-blue': {
      background: '#678DF2',
      border: '#243489'
    }
  }
  const style = {
    background: buttonColourMap[colour].background,
    border: `0.3rem solid ${buttonColourMap[colour].border}`,
    color: buttonColourMap[colour].border
  };
  return (
    <button
      onClick={handleClick}
      style={style}
      className='button-input'
    >
      {icon ? icon : null}
      {label}
    </button>
  );
}
