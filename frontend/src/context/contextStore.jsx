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


  const addChoose = async (itemId) => {
    if (!chooseItems[itemId]) {
      setChooseItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {

      setChooseItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
    }
  };


  const removeChooseItem = async (itemId) => {
    setChooseItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
    }
  };

  const cartDataLoad = async (token) => {
    const callApi = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
    setChooseItems(callApi.data.cartData)
  }

  useEffect(() => {
    console.log(chooseItems);
  }, [chooseItems]);

  useEffect(() => {

    async function loadFood() {
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem("token"));
        await cartDataLoad(localStorage.getItem("token"));
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
