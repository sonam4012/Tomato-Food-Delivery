import React,{useContext}  from 'react'
import './FoodItem.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'

function FoodItem({id,name,price,description,image}) {

  const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt=""/>
            {!cartItems[name]      // if itemcount not equla to zero display image tag 
            ?<img className ='add' onClick={()=>addToCart(name)} src={assets.add_icon_white} alt=""/>
            :<div className='food-item-counter'>
             <img onClick={()=>removeFromCart(name)} src={assets.remove_icon_red} alt=""/>
             <p>{cartItems[name]}</p>
             <img onClick={()=>addToCart(name)} src={assets.add_icon_green} alt=""/>
            </div>
            } 
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
       
      
    </div>
  )
}

export default FoodItem
