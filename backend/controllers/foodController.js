import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food items
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}


//list all food
const listFood = async (req, res) => {
    try {
        const foodlist = await foodModel.find({});
        res.json({ success: true, data: foodlist })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Error!' })
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })//remove from folder
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Removed food." })//remove from database
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Something went wrong!" })
    }
}

export { addFood, listFood, removeFood }