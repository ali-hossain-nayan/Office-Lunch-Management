import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/contextStore'

const Cart = () => {

  const { chooseItems, removeChooseItem, food_list, url } = useContext(StoreContext)

  return (
    <div className="choose">
      <div className="choose-items">
        <div className="choose-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (chooseItems[item._id] > 0) {
              return (
                <div className="choose-items-title choose-items-item">
                  <img src={url + "/images/" + item.image} alt="item-image" />
                  <p>{item.name}</p>
                  <p>{chooseItems[item._id]}</p>
                  <p onClick={() => removeChooseItem(item._id)} className='cross'>x</p>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Cart