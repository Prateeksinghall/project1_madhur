import React, { useRef, useState } from 'react';
import './Product.scss';
import image1 from '../../assets/images/Products/product_1_1.png';
import image2 from '../../assets/images/Products/product_1_2.png';
import image3 from '../../assets/images/Products/product_2_1.png';
import image4 from '../../assets/images/Products/product_2_2.png';
import image5 from '../../assets/images/Products/product_3_1.png';
import image6 from '../../assets/images/Products/product_3_2.png';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Product = () => {
    const data = {
        images: [image1, image2, image3, image4, image5, image6],
        title: "Numani Chanderi Sari",
        cost: "Rs. 14,400.00",
        ratings: 4.5,
        description: "Celebrate the wedding season in our elegant Green Chanderi Sari, featuring intricate floral and patchwork embroidery. The lehenga's upper border, beautifully embroidered for 2 meters, adds a rich, luxurious touch. Paired with a matching choli and dupatta, this ensemble radiates festive charm, making it the perfect choice for a standout, sophisticated look at any celebration. Crafted in pure chanderi . 5.7-meter length(approx.) 45 inches width. (Approx.)Comes with 1m blouse material in chanderi.Made to order."
    };

    const mainImgRef = useRef(null);
    const imageRefs = useRef([]); // Array to hold references to each main image
    const [scrollState, setScrollState] = useState("beforeMainImg");

    const handleImageClick = (index) => {
        if (imageRefs.current[index]) {
            imageRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Ratings logic
    const fullStars = Math.floor(data.ratings); // Get the whole number of stars
    const hasHalfStar = data.ratings % 1 !== 0; // Check if there's a half-star

    return (
        <div className='productMain'>
            <div className="product">
                <div className="left">
                    <div className="images">
                        {data.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Product ${index}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                    <div className="mainImg" ref={mainImgRef}>
                        {data.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Main Product ${index}`}
                                ref={(el) => (imageRefs.current[index] = el)} // Assign ref to each image
                            />
                        ))}
                    </div>
                </div>

                <div className="right">
                    <h2 className='title'>{data.title}</h2>
                    <div className="price">
                        <span className='cost'>{data.cost}</span>
                        <span className='spanBelowCost'>Price includes GST</span>
                    </div>
                    <span className='spanBelowPrice'>Extra 10% off auto-applied at checkout</span>

                    {/* Ratings display */}
                    <div className="productRatings">
                        {[...Array(fullStars)].map((_, i) => (
                            <IoIosStar key={`full-${i}`} className="filled" />
                        ))}
                        {hasHalfStar && <IoIosStarHalf key="half" className="filled" />}
                        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                            <IoIosStar key={`empty-${i}`} className="unfilled" />
                        ))}
                    </div>
                    <button className="addToCart">ADD TO CART</button>
                    <button className="addToCart" id='wishlist'>ADD TO WISHLIST</button>
                    <span className='retunLine'>Free retuns on all qualifying orders.</span>

                    <hr />
                    <p className="description">{data.description}</p>
                </div>
            </div>
        </div>


    );
};

export default Product;
