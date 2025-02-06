import React from 'react'
import './ZoomingImage.scss'

const ZoomingImage = ({ image }) => {
    return (
        <div className='img-box'>
            <img src={image.image} alt="" />
        </div>
    )
}

export default ZoomingImage