import React, { useEffect, useState } from 'react'
import "./Card.scss"

const Card = ({ source }) => {
  // const [img2, setImg2] = useState("");
  // useEffect(() => {
  //   item.attributes.img2.data !== null ? setImg2(`${import.meta.env.VITE_API_UPLOAD_URL}` + item.attributes.img2.data.attributes.url) : setImg2(`${import.meta.env.VITE_API_UPLOAD_URL}` + item.attributes.img.data.attributes.url)
  // })
  return (
    <div className="card">
      <div className="image" >
        <img src={source.first} alt="" className="mainImg" />
        <img src={source.second} alt="" className="secondImg" />
      </div>
    </div>
  )
}

export default Card