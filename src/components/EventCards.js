/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useRef } from 'react';
import { EventContext } from './EventContext';
import { CardContainer } from './Card/CardContainer.js';
import CardDesign from './Card/CardDesign.js';
import '../styles/card.css';
import LeftLadder from './Ladders/LeftLadder.js';
import RightLadder from './Ladders/RightLadder.js';

function formatTime(unixTimestamp) {
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  return dateObject.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

function formatLocation(description){
const roomRegex = /(\w+)\s*(\d{3,4})/; 
const match = description.match(roomRegex);
if (match) {
    return description.replace(roomRegex, `${match[1]} | Room: ${match[2]}`);
} return description
}
function formatDate(unixTimestamp){
  const milliseconds = unixTimestamp * 1000;
const dateObject = new Date(milliseconds);
return dateObject.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });;
}

function EventCards() {
  const { data, eventTypeShadowColors, eventFilters, selectedDateFilter } = useContext(EventContext);
  const cardRefs = useRef([]);

  function getEventTypeColor(event) {
    return `10px 20px 50px ${eventTypeShadowColors[event] || 'rgba(255, 255, 255, 0.5)'}`;
  }

  const getDayFromTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.getDate();
  };

  const filteredEvents = data?.events.filter(event => {
    const eventDay = getDayFromTimestamp(event.startTime);
    const matchesType = eventFilters.length > 0 ? eventFilters.includes(event.eventType) : true;

    if (selectedDateFilter && selectedDateFilter.length > 0) {
      return matchesType && selectedDateFilter.includes(eventDay);
    } else {
      return matchesType;
    }
  });

  const sortedEvents = filteredEvents?.sort((a, b) => a.startTime - b.startTime);

  return (
    <div className="event-cards-container">
      {sortedEvents?.map((event, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === sortedEvents.length - 1;
        return (
          <div key={index}>
            <CardContainer
              containerClassName={`event-card-container ${isEven ? 'left' : 'right'}`}
              ref={el => cardRefs.current[index] = el}
            >
              <CardDesign
                key={index}
                event={event}
                getEventTypeColor={getEventTypeColor}
                formatDate={formatDate}
                formatTime={formatTime}
                formatLocation={formatLocation}
              />
            </CardContainer>
            <div className="ladder">{!isLast && isEven && <LeftLadder/> }</div>
            <div className="ladder">{!isLast && !isEven && <RightLadder />}</div>
          </div>
        );
      })}

      {sortedEvents?.length === 0 && <h1 className="sorry-message" style={{ color: "red" }}>Sorry :( no event details available</h1>}
    </div>
  );
}

export default EventCards;