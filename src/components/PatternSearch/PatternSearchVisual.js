import React, { useState, useEffect } from 'react'

export default function PatternSearchVisual({addArr, text, pattern, orange, green, red}) {
  const [containerHeight, setContainerHeight] = useState(100);
  const [containerWidth, setContainerWidth] = useState(100);

  useEffect(() => {
    setContainerHeight(document.querySelector(`[data-name='visualisation']`).clientHeight);
    setContainerWidth(document.querySelector(`[data-name='visualisation']`).clientWidth);
    console.log(document.querySelector(`[data-name='visualisation']`).clientHeight);
  }, []) 
  
  const width = (containerWidth - 125)/(text.length+1)
    const height = "3rem"
    const green_color = "#0CD44F"
    const red_color = "#FF003A"
    const orange_color = "#FE5720"
    let default_color = "#357DED"
    let bar_color = default_color
    
    const spring = {
        type: "spring",
        damping: 50,
        stiffness: 1000,
        // bounce: 0.25
    }
    return (
        <div>
            {/* <div className="row">
                {addArr.map((ele, index) => {
                    const style = {
                        // border: '0.3em solid',
                        width: width,
                        height: height,
                        background: bar_color,
                        color: "white",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                    return (
                        <div key={index}>
                            <p style={{textAlign: "center"}}>{index}</p>
                            <motion.div
                                layout
                                transition={spring}
                                style={style}
                            >
                                {ele}
                            </motion.div>
                        </div>
                    )
                })}
            </div> */}
            <div className="row">
                {text.map((letter, index)=>{
                    if (orange[0] === index && !red.includes(index)) {
                        bar_color = orange_color
                    }
                    else if (red.includes(index)) {
                        bar_color = red_color
                    }
                    else if (green.includes(index) && green.indexOf(index)%2 === 0) {
                        bar_color = green_color
                    }
                    else {
                        bar_color = default_color
                    }
                    const style = {
                        // border: '0.3em solid',
                        width: width,
                        height: height,
                        background: bar_color,
                        color: "white",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                    return (
                        <div key={index}>
                            <p style={{textAlign: "center"}}>{index}</p>
                            <div
                                style={style}
                            >
                                {letter}
                            </div>
                        </div>
                    )
                })}
            </div>
            <span style={{padding:"3px"}}></span>
            <div className="row">
                {pattern.map((letter, index)=>{
                    if (orange[1] === index && !red.includes(index)) {
                        bar_color = orange_color
                    }
                    else if (red.includes(index)) {
                        bar_color = red_color
                    }
                    else if (green.includes(index) && green.indexOf(index)%2 === 0) {
                        bar_color = green_color
                    }
                    else {
                        bar_color = default_color
                    }
                    const style = {
                        // border: '0.3em solid',
                        width: width,
                        height: height,
                        background: bar_color,
                        color: "white",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                    const fillerStyle = {
                        // border: '0.3em solid',
                        width: width,
                        height: height,
                    }
                    return (
                        <div key={index}>
                            <div
                                style={letter !== " " ? style : fillerStyle}
                            >
                                {letter}
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
