import React, {useContext, useEffect, useState} from 'react'
import { EventContext } from '../EventContext';
import {motion, AnimatePresence} from 'framer-motion';
import '../../styles/navbar.css';
import HorizontalCal from './HorizontalCal';

export default function HamburgerMenu({onClose}) {
    const [isOpen, setIsOpen] = useState(false);
    const [eventTypes, setEventTypes] = useState([]);
    const { data, eventTypeShadowColors, setEventFilters, eventFilters } = useContext(EventContext);
    const ulVariants = {
        open:{
          transition: {
            type: "spring", bounce: 0,duration: 0.5,when: "beforeChildren",staggerChildren: 0.1,},
        },
        closed: {
          transition: { type: "spring",bounce: 0,duration: 0.5,when: "afterChildren",},
        },
      }
      const liVariants={
        open: { opacity: 1, scale: 1, filter: "blur(0px)" },
        closed: { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      }

    useEffect(() => {
        if (data && data.events) {
            const uniqueEventTypes = [...new Set(data.events.map(event => event.eventType))];
            setEventTypes(uniqueEventTypes);
        }
    }, [data]);

    const handleTypeClick = (type) => {
        if (eventFilters.includes(type)) {
          setEventFilters(eventFilters.filter(filter => filter !== type));
        } else {
          setEventFilters([...eventFilters, type]);
        }
      };

    const getEventTypeColor = (type) => eventTypeShadowColors[type.toUpperCase()];

    function onClickClose(bool){
      onClose(bool);
      setIsOpen((prev)=>!prev);
    }
  return (
    <div className="pt-5 fixed top-0 left-4 flex align-center justify-center flex-col z-1001 md:hidden ">
        <button className="md:hidden mr-0">
                    <label className="bar" htmlFor="check" >
                      <input type="checkbox" className="custom-checkbox" id="check" onClick={()=> onClickClose(isOpen)}/>
                      <span className="top"></span>
                      <span className="middle"></span>
                      <span className="bottom"></span>
                    </label>
            </button>
            <HorizontalCal isOpen={isOpen} />
            <AnimatePresence>
                {isOpen && <motion.div
                variants={{visibile: {y:0}, hidden:{y:"-200%"}}}
                animate={"visible"}
                transition={{duration: 0.5, ease:"easeInOut"}} className="sticky top-40">
                <motion.div initial="closed" animate={isOpen?"open":"closed"}>
                    <motion.ul className="list" variants={ulVariants}>
                    {eventTypes?.map((type, index) => (
                    <motion.li variants={liVariants} key={index} className={`event-type-pill ${eventFilters.includes(type) ? 'selected' : ''}`}
                        onClick={() => handleTypeClick(type)}> 
                        <span className="circle-nav" style={{ backgroundColor: getEventTypeColor(type) }}>
                        </span> {type}
                    </motion.li>                    
                ))}
                </motion.ul>
                </motion.div>
                </motion.div>}
            </AnimatePresence>

    </div>
  )
}
