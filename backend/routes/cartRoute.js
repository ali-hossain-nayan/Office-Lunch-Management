import express from 'express'
import { addToCart, removeToCart, getCart } from '../controllers/cartControlller.js'
import authMiddleWare from '../middleware/authMiddleWare.js';


const cartRouter = express.Router();

cartRouter.post("/add", authMiddleWare, addToCart);
cartRouter.post("/remove", authMiddleWare, removeToCart);
cartRouter.post("/get", authMiddleWare, getCart);

export default cartRouter;