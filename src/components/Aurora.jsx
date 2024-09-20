
import React, { useEffect, useRef } from 'react'
import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import {Stars} from '@react-three/drei'
import '../styles/aurora.css'

export default function Aurora() {

    const COLORS = ["#1E67C6","#13FFAA","#CE84CF","#DD335C"]
    const colorRef = useRef(useMotionValue(COLORS[0]));
    const backgroundImage = useMotionTemplate`radial-gradient(125% 110% at 50% 0%, #020617 70%, ${colorRef.current} )`;
  
    useEffect(() => {
      animate(colorRef.current, COLORS, {
        ease: 'easeInOut',
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror"
      });
    }, []);
  
    return (
      <motion.section className="aurora" style={{ backgroundImage: backgroundImage, opacity: 0.3 }}>
        <div id="stars">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    );  
}