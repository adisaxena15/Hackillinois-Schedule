// src/components/CalendarPage.js
import React, { useState } from 'react';
import EventCards from './EventCards';
import EventTypes from './EventTypes';
import CalendarNav from './CalendarNav';
import { EventProvider } from './EventContext';
import HamburgerMenu from './Responsive/HamburgerMenu';
import Aurora from './Aurora';


function CalendarPage() {
    const [IsOpen, setIsOpen] = useState(false);
    function onClose(isOpen){
        setIsOpen(isOpen);
    }
    return (
        <EventProvider>
        <div className="calendar-container flex md:grid md:grid-cols-[250px_1fr]">
            <aside className="sidebar hidden md:flex">
                <CalendarNav />
                <div className="guide">
                    <EventTypes />
                </div>
            </aside>
            <HamburgerMenu onClose={onClose}/>
            <main className="events-section">
                <div className="bg-transparent"><h1 className="mb-6 mt-6 text-center font-extrabold text-9xl ">HackIllinois 2025</h1></div>
                <div className={`mt-20 md:mt-10 ${!IsOpen? `mt-64`: `mt-20`} cont flex justify-center`}>{<EventCards />}</div>
            </main>
            <Aurora />
        </div>
       
        </EventProvider>
    );
}

export default CalendarPage;
