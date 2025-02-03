import React from 'react'
import './ZoomingImage.scss'

const ZoomingImage = ({ source }) => {
    return (
        <div className='img-box'>
            <img src={source} alt="" />
        </div>
    )
}

export default ZoomingImage