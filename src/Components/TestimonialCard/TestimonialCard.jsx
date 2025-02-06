import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./TestimonialCard.scss";

const TestimonialCard = ({ image }) => {
    return (
        <div className="TestimonialCard">
            <img src={image} alt="Testimonial" className="TestimonialImage" />
            <div className="TestimonialTitle">Title comes here</div>
            <div className="TestimanialText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus expedita eligendi dignissimos accusamus optio praesentium culpa, officia placeat possimus doloribus earum aspernatur deserunt nemo! Sapiente recusandae rem perferendis accusamus ut!</div>
        </div>
    );
};
export default TestimonialCard;

// const TestimonialCarousel = ({ testimonials }) => {
//     const [startIndex, setStartIndex] = useState(0);
//     const [itemsPerSlide, setItemsPerSlide] = useState(3);

//     // Adjust items per slide based on screen width
//     useEffect(() => {
//         const updateItemsPerSlide = () => {
//             if (window.innerWidth > 1200) {
//                 setItemsPerSlide(3); // Large screens
//             } else if (window.innerWidth > 768) {
//                 setItemsPerSlide(2); // Medium screens
//             } else {
//                 setItemsPerSlide(1); // Small screens
//             }
//         };

//         updateItemsPerSlide();
//         window.addEventListener("resize", updateItemsPerSlide);
//         return () => window.removeEventListener("resize", updateItemsPerSlide);
//     }, []);

//     const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

//     const handleNext = () => {
//         setStartIndex((prevIndex) => (prevIndex + itemsPerSlide < totalSlides ? prevIndex + itemsPerSlide : 0));
//     };

//     const handlePrev = () => {
//         setStartIndex((prevIndex) => (prevIndex - itemsPerSlide >= 0 ? prevIndex - itemsPerSlide : totalSlides - 1));
//     };

//     // Swipe handlers
//     const handlers = useSwipeable({
//         onSwipedLeft: handleNext,
//         onSwipedRight: handlePrev,
//         preventDefaultTouchmoveEvent: true,
//         trackMouse: true,
//     });

//     return (
//         <div className="testimonial-carousel-container" {...handlers}>
//             <button className="testimonial-carousel-btn left" onClick={handlePrev}>
//                 &#9665;
//             </button>

//             <div className="testimonial-carousel-wrapper">
//                 <div
//                     className="testimonial-carousel"
//                     style={{
//                         transform: `translateX(-${startIndex * (100 / itemsPerSlide)}%)`,
//                     }}
//                 >
//                     {testimonials.map((testimonial, index) => (
//                         <div
//                             key={index}
//                             className="testimonial-carousel-item"
//                             style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
//                         >
//                             <TestimonialCard
//                                 image={testimonial.image}
//                                 title={testimonial.title}
//                                 text={testimonial.text}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <button className="testimonial-carousel-btn right" onClick={handleNext}>
//                 &#9655;
//             </button>
//         </div>
//     );
// };

// export default TestimonialCarousel;
