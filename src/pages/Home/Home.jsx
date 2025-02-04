import React from 'react'
import './Home.scss'
import Slider from '../../Components/Slider/Slider'
import ZoomingImage from '../../Components/ZoomingImage/ZoomingImage'
import ZoomingImage1 from '../../assets/images/ZoomingImage1.jpeg'
import ZoomingImage2 from '../../assets/images/ZoomingImage2.png'
import img1 from '../../assets/images/Categories/Cotton_zari/img1.png'
import img2 from '../../assets/images/Categories/Cotton_zari/img2.png'
import Card from '../../Components/Card/Card'
import BestSeller from '../../Components/BestSeller/BestSeller'
import CollectionButton from '../../Components/CollectionButton/CollectionButton'


const Home = () => {
    const images = [ZoomingImage1, ZoomingImage2, img1, img2, ZoomingImage2, ZoomingImage1, ZoomingImage2, img1, img2, ZoomingImage2]
    const handleButtonClick = (collectionName) => {
        alert(`${collectionName} collection clicked!`);
        // You can add more functionality here, such as navigating to another page or showing a modal
    }
    const source = {
        first: img1,
        second: img2
    }
    return (
        <div className='home'>
            <Slider />
            <div className='Collections'>
                <div className='Collections-text'>Collections</div>
                <div className='Collections-item'>
                    <div className='Collection1' onClick={() => handleButtonClick('Cotton')} >
                        <ZoomingImage source={ZoomingImage1} />
                        <CollectionButton text="Cotton" />
                    </div>
                    <div className='Collection2' onClick={() => handleButtonClick('Linen')}>
                        <ZoomingImage source={ZoomingImage2} />
                        <CollectionButton text="Linen" />
                    </div>
                </div>
            </div>

            <div className='Categories'>
                <div className='Collections-text'>Categories</div>
                <div className='Categories-item'>
                    <div className='Categories-card'>
                        <div className='cards'><Card source={source} /></div>
                        <span>MUL COTTON</span>
                    </div>
                    <div className='Categories-card'>
                        <div className='cards'><Card source={source} /></div>
                        <span>PURE COTTON</span>
                    </div>
                    <div className='Categories-card'>
                        <div className='cards'><Card source={source} /></div>
                        <span>COTTON ZARI</span>
                    </div>
                    <div className='Categories-card'>
                        <div className='cards'><Card source={source} /></div>
                        <span>COTTON ZAMDANI</span>
                    </div>
                </div>
            </div>
            <div className='shop_now'>Shop Now</div>
            <div className='Collections-text'>Best Sellers</div>
            <div className='best_seller'>

                <BestSeller images={images} />

            </div>
        </div >
    )
}

export default Home