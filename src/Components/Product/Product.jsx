import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import {useParams} from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../assets/redux/cartReducer';
const Product = () => {
  const id=useParams().id;
  const {data,loading,error}=useFetch(`/products/${id}?populate=*`)
  console.log(data);
  
  const [selectedImg,setSelectedImg]=useState("img");
  const [quantity,setQuantity]=useState(0);

  const dispatch=useDispatch();
  return (
    <div className="product">
      {loading ? ("Loading") :(<>
      <div className="left">
          <div className="images">
            <img src={`${import.meta.env.VITE_API_UPLOAD_URL}` + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>{setSelectedImg("img")}}/>
            <img src={`${import.meta.env.VITE_API_UPLOAD_URL}` + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>{setSelectedImg("img2")}}/>
          </div>
          <div className="mainImg">
            <img src={`${import.meta.env.VITE_API_UPLOAD_URL}` + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
          </div>
      </div>

      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>
        {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev===0 ?0:prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  }))}>
          <AddShoppingCartIcon/>Add To Cart
        </button>
        <div className="links">
          <div className="item"><FavoriteBorderIcon/>Add To Wishlist</div>
          <div className="item"><BalanceIcon/>Add To Compare</div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
        </div>
            <div><hr /></div>
        <div className="info">
              <span>DESCRIPTION</span>
              <div><hr /></div>
              <span>ADDITIONAL INFORMATION</span>
              <div><hr /></div>
              <span>FAQ</span>
              
        </div>
      </div>
      </>)}
    </div>
  )
}

export default Product