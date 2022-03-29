import React, { useState, useEffect } from 'react'

export default function Visual({ bars, compare, sorted, swap, coloursMap }) {
  const [containerHeight, setContainerHeight] = useState(100);
  const [containerWidth, setContainerWidth] = useState(100);

  useEffect(() => {
    setContainerHeight(document.querySelector(`[data-name='visualisation']`).clientHeight);
    setContainerWidth(document.querySelector(`[data-name='visualisation']`).clientWidth);
    console.log(document.querySelector(`[data-name='visualisation']`).clientHeight);
  }, []) 
  
  const barWidth = bars.length * (containerWidth - 125)

    return (
      <div className="bars">
        {bars.map((bar, index) => {
          // calculate height 
          const height = (bar / bars.length) * (containerHeight - 100);

          // set the background and border based on coloursMap
          let background = coloursMap['default'].background;
          let border = coloursMap['default'].border;
          if (compare.includes(index)) {
            background = coloursMap['compare'].background;
            border = coloursMap['compare'].border;
          }
          if (swap.includes(index)) {
            background = coloursMap['swap'].background;
            border = coloursMap['swap'].border;
          }
          if (sorted.includes(index)) {
            background = coloursMap['sorted'].background;
            border = coloursMap['sorted'].border;
          }

          const style = {
            border: `0.3rem solid ${border}`,
            width: barWidth,
            height: `${height}px`,
            background: background
          };

          return (
            <div
              key={index}
              style={style}
            >
            </div>
          )
        })}
      </div>
    )
}
