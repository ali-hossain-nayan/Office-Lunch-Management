import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false })

const EmployeeModel = mongoose.models.user || mongoose.model("user", EmployeeSchema)
export default EmployeeModel;