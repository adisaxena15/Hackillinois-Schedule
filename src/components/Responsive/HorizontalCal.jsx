import React, { useContext, useState } from 'react'
import { EventContext } from '../EventContext';

export default function HorizontalCal({isOpen}) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const {data, setSelectedDateFilter} = useContext(EventContext);
    const [selectedDays, setSelectedDays] = useState([23]); 
  
    const getDayFromTimestamp = (unixTimestamp) => {
      const date = new Date(unixTimestamp * 1000);
      return date.getDate(); 
    };
  
    const eventDays = data?.events.flatMap(event => {
      const day = getDayFromTimestamp(event.startTime);
      return [day - 1, day, day + 2];
    });
  
    const uniqueDays = [...new Set(eventDays)].sort((a, b) => a - b);
  
    const handleDateClick = (day) => {
      if (selectedDays.includes(day)) {
         const updatedDays = selectedDays.filter(selectedDay => selectedDay !== day);
        setSelectedDays(updatedDays);
        setSelectedDateFilter(updatedDays); 
      } else {
        const updatedDays = [...selectedDays, day];
        setSelectedDays(updatedDays);
        setSelectedDateFilter(updatedDays); 
      }
    };
  return (
    <div className="mt-3" >
      {isOpen && <><div className="calendar-header-horizontal">
        <button className="nav-arrow">{'<'}</button>
        <span className="month-name">February</span>
        <button className="nav-arrow">{'>'}</button>
      </div><div className="calendar-days-horizontal">
          {uniqueDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-day-horizontal ${selectedDays.includes(day) ? 'selected' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              <div className="day-name-horizontal">{daysOfWeek[index]}</div>
              <div className="day-number-horizontal">{uniqueDays[index]}</div>
            </div>
          ))}
        </div></>}
    </div>
  )
}
