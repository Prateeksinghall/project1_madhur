import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./BestSeller.scss";
import ZoomingImage from "../ZoomingImage/ZoomingImage";
import CollectionButton from "../CollectionButton/CollectionButton";

const BestSeller = ({ images }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    // Adjust number of images per slide based on screen width
    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth > 1200) {
                setItemsPerSlide(3); // Large screens: show 3 images
            } else if (window.innerWidth > 768) {
                setItemsPerSlide(2); // Medium screens: show 2 images
            } else {
                setItemsPerSlide(1); // Small screens: show 1 image
            }
        };

        updateItemsPerSlide(); // Run initially
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const totalSlides = Math.ceil(images.length / itemsPerSlide);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1 < totalSlides ? prevIndex + 1 : 0));
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : totalSlides - 1));
    };

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: handleNext, // Swipe left to go to the next slide
        onSwipedRight: handlePrev, // Swipe right to go to the previous slide
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Enables swiping with the mouse as well
    });

    return (
        <div className="carousel-container" {...handlers}>
            <button className="carousel-btn left" onClick={handlePrev}>
                &#9665;
            </button>

            <div className="carousel-wrapper">
                <div
                    className="carousel"
                    style={{
                        transform: `translateX(-${startIndex * (100 / itemsPerSlide)}%)`,
                    }}
                >
                    {images.map((img, index) => (
                        <div key={index} className="carousel-item" style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}>
                            <ZoomingImage source={img} />
                            <CollectionButton text="Text Here" />
                        </div>
                    ))}
                </div>
            </div>

            <button className="carousel-btn right" onClick={handleNext}>
                &#9655;
            </button>
        </div>
    );
};

export default BestSeller;
