// Card.jsx
import React from "react";

const MagicCard = ({ image, icon, heading, paragraph }) => {
  return (
    <div className="magic-card position-relative overflow-hidden rounded-3 shadow-sm"
    style={{height: 'fit-content'}}>
      
      {/* Image */}
      <img
        src={image} 
        alt={heading}
        className="img-fluid w-auto"
      />

      {/* Hover Overlay */}
      <div className="magic-overlay d-flex flex-column justify-content-center align-items-start p-4">
        <i className={`${icon} fs-1 mb-3`}></i>
        <h4 className="fw-bold mb-2">{heading}</h4>
        <p className="mb-0">{paragraph}</p>
      </div>

    </div>
  );
};

export default MagicCard;
