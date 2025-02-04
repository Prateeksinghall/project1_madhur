import React from 'react'
import './CollectionButton.scss'

const CollectionButton = ({ text }) => {
    return (
        <div className="button-overlay">
            <button className="image-button">{text}</button>
        </div>
    )
}

export default CollectionButton