import express from 'express'
const userRouter = express.Router()
import { deletUser,getUser } from '../controllers/user.controller';
import verifyToken from '../middlewares/jwt'

userRouter.get('/', (req, res) => {
    res.json({ msg: "hello" })
});

userRouter.delete('/:id', verifyToken, deletUser);
userRouter.get('/:id', verifyToken, getUser);

export default userRouter