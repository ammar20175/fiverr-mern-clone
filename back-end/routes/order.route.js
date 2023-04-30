import express from 'express'
import verifyToken from '../middlewares/jwt'
import { getOrders, createOrder } from '../controllers/order.controller'

const orderRouter = express.Router()

orderRouter.post('/:gigId',verifyToken,createOrder)
orderRouter.get('/', verifyToken, getOrders)
// orderRouter.post('/create-payment-intent/:id', verifyToken, intent)
// orderRouter.put('/', verifyToken, confirm)

export default orderRouter