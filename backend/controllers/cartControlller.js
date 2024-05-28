import EmployeeModel from '../models/employeeModel.js'


//add items to cart

const addToCart = async (req, res) => {
    try {
        let employeeData = await EmployeeModel.findOne({ _id: req.body.employeeId });

        let cartData = await employeeData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await EmployeeModel.findByIdAndUpdate(req.body.employeeId, { cartData });

        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error!!" })
    }

}



//remove items
const removeToCart = async (req, res) => {
    try {
        let employeeData = await EmployeeModel.findById(req.body.employeeId);
        let cartData = await employeeData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        await EmployeeModel.findByIdAndUpdate(req.body.employeeId, { cartData });
        res.json({ success: true, message: "Remove from the Cart." })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error!!" })
    }

}


//fetch employee cart data
const getCart = async (req, res) => {
    try {
        let employeeData = await EmployeeModel.findById(req.body.employeeId);
        let cartData = await employeeData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!!" })
    }


}

export { addToCart, removeToCart, getCart };