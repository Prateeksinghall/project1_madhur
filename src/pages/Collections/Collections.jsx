import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Collections.scss';
import Products from '../Products/Products';
import CottonZamdani from '../../assets/images/Categories/main/CottonZamdani.png';
import CottonZari from '../../assets/images/Categories/main/CottonZari.jpg';
import MulCotton from '../../assets/images/Categories/main/MulCotton.jpg';
import PureCotton from '../../assets/images/Categories/main/PureCotton.png';

const Collections = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const data = [
        { id: 1, name: 'Mul Cotton', image: MulCotton },
        { id: 2, name: 'Pure Cotton', image: PureCotton },
        { id: 3, name: 'Cotton Zari', image: CottonZari },
        { id: 4, name: 'Cotton Zamdani', image: CottonZamdani }
    ];

    return (
        <div className='collectionMain'>
            <div className="collections">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="collection"
                        onClick={() => navigate(`/categories/${item.id}`)}
                    >
                        <img src={item.image} alt={item.name} />
                        <span className="name">{item.name.replace(" ", "\n")}</span> {/* Add line break */}
                    </div>
                ))}
            </div>
            <Products />
        </div>
    );
};

export default Collections;
