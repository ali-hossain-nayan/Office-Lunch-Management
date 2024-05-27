import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets'
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {


  const [chooseItems, setChooseItems] = useState({})

  const addChoose = (itemId) => {
    if (!chooseItems[itemId]) {
      setChooseItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setChooseItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }
  const removeChooseItem = (itemId) => {
    setChooseItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  useEffect(()=>{
    console.log(chooseItems)
  },[chooseItems])


  const contextValue = {
    food_list,
    chooseItems,
    setChooseItems,
    addChoose,
    removeChooseItem
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider