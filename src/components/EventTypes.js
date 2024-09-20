import React, { useState, useEffect, useContext } from 'react';
import { EventContext } from './EventContext';

export default function EventTypes() {
    const [eventTypes, setEventTypes] = useState([]);

    const { data, eventTypeShadowColors, setEventFilters, eventFilters } = useContext(EventContext);
    
    useEffect(() => {
        if (data && data.events) {
            const uniqueEventTypes = [...new Set(data.events.map(event => event.eventType))]; // Get unique event types
            setEventTypes(uniqueEventTypes);
        }
    }, [data]);

    const getEventTypeColor = (type) => eventTypeShadowColors[type.toUpperCase()] || 'rgba(255, 255, 255, 0.5)';

    const handleTypeClick = (type) => {
        if (eventFilters.includes(type)) {
          setEventFilters(eventFilters.filter(filter => filter !== type));
        } else {
          setEventFilters([...eventFilters, type]);
        }
      };
    return (
        <>
            <h3>Event Types</h3>
            <ul className="event-types-list hidden md:flex">
                {eventTypes?.map((type, index) => (
                    <li key={index} className={`event-type-pill ${eventFilters.includes(type) ? 'selected' : ''}`}
                    onClick={() => handleTypeClick(type)}> 
                    <span className="circle" style={{ backgroundColor: getEventTypeColor(type) }}>
                    </span>  {type}

                    </li>
                ))}
            </ul>
        </>
    );
}
