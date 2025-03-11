import React, { useRef, useState } from 'react';
import './Product.scss';
import image1 from '../../assets/images/Products/product_1_1.png';
import image2 from '../../assets/images/Products/product_1_2.png';
import image3 from '../../assets/images/Products/product_2_1.png';
import image4 from '../../assets/images/Products/product_2_2.png';
import image5 from '../../assets/images/Products/product_3_1.png';
import image6 from '../../assets/images/Products/product_3_2.png';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Card from '../../Components/Card/Card';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const similarData = [
        { id: 1, first: "/src/assets/images/Products/product_1_1.png", second: "/src/assets/images/Products/product_1_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
        { id: 2, first: "/src/assets/images/Products/product_2_1.png", second: "/src/assets/images/Products/product_2_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 },
        { id: 3, first: "/src/assets/images/Products/product_3_1.png", second: "/src/assets/images/Products/product_3_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 3 },
        { id: 4, first: "/src/assets/images/Products/product_4_1.png", second: "/src/assets/images/Products/product_4_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 }
    ]
    const data = {
        id: 101,
        images: [image1, image2, image3, image4, image5, image6],
        title: "Numani Chanderi Sari",
        cost: "Rs. 14,400.00",
        ratings: 4.5,
        description: "Celebrate the wedding season in our elegant Green Chanderi Sari, featuring intricate floral and patchwork embroidery. The lehenga's upper border, beautifully embroidered for 2 meters, adds a rich, luxurious touch. Paired with a matching choli and dupatta, this ensemble radiates festive charm, making it the perfect choice for a standout, sophisticated look at any celebration. Crafted in pure chanderi . 5.7-meter length(approx.) 45 inches width. (Approx.)Comes with 1m blouse material in chanderi.Made to order."
    };

    const handleAddToCart = () => {
        const productToAdd = {
            id: data.id,
            pname: data.title,
            price: data.cost,
            first: data.images[0], // Primary image for cart
            ratings: data.ratings,
            count: 1, // Initial count
        };
        dispatch(addToCart(productToAdd)); // Dispatch action to Redux store
        console.log("triggred")
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
                    <button className="addToCart" onClick={handleAddToCart}>ADD TO CART</button>
                    <button className="addToCart" id='wishlist'>ADD TO WISHLIST</button>
                    <span className='retunLine'>Free retuns on all qualifying orders.</span>

                    <hr />
                    <p className="description">{data.description}</p>
                </div>
            </div>

            <div className="productDetails">
                <div className="productStory">
                    <h1>PRODUCT STORY</h1>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
                <div className="productDetailsBottom">
                    <div className="features">
                        <h1>FEATURES AND BENIFITS</h1>
                        <ul>
                            <li>dryCELL: Performance technology designed to wick moisture from the body and keep you free of sweat during exercise</li>
                            <li>Made with 100% recycled material excluding trims & decorations.</li>
                        </ul>
                    </div>
                    <div className="details">
                        <h1>DETAILS</h1>
                        <ul>
                            <li>Slim fit</li>
                            <li>Crew neck</li>
                            <li>Side mesh inserts</li>
                            <li>Football-inspired all-over print and graphic</li>
                            <li>PACE Cat heat transfer on right chest</li>
                            <li>170 gsm, double face jacquard knit fabric</li>
                        </ul>
                    </div>
                    <div className="material">
                        <h1>MATERIAL INFORMATION</h1>
                        <ul>
                            <li>Back Body: 100% polyester</li>
                            <li>Shell: 100% polyester</li>
                        </ul>
                    </div>
                    <div className="country">
                        <h1>COUNTRY OF ORIGIN</h1>
                        <ul>
                            <li>India</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='similarText'>Similar Products</div>
            <ul className="similarProducts">
                {similarData.map((item, index) => {
                    const fullStars = Math.floor(item.ratings); // Get whole number of stars
                    const hasHalfStar = item.ratings % 1 !== 0; // Check if there's a half star

                    return (
                        <li key={index} className='productItem'
                            onClick={() => navigate(`/product/${item.id}`)}>
                            <div className="productImage"><Card source={item} /></div>
                            <div className='productBInfo'>
                                <span className='productName'>{item.pname}</span>
                                <span className='productPrice'>{item.price}</span>
                                <div className="productRatings">
                                    {/* Render full stars */}
                                    {[...Array(fullStars)].map((_, i) => (
                                        <IoIosStar key={`full-${i}`} className="filled" />
                                    ))}
                                    {/* Render half star if applicable */}
                                    {hasHalfStar && <IoIosStarHalf key="half" className="filled" />}
                                    {/* Render empty stars to make total 5 */}
                                    {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                                        <IoIosStar key={`empty-${i}`} className="unfilled" />
                                    ))}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>


        </div>


    );
};

export default Product;
