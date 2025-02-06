import React, { useState } from 'react';
import './Slider.scss';
import image1 from '../../assets/images/homeSliderImage1.jpeg';
import image2 from '../../assets/images/homeSliderImage2.jpeg';
import image3 from '../../assets/images/homeSliderImage3.jpeg';
import image4 from '../../assets/images/homeSliderImage4.jpeg';
import image5 from '../../assets/images/homeSliderImage5.jpeg';
import { useSwipeable } from 'react-swipeable';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [image1, image2, image3, image4, image5];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextSlide,  // Trigger nextSlide on swipe left
        onSwipedRight: prevSlide,  // Trigger prevSlide on swipe right
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Allows swipe on desktop with mouse drag
    });

    return (
        <div className="slider" {...swipeHandlers}>
            <div className="container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`slide-${index}`}
                        className={currentSlide === index ? 'active' : 'inactive'}
                    />
                ))}
            </div>
            <div className='bagaan_title'>Bagaan</div>
            <div className='shop_now'>Shop Now</div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    &#10094;
                </div>
                <div className="icon" onClick={nextSlide}>
                    &#10095;
                </div>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ left: `${(currentSlide / images.length) * 100}%` }}></div>
            </div>
        </div>
    );
};

export default Slider;
