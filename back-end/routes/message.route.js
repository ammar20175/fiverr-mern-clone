import express from 'express'
import verifyToken from '../middlewares/jwt';
import {createMessage,getMessages } from '../controllers/message.controller'
const messageRouter = express.Router()

messageRouter.post('/', verifyToken, createMessage);
messageRouter.get('/:id', verifyToken, getMessages)

export default messageRouter