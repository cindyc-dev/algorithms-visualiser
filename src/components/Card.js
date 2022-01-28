import React from 'react';
import { colourMap } from '../constants';

export default function Card({ colour, header, child }) {
  let cardStyle = {
    border: '0.5rem solid #3B4C60',
    backgroundColor: '#FCFCFC',
    width: 'calc(100% - 1rem)',
    height: 'calc(100% - 1rem)',
  }
  
  let cardHeaderStyle = {
    fontFamily: 'DM Sans, sans-serif',
    textAlign: 'center',
    color: '#3B4C60',
    borderBottom: '0.5rem solid #3B4C60',
    padding: '0.2rem',
    backgroundColor: `${colourMap[colour].header}`,
    display: 'flex',
    alignItems: 'center',
  }

  let cardHeaderDotContainer = {
    display: 'flex',
  }

  let cardHeaderDot1 = {
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    background: `${colourMap[colour].dot1.background}`,
    border: `0.25rem solid ${colourMap[colour].dot1.border}`,
    margin: '0.25rem',
  }
  let cardHeaderDot2 = {
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    background: `${colourMap[colour].dot2.background}`,
    border: `0.25rem solid ${colourMap[colour].dot2.border}`,
    margin: '0.25rem',
  }

  return(
    <div style={cardStyle}>
      <div style={cardHeaderStyle} className='card-drag-handle'>
        <div style={cardHeaderDotContainer}>
          <div style={cardHeaderDot1}></div>
          <div style={cardHeaderDot2}></div>
        </div>
        <div style={{textAlign: 'center', justifyContent: 'center', flexGrow: '1'}}>
          <h2><b>{header}</b></h2>
        </div>
        
      </div>
      <div style={{padding: '1rem'}}>
        {child}
      </div>
      
    </div>
  );
}
