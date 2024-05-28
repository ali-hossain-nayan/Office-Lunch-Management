import express from 'express'
import { loginEmployee, registerEmployee } from '../controllers/employeeController.js'

const EmployeeRouter = express.Router();

EmployeeRouter.post("/register", registerEmployee)
EmployeeRouter.post("/login", loginEmployee)

export default EmployeeRouter;