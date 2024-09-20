import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EventContext = createContext();
export const EventProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedDateFilter, setSelectedDateFilter] = useState(null);
    const eventTypeShadowColors = {
        WORKSHOP: 'rgba(255, 159, 64, 0.8)',
        SPEAKER: 'rgba(50, 255, 126, 0.8)',
        OTHER: 'rgba(0, 206, 209, 0.8)',    
        MINIEVENT: 'rgba(72, 118, 255, 0.8)',    
        QNA: 'rgba(238, 130, 238, 0.8)',       
        MEAL: 'rgba(255, 79, 98, 0.8)',     
      };

    const [eventFilters, setEventFilters] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/events');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the event data", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <EventContext.Provider value={{ data, error, loading, eventTypeShadowColors, eventFilters, setEventFilters, setSelectedDateFilter, selectedDateFilter}}>
            {children}
        </EventContext.Provider>
    );
};
