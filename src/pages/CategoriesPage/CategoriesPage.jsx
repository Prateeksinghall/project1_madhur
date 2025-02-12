import React from 'react';
import { useEffect } from 'react';
import './CategoriesPage.scss';
import Products from '../Products/Products';
import { useParams } from 'react-router-dom';
import CottonZamdani from '../../assets/images/Categories/main/CottonZamdani.png';
import CottonZari from '../../assets/images/Categories/main/CottonZari.jpg';
import MulCotton from '../../assets/images/Categories/main/MulCotton.jpg';
import PureCotton from '../../assets/images/Categories/main/PureCotton.png';

// Categories data
const categories = [
    { id: '1', title: "Mul Cotton", image: CottonZamdani },
    { id: '2', title: "Pure Cotton", image: CottonZari },
    { id: '3', title: "Cotton Zari", image: MulCotton },
    { id: '4', title: "Cotton Zamdani", image: PureCotton },

];

const CategoriesPage = () => {
    // Get the `id` from the URL
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    // Find the corresponding category based on the id
    const category = categories.find(cat => cat.id === id) || {};
    console.log(id)

    // Sample product data for the selected category
    const data = [
        { first: "/src/assets/images/Products/product_1_1.png", second: "/src/assets/images/Products/product_1_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 5 },
        { first: "/src/assets/images/Products/product_2_1.png", second: "/src/assets/images/Products/product_2_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 4.5 }
        , { first: "/src/assets/images/Products/product_3_1.png", second: "/src/assets/images/Products/product_3_2.png", pname: "NUMANI CHANDERI SARI", price: "Rs. 14,000.00", ratings: 3 },
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

    ];

    return (
        <div className='CategoriesPage'>
            <div className='CategoriesHeader'>
                <img src={category.image} alt={category.title} />
                <span>{category.title}</span>
            </div>

            {/* Display products based on the selected category */}
            <Products source={data} />
        </div>
    );
}

export default CategoriesPage;
