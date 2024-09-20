import React, { useState } from 'react';
import { CardItem } from './CardItem';
import Modal from '../Responsive/Modal'; // Import the modal component

const CardDesign = ({ event, getEventTypeColor, formatDate, formatTime, formatLocation, ref }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function editColor(color) {
    return color.substring(color.indexOf('rgba'));
  }

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="event-card" style={{ boxShadow: getEventTypeColor(event.eventType) }} ref={ref}>
      <div className="event-header" style={{ backgroundColor: editColor(getEventTypeColor(event.eventType)) }}>
        <div className="event-date-box">
          <span className="event-date">{formatDate(event.startTime)}</span>
        </div>
        <div className="event-title">
          <h3 className="event-name">{event.name.toUpperCase()}</h3>
        </div>
      </div>

      <div
        className="event-image"
        style={{ backgroundImage: `url(${event.mapImageUrl})` }}
        onClick={() => openModal(event.mapImageUrl)}
      ></div>

      <CardItem translateZ={20}>
        <div className="event-content">
          <div className="event-description">{event.description}</div>
          <div className="event-details">
            <p>
              <strong>Time:</strong> {formatTime(event.startTime)} - {formatTime(event.endTime)}
            </p>
            {event?.locations.map((location, idx) => (
              <p key={idx}>Location: {formatLocation(location.description)}</p>
            ))}
          </div>
          <div className="event-footer">
            <div className="event-description">{event.eventType}</div>
            <div className="event-points">{event.points} points</div>
          </div>
        </div>
      </CardItem>

      {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default CardDesign;
