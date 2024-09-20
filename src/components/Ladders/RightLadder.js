import React from 'react'
import {motion} from 'framer-motion';
export default function RightLadder() {
  return (
    <><motion.div
    style={{
    width: "350px",
      height: "10px",
        background: "white",
position: "relative",
top: "-20px",
left: "380px",
rotate: "-50deg",
transformOrigin: "right bottom",
zIndex: "10000",
}} /> <motion.div
style={{
  width: "290px",
height: "10px",
background: "white",
  position: "relative",
  top: "-130px",
  left: "23rem",
  rotate: "-50deg",
  transformOrigin: "right bottom",
  zIndex: "10000",
}           } /><motion.div
style={{
  width: "120px",
height: "10px",
background: "white",
  position: "relative",
  top: "0",
  left: "36rem",
  rotate: "40deg",
  transformOrigin: "right bottom",
  zIndex: "10000",
}           } /><motion.div
style={{
width: "120px",
height: "10px",
background: "white",
position: "relative",
top: "42px",
left: "33rem",
rotate: "40deg",
transformOrigin: "right bottom",
zIndex: "10000",
}           } />
<motion.div
style={{
  width: "120px",
height: "10px",
background: "white",
  position: "relative",
  top: "80px",
  left: "30rem",
  rotate: "40deg",
  transformOrigin: "right bottom",
  zIndex: "10000",
}           } />
</>
  )
}
