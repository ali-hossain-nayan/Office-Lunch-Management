import React from 'react'
import './ViewMenu.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import axios from 'axios'
import { assets } from '../../../../../frontend/src/assets/assets'
const ViewMenu = () => {

  const [view, setView] = useState([])
  const url = "http://localhost:4000"

  const fetchAllChosenMenu = async () => {
    const callApi = await axios.get(url + "/api/food/view");
    if (callApi.data.success) {
      setView(callApi.data.data)
      console.log(callApi.data.data)
    }
    else {
      toast.error("Something went wrong!!")
    }
  }
  useEffect(() => {
    fetchAllChosenMenu();
  }, [])

  return (
    <div className="view-menu">
      <h3>View Employee chosen Menu Today</h3>
      <div className="view-list">
        {view.map((item, index) => (
          <div key={index} className="view-item">
            <img src={assets.parcel_icon} alt="parcel" />
            {item.name}

          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewMenu