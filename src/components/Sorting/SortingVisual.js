import React, { useEffect, useState } from 'react';

export default function SortingVisual({ bars, coloursMap }) {
  const [containerHeight, setContainerHeight] = useState(100);
  const [containerWidth, setContainerWidth] = useState(100);

  useEffect(() => {
    setContainerHeight(document.querySelector(`[data-name='visualisation']`).clientHeight);
    setContainerWidth(document.querySelector(`[data-name='visualisation']`).clientWidth);
    console.log(document.querySelector(`[data-name='visualisation']`).clientHeight);
  }, []) 
  
  const barWidth = bars.length * containerWidth - 125

  return (
    <div className='bars-container'>
      {bars.map((bar, index) => {
        const style = {
          border: `0.3rem solid ${coloursMap[bar.state].border}`,
          width: barWidth,
          height: `${(bar.height / bars.length) * containerHeight - 100}px`,
          background: coloursMap[bar.state].background
        };
        return (
          <div
            key={index}
            style={style}
          >
            {/* {bar.id} */}
          </div>
        )
      })}
    </div>
  );
}
