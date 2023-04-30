import { User } from "../models";
import jwt from 'jsonwebtoken'
import { JWT_KEY } from "../config";
import createError from "../utils/createError";

export const deletUser = async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) return next(createError(403, 'you can delete only your account.'));

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted.")


}


export const getUser = async (req, res, next) => {

    const user = await User.findById(req.params.id);
    res.status(200).send(user)


}