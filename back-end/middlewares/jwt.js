import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config';
import createError from '../utils/createError';

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) return next(createError(401), "you are not authenticated.");

    jwt.verify(token, JWT_KEY, async (error, payload) => {
        if (error) return next(createError(403), "token is not valid.");

        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next()
    });
}

export default verifyToken