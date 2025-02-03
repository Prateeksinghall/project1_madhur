import React, { useEffect, useState } from 'react'
import "./Card.scss"
import img1 from '../../assets/images/Categories/Cotton_zari/img1.png'
import img2 from '../../assets/images/Categories/Cotton_zari/img2.png'
const Card = ({ item }) => {
  // const [img2, setImg2] = useState("");
  // useEffect(() => {
  //   item.attributes.img2.data !== null ? setImg2(`${import.meta.env.VITE_API_UPLOAD_URL}` + item.attributes.img2.data.attributes.url) : setImg2(`${import.meta.env.VITE_API_UPLOAD_URL}` + item.attributes.img.data.attributes.url)
  // })
  return (
    <div className="card">
      <div className="image" >
        {item?.attributes.isNew && <span>New season</span>}
        <img src={img1} alt="" className="mainImg" />
        <img src={img2} alt="" className="secondImg" />
      </div>
    </div>
  )
}

export default Card