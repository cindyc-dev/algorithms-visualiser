import React from 'react';

export default function Card({ colour, header, isDraggable=true }) {
  let colourMap ={
    orange: {
      header: '#FDAC6A',
      dot1: {
        background: '#FEA4C2',
        border: '#E03361'
      },
      dot2: {
        background: '#FF817A',
        border: '#C23F47',
      }
    },
    red: {
      header: '#FF817A',
      dot1: {
        background: '#69E7D6',
        border: '#518F8A'
      },
      dot2: {
        background: '#51B7E2',
        border: '#2B6EB2'
      }
    },
    pink: {
      header: '#FEA4C2',
      dot1: {
        background: '#A3A3D5',
        border: '#3A4C8E'
      },
      dot2: {
        background: '#69E7D6',
        border: '#518F8A'
      }
    },
    purple: {
      header: '#A3A3D5',
      dot1: {
        background: '#FDAC6A',
        border: '#F77052'
      },
      dot2: {
        background: '#51B7E2',
        border: '#2B6EB2'
      }
    },
    mint: {
      header: '#69E7D6',
      dot1: {
        background: '#FF817A',
        border: '#C23F47'
      },
      dot2: {
        background: '#FDAC6A',
        border: '#F77052'
      }
    }
  }

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
      <div style={cardHeaderStyle} className={`${isDraggable===true ? 'card-drag-handle' : ''}`}>
        <div style={cardHeaderDotContainer}>
          <div style={cardHeaderDot1}></div>
          <div style={cardHeaderDot2}></div>
        </div>
        <div style={{textAlign: 'center', justifyContent: 'center', flexGrow: '1'}}>
          <h2><b>{header}</b></h2>
        </div>
        
      </div>
      <div style={{padding: '1rem'}}>
        <p>Lorem Ipsum</p>
      </div>
      
    </div>
  );
}
