import React from 'react';
import './Products.scss';
import Card from '../../Components/Card/Card';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const data = [
    { first: "/src/assets/images/Products/product_1_1.png", second: "/src/assets/images/Products/product_1_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
    { first: "/src/assets/images/Products/product_2_1.png", second: "/src/assets/images/Products/product_2_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 },
    { first: "/src/assets/images/Products/product_3_1.png", second: "/src/assets/images/Products/product_3_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 3 },
    { first: "/src/assets/images/Products/product_4_1.png", second: "/src/assets/images/Products/product_4_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 },
    { first: "/src/assets/images/Products/product_5_1.png", second: "/src/assets/images/Products/product_5_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 2 },
    { first: "/src/assets/images/Products/product_6_1.png", second: "/src/assets/images/Products/product_6_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
    { first: "/src/assets/images/Products/product_7_1.png", second: "/src/assets/images/Products/product_7_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 3.5 },
    { first: "/src/assets/images/Products/product_8_1.png", second: "/src/assets/images/Products/product_8_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4 },
    { first: "/src/assets/images/Products/product_9_1.png", second: "/src/assets/images/Products/product_9_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
    { first: "/src/assets/images/Products/product_1_1.png", second: "/src/assets/images/Products/product_1_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
    { first: "/src/assets/images/Products/product_2_1.png", second: "/src/assets/images/Products/product_2_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 },
    { first: "/src/assets/images/Products/product_3_1.png", second: "/src/assets/images/Products/product_3_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 3 },
    { first: "/src/assets/images/Products/product_4_1.png", second: "/src/assets/images/Products/product_4_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 },
    { first: "/src/assets/images/Products/product_5_1.png", second: "/src/assets/images/Products/product_5_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 2 },
    { first: "/src/assets/images/Products/product_6_1.png", second: "/src/assets/images/Products/product_6_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
    { first: "/src/assets/images/Products/product_7_1.png", second: "/src/assets/images/Products/product_7_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 3.5 },
    { first: "/src/assets/images/Products/product_8_1.png", second: "/src/assets/images/Products/product_8_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4 },
    { first: "/src/assets/images/Products/product_9_1.png", second: "/src/assets/images/Products/product_9_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 }
];

const Products = ({ source }) => {
    const Pdata = source || data;
    return (
        <div className='products'>
            <ul className='productsContainer'>
                {Pdata.map((item, index) => {
                    const fullStars = Math.floor(item.ratings); // Get whole number of stars
                    const hasHalfStar = item.ratings % 1 !== 0; // Check if there's a half star

                    return (
                        <li key={index} className='productItem'>
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
}

export default Products;
