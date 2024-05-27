import React, { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [chooseItems, setChooseItems] = useState({});

  const addChoose = (itemId) => {
    setChooseItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeChooseItem = (itemId) => {
    setChooseItems((prev) => {
      if (!prev[itemId]) return prev;

      const updatedChooseItems = { ...prev };
      if (updatedChooseItems[itemId] > 1) {
        updatedChooseItems[itemId] -= 1;
      } else {
        delete updatedChooseItems[itemId];
      }
      return updatedChooseItems;
    });
  };

  useEffect(() => {
    console.log(chooseItems);
  }, [chooseItems]);

  const contextValue = {
    food_list,
    chooseItems,
    setChooseItems,
    addChoose,
    removeChooseItem,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
