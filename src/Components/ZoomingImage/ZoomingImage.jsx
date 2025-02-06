import React from 'react'
import './ZoomingImage.scss'

const ZoomingImage = ({ image }) => {
    console.log(image)
    return (
        <div className='img-box'>
            <img src={image} alt="" />
        </div>
    )
}

export default ZoomingImage