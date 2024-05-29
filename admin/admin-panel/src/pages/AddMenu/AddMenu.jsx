import React, { useState } from 'react'
import './AddMenu.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const AddMenu = () => {
    const takeUrl = "http://localhost:4000";
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Salad"
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("category", data.category)
        formData.append("image", image)

        
        const callApi = await axios.post(`${takeUrl}/api/food/add`, formData);
        if (callApi.data.success) {
            setData({
                name: "",
                description: "",
                category: ""
            })
            setImage(false)
            toast.success(callApi.data.message)
        } else {
            toast.error(callApi.data.message)
        }
    }

    // useEffect(() => {
    //     console.log(data)
    // }, [data])


    return (
        <div className="add">
            <form onSubmit={handleSubmit} className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className="add-menu-name flex-col">
                    <p>Menu name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Write menu name..' />
                </div>
                <div className="add-menu-description flex-col">
                    <p>Menu description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write description here...'></textarea>
                </div>
                <div className="add-category">
                    <div className="add-category flex-col">
                        <p>Menu Category</p>
                        <select onChange={onChangeHandler} value={data.category} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pasta">Rice</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='add-btn'>Add</button>
            </form>
        </div>
    )
}

export default AddMenu