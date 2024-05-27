import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/contextStore'
const FoodItem = ({ id, name, description, image }) => {

    const { chooseItems, addChoose, removeChooseItem } = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
                {
                    !chooseItems[id] ?
                        <img className='add' onClick={() => addChoose(id)} src={assets.add_icon} />
                        : <div className='food-item-counter'>
                            <img onClick={() => removeChooseItem(id)} src={assets.remove_icon_red} alt="" />
                            <p>{chooseItems[id]}</p>
                            <img onClick={() => addChoose(id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <p>{name}</p>
            </div>
            <p className="food-item-desc">{description}</p>
        </div>
    )
}

export default FoodItem