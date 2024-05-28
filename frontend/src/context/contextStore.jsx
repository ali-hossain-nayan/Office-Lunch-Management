import React, { createContext, useEffect, useState } from "react";
// import { food_list } from '../assets/assets';
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [chooseItems, setChooseItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("")
  const [food_list, setFoodList] = useState([])


  const fetchFoodList = async () => {
    const callApi = await axios.get(url + "/api/food/list");
    setFoodList(callApi.data.data);
  }


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

  useEffect(() => {

    async function loadFood() {
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadFood();
  }, [])

  const contextValue = {
    food_list,
    chooseItems,
    setChooseItems,
    addChoose,
    removeChooseItem,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
