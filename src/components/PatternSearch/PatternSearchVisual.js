import { motion } from 'framer-motion'
import React from 'react'

export default function PatternSearchVisual({addArr, text, pattern, orange, green, red}) {
    const width = (window.innerWidth - 0.2*window.innerWidth)/(text.length+1) - 10
    const height = "50px"
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
                            <motion.div
                                layout
                                transition={spring}
                                style={style}
                            >
                                {letter}
                            </motion.div>
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
                            <motion.div
                                layout
                                transition={spring}
                                style={letter !== " " ? style : fillerStyle}
                            >
                                {letter}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
