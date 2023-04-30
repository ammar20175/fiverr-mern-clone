import { User } from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config'
import createError from '../utils/createError'

export const register = async (req, res, next) => {

    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            ...req.body,
            password: hash
        });

        await newUser.save();
        res.status(200).send("User has been created.");
    } catch (error) {
        next(error);

    }

}

export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "user not found."));

        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isCorrect) return next(createError(400, "wrong password or username."));

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, JWT_KEY);

        const { password, ...info } = user._doc

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send(info);

    } catch (error) {
        next(error);
    }
}


export const logout = async (req, res, next) => {
    res.clearCookie('accessToken', {
        sameSite: 'none',
        secure: true
    }).status(200).send('User has been logged out.')
}