import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Card from '../../Components/Card/Card';
import './Product.scss';

// Importing product images
import image1 from '../../assets/images/Products/product_1_1.png';
import image2 from '../../assets/images/Products/product_1_2.png';
import image3 from '../../assets/images/Products/product_2_1.png';
import image4 from '../../assets/images/Products/product_2_2.png';
import image5 from '../../assets/images/Products/product_3_1.png';
import image6 from '../../assets/images/Products/product_3_2.png';

const Product = () => {
    const { id } = useParams(); // Get product ID from URL
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            images: [image1, image2, image3, image4, image5, image6],
            title: "Numani Chanderi Sari1",
            cost: "Rs. 14,400.00",
            ratings: 4.5,
            description: "Celebrate the wedding season in our elegant Green Chanderi Sari...",
        },
        {
            id: 2,
            images: [image2, image1, image3, image4, image5, image6],
            title: "Numani Chanderi Sari2",
            cost: "Rs. 14,400.00",
            ratings: 4.5,
            description: "Celebrate the wedding season in our elegant Green Chanderi Sari...",
        },
        {
            id: 3,
            images: [image3, image1, image2, image4, image5, image6],
            title: "Numani Chanderi Sari3",
            cost: "Rs. 14,400.00",
            ratings: 4.5,
            description: "Celebrate the wedding season in our elegant Green Chanderi Sari...",
        },
        {
            id: 4,
            images: [image4, image1, image3, image2, image5, image6],
            title: "Numani Chanderi Sari4",
            cost: "Rs. 14,400.00",
            ratings: 4.5,
            description: "Celebrate the wedding season in our elegant Green Chanderi Sari...",
        }
    ];

    const similarData = [
        { id: 1, first: image1, second: image2, pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
        { id: 2, first: image3, second: image4, pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 },
        { id: 3, first: image5, second: image6, pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 3 },
        { id: 4, first: image4, second: image2, pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 }
    ];

    // Find the product based on the URL ID
    const product = data.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        const productToAdd = {
            id: product.id,
            pname: product.title,
            price: product.cost,
            first: product.images[0],
            ratings: product.ratings,
            count: 1,
        };
        dispatch(addToCart(productToAdd));
    };

    const imageRefs = useRef([]);

    const handleImageClick = (index) => {
        if (imageRefs.current[index]) {
            imageRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fullStars = Math.floor(product.ratings);
    const hasHalfStar = product.ratings % 1 !== 0;

    return (
        <div className='productMain'>
            <div className="product">
                <div className="left">
                    <div className="images">
                        {product.images.map((img, index) => (
                            <img key={index} src={img} alt={`Product ${index}`} onClick={() => handleImageClick(index)} />
                        ))}
                    </div>
                    <div className="mainImg">
                        {product.images.map((img, index) => (
                            <img key={index} src={img} alt={`Main Product ${index}`} ref={el => (imageRefs.current[index] = el)} />
                        ))}
                    </div>
                </div>

                <div className="right">
                    <h2 className='title'>{product.title}</h2>
                    <div className="price">
                        <span className='cost'>{product.cost}</span>
                        <span className='spanBelowCost'>Price includes GST</span>
                    </div>
                    <span className='spanBelowPrice'>Extra 10% off auto-applied at checkout</span>

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
                    <span className='retunLine'>Free returns on all qualifying orders.</span>

                    <hr />
                    <p className="description">{product.description}</p>
                </div>
            </div>

            <div className='similarText'>Similar Products</div>
            <ul className="similarProducts">
                {similarData.map((item) => {
                    const fullStars = Math.floor(item.ratings);
                    const hasHalfStar = item.ratings % 1 !== 0;

                    return (
                        <li key={item.id} className='productItem' onClick={() => navigate(`/product/${item.id}`)}>
                            <div className="productImage"><Card source={item} /></div>
                            <div className='productBInfo'>
                                <span className='productName'>{item.pname}</span>
                                <span className='productPrice'>{item.price}</span>
                                <div className="productRatings">
                                    {[...Array(fullStars)].map((_, i) => (
                                        <IoIosStar key={`full-${i}`} className="filled" />
                                    ))}
                                    {hasHalfStar && <IoIosStarHalf key="half" className="filled" />}
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
