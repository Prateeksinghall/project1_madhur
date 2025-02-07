import React from 'react'
import './SecondFooter.scss'
import BackGroundImage from '../../assets/images/testimonials/testimonials2.png'
import MadeInIndia from '../../assets/images/secondFooter/MadeInIndia.png'
import FreeDelievery from '../../assets/images/secondFooter/FreeDelievery.png'
import Rating from '../../assets/images/secondFooter/Rating.png'
import Store from '../../assets/images/secondFooter/Store.png'

const SecondFooter = () => {
    return (
        <div className='SecondFooter'>
            <img src={BackGroundImage} alt="" className='bgImage' />
            <div className='SecondFooterElements'>
                <img src={MadeInIndia} alt="" />
                <img src={FreeDelievery} alt="" />
                <img src={Store} alt="" />
                <img src={Rating} alt="" />
            </div>
        </div>
    )
}

export default SecondFooter