import EmployeeModel from "../models/employeeModel.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import validator from 'validator'


//login employee
const loginEmployee = async (req, res) => {

    const { email, password } = req.body;


    try {


        const employee = await EmployeeModel.findOne({ email });
        if (!employee) {
            return res.json({ success: false, message: "User does't exists!!" });
        }


        const isPassword = await bcrypt.compare(password, employee.password);
        if (!isPassword) {
            return res.json({ success: false, message: "Invalid password!!" });
        }


        const token = createToken(employee._id);
        res.json({ success: true, token });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Something went wrong!!" })
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
//register employee
const registerEmployee = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const existEmployee = await EmployeeModel.findOne({ email });
        if (existEmployee) {
            return res.json({ success: false, message: "Employee already exists!!" });
        }

        //check validation of email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email address!!" })
        }

        //check strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password!!" })
        }

        //hashing Employee password using bcrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //create new employee account
        const newEmployee = new EmployeeModel({
            name: name,
            email: email,
            password: hashedPassword //here we use hashing password for security
        })
        const employee = await newEmployee.save();
        const token = createToken(employee._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Something went wrong!!" })
    }
}
export { loginEmployee, registerEmployee }