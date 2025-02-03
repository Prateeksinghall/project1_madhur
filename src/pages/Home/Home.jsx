import React from 'react'
import './Home.scss'
import Slider from '../../Components/Slider/Slider'
import ZoomingImage from '../../Components/ZoomingImage/ZoomingImage'
import ZoomingImage1 from '../../assets/images/ZoomingImage1.jpeg'
import ZoomingImage2 from '../../assets/images/ZoomingImage2.png'
import Card from '../../Components/Card/Card'

const Home = () => {
    const handleButtonClick = (collectionName) => {
        alert(`${collectionName} collection clicked!`);
        // You can add more functionality here, such as navigating to another page or showing a modal
    }
    return (
        <div className='home'>
            <Slider />
            <div className='Collections'>
                <div className='Collections-text'>Collections</div>
                <div className='Collections-item'>
                    <div className='Collection1' onClick={() => handleButtonClick('Cotton')} >
                        <ZoomingImage source={ZoomingImage1} />
                        <div className="button-overlay">
                            <button className="image-button">Cotton</button>
                        </div>
                    </div>
                    <div className='Collection2' onClick={() => handleButtonClick('Linen')}>
                        <ZoomingImage source={ZoomingImage2} />
                        <div className="button-overlay">
                            <button className="image-button">Linen</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Categories'>
                <div className='Collections-text'>Categories</div>
                <div className='Collections-item'>
                    <Card />
                    <Card />
                </div>
            </div>

        </div>
    )
}

export default Home