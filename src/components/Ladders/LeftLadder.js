import React from 'react'
import {motion} from 'framer-motion'
export default function LeftLadder() {
  return (
    <><motion.div
    style={{
    width: "355px",
      height: "10px",
        background: "white",
position: "relative",
top: "255px",
left: "18rem",
rotate: "50deg",
transformOrigin: "right bottom",
zIndex: "10000",
}} /> <motion.div
style={{
  width: "270px",
height: "10px",
background: "white",
  position: "relative",
  top: "70px",
  left: "26rem",
  rotate: "50deg",
  transformOrigin: "right bottom",
  zIndex: "10000",
}           } /><motion.div
style={{
  width: "140px",
height: "10px",
background: "white",
  position: "relative",
  top: "60px",
  left: "22.7rem",
  rotate: "140deg",
  transformOrigin: "right bottom",
  zIndex: "10000",
}           } /><motion.div
style={{
width: "140px",
height: "10px",
background: "white",
position: "relative",
top: "0",
left: "20rem",
rotate: "140deg",
transformOrigin: "right bottom",
zIndex: "10000",
}           } />
<motion.div
style={{
  width: "140px",
height: "10px",
background: "white",
  position: "relative",
  top: "100px",
  left: "26rem",
  rotate: "140deg",
  transformOrigin: "right bottom",
  zIndex: "10000",
}           } />
</>
  )
}
