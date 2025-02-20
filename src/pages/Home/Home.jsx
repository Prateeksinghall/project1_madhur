import { React, useState, useEffect } from 'react'
import './Home.scss'
import { useNavigate } from "react-router-dom";
import Slider from '../../Components/Slider/Slider'
import ZoomingImage from '../../Components/ZoomingImage/ZoomingImage'
import ZoomingImage1 from '../../assets/images/ZoomingImage1.jpeg'
import ZoomingImage2 from '../../assets/images/ZoomingImage2.png'
import img1 from '../../assets/images/Categories/Cotton_zari/img1.png'
import img2 from '../../assets/images/Categories/Cotton_zari/img2.png'
import Card from '../../Components/Card/Card'
import BestSeller from '../../Components/BestSeller/BestSeller'
import CollectionButton from '../../Components/CollectionButton/CollectionButton'
import TestimonialsMainBg from '../../assets/images/testimonials/testimonials_main_bg.png'
import TestimonialCard from '../../Components/TestimonialCard/TestimonialCard';
import Testimonials1 from '../../assets/images/testimonials/testimonials1.png'
import Testimonials2 from '../../assets/images/testimonials/testimonials2.png'
import Testimonials3 from '../../assets/images/testimonials/testimonials3.png'
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
import HomeVideoSrc from '../../assets/videos/homeVideo.mp4'

const testimonialsData = [
    { image: Testimonials1, title: "John Doe", text: "Amazing product! Highly recommend." },
    { image: Testimonials2, title: "Jane Smith", text: "Love it! The quality is top-notch." },
    { image: Testimonials3, title: "Alice Johnson", text: "Great experience, will buy again!" },
    { image: Testimonials2, title: "Robert Brown", text: "Exceeded my expectations!" },
    { image: Testimonials3, title: "Emily White", text: "Simply the best! 5 stars." },
    { image: Testimonials1, title: "Michael Green", text: "Fantastic customer service!" },
    { image: Testimonials3, title: "Alice Johnson", text: "Great experience, will buy again!" },
    { image: Testimonials2, title: "Robert Brown", text: "Exceeded my expectations!" }
];

const aboutUsData = { image: Testimonials3, title: "Text Goes Here", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." }

const Home = () => {
    const images = [ZoomingImage1, ZoomingImage2, img1, img2, ZoomingImage2, ZoomingImage1, ZoomingImage2, img1, img2, ZoomingImage2]

    const handleButtonClick = (collectionName) => {
        if (collectionName === 'Cotton') {
            navigate('/collections/1'); // Navigate to the correct collection
        } else if (collectionName === 'Linen') {
            navigate('/collections/2'); // You can add navigation for Linen as well
        }
    };

    const source = {
        first: img1,
        second: img2
    }

    const [index, setIndex] = useState(0);

    const navigate = useNavigate();
    return (
        <div className='home'>
            <Slider />
            <div className='Collections'>
                <div className='Collections-text'>Collections</div>
                <div className='Collections-item'>
                    <div className='Collection1' onClick={() => handleButtonClick('Cotton')} >
                        <ZoomingImage image={{ image: ZoomingImage1 }} />
                        <CollectionButton text="Cotton" />
                    </div>
                    <div className='Collection2' onClick={() => handleButtonClick('Linen')}>
                        <ZoomingImage image={{ image: ZoomingImage2 }} />
                        <CollectionButton text="Linen" />
                    </div>
                </div>
            </div>

            <div className='Categories'>
                <div className='Collections-text'>Categories</div>
                <div className='Categories-item'>
                    {["MUL COTTON", "PURE COTTON", "COTTON ZARI", "COTTON ZAMDANI"].map((category, idx) => (
                        <div className='Categories-card' key={idx} onClick={() => navigate(`/categories/${idx + 1}`)}>
                            <div className='cards'><Card source={source} /></div>
                            <span>{category}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='shop_now'>Shop Now</div>

            <div className='Collections-text'>Best Sellers</div>
            <div className='best_seller'>
                <BestSeller data={testimonialsData} ImageComponent={ZoomingImage} />
            </div>
            <div className='shop_now'>View All</div>

            <div className='Collections-text'>Customer Testimonials</div>
            <div className='testimonials'>
                <img src={TestimonialsMainBg} alt="Testimonials Background" className='testimonials_main_bg' />
                <div className='TestimanialsCards'>
                    <BestSeller data={testimonialsData} ImageComponent={TestimonialCard} />
                </div>
            </div>

            <div className='homeVideo'>
                <HomeVideo videoSrc={HomeVideoSrc} />
            </div>

            <div className='Collections-text'>About Us</div>
            <div className='AboutUs'>
                <TestimonialCard image={aboutUsData} />
            </div>


        </div >
    )
}

export default Home
