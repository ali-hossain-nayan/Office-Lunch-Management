import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/contextStore'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes Today..</h2>
            <div className="food-display-list">
                {
                    food_list.map((item, index) => {
                        if (category === 'All' || category === item.category) {

                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay