import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./TestimonialCard.scss";

const TestimonialCard = ({ image }) => {
    return (
        <div className="TestimonialCard">
            <img src={image.image} alt="Testimonial" className="TestimonialImage" />
            <div className="TestimonialTitle">{image.title}</div>
            <div className="TestimanialText">{image.text}</div>
        </div>
    );
};
export default TestimonialCard;
